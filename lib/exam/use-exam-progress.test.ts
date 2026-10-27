import { afterEach,beforeEach,describe,expect,it,vi } from 'vitest';
import { createElement } from 'react';
import { createRequire } from 'node:module';
import type { ExamQuestion } from './types';
import { useExamProgress } from './use-exam-progress';
const {create,act} = createRequire(import.meta.url)('react-test-renderer');
const backend=vi.hoisted(()=>({rows:new Map<string,{user_id:string;test_id:string;event_id:string;data:unknown}>(),offline:false}));
vi.mock('@/lib/supabase/client',()=>({createClient:()=>({from:()=>({
 upsert:(rows:Array<{user_id:string;test_id:string;event_id:string;data:unknown}>)=>({abortSignal:async()=>{
  if(backend.offline)return {error:new Error('offline')};
  for(const row of rows){const key=row.user_id+row.test_id+row.event_id;if(!backend.rows.has(key))backend.rows.set(key,row);}
  return {error:null};
 }}),
 select:()=>{
  const filters:Record<string,string>={};let lo=0,hi=499;
  const chain={eq:(key:string,value:string)=>{filters[key]=value;return chain;},order:()=>chain,range:(a:number,b:number)=>{lo=a;hi=b;return chain;},abortSignal:async()=>backend.offline?{error:new Error('offline')}:{error:null,data:[...backend.rows.values()].filter(r=>r.user_id===filters.user_id&&r.test_id===filters.test_id).sort((a,b)=>a.event_id.localeCompare(b.event_id)).slice(lo,hi+1)}};
  return chain;
 }
})})}));
class MemoryStorage {
 map=new Map<string,string>();get length(){return this.map.size;}
 key(i:number){return [...this.map.keys()][i]??null;}
 getItem(k:string){return this.map.get(k)??null;}
 setItem(k:string,v:string){this.map.set(k,v);}
 removeItem(k:string){this.map.delete(k);}
}
const questions=Array.from({length:64},(_,i)=>({id:'q'+i,is_flagged_default:false})) as ExamQuestion[];
const handles:Record<string,ReturnType<typeof useExamProgress>>={};
const roots:Array<{unmount:()=>void}>=[];
// Test harness exposes the latest hook result to assertions.
// eslint-disable-next-line react-hooks/immutability
function Harness({name,user='user',test='r2'}:{name:string;user?:string;test?:string}){handles[name]=useExamProgress(user,test,questions);return null;}
async function mount(name:string,user='user',test='r2'){
 let root: {unmount:()=>void};
 await act(async()=>{root=create(createElement(Harness,{name,user,test}));});roots.push(root!);return root!;
}
beforeEach(()=>{
 backend.rows.clear();backend.offline=false;
 const target=new EventTarget();
 vi.stubGlobal('localStorage',new MemoryStorage());vi.stubGlobal('sessionStorage',new MemoryStorage());
 vi.stubGlobal('window',{localStorage,sessionStorage,setInterval,clearInterval,addEventListener:target.addEventListener.bind(target),removeEventListener:target.removeEventListener.bind(target)});
 vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT',true);
});
afterEach(async()=>{for(const root of roots.splice(0))await act(async()=>root.unmount());vi.unstubAllGlobals();});
describe('exam persistence integration',()=>{
 it('keeps completed answers when a stale tab navigates, then restores on a fresh device',async()=>{
  await mount('A');await mount('B');
  await act(async()=>handles.A.update(s=>({...s,answers:{q0:'a',q1:'b'},currentIndex:63,submitted:true})));
  await act(async()=>handles.B.update(s=>({...s,currentIndex:1})));
  expect(handles.B.state.answers).toEqual({q0:'a',q1:'b'});
  // New browser profile: no shared local storage, only account data.
  vi.stubGlobal('localStorage',new MemoryStorage());window.localStorage=localStorage;
  await mount('new-device');
  expect(handles['new-device'].state.answers).toEqual({q0:'a',q1:'b'});
  expect(handles['new-device'].state.submitted).toBe(true);
  expect(handles['new-device'].status).toBe('Đã lưu vào tài khoản');
 });
 it('saves offline synchronously, survives remount, then uploads on retry',async()=>{
  backend.offline=true;const root=await mount('offline');
  await act(async()=>handles.offline.update(s=>({...s,answers:{q0:'a'}})));
  expect(handles.offline.status).toContain('chưa đồng bộ');
  expect(localStorage.length).toBeGreaterThan(0);
  await act(async()=>root.unmount());roots.splice(roots.indexOf(root),1);
  await mount('reopened');expect(handles.reopened.state.answers).toEqual({q0:'a'});
  backend.offline=false;await act(async()=>handles.reopened.retry());
  expect(handles.reopened.status).toBe('Đã lưu vào tài khoản');expect(backend.rows.size).toBe(1);
 });
 it('keeps progress isolated by user and exam',async()=>{
  await mount('one');await act(async()=>handles.one.update(s=>({...s,answers:{q0:'a'}})));
  await mount('two','other-user');await mount('exam','user','r4');
  expect(handles.two.state.answers).toEqual({});expect(handles.exam.state.answers).toEqual({});
 });
 it('retains legacy data while migrating it, then resets without erasing history',async()=>{
  localStorage.setItem('jp-go-exam-test-r2',JSON.stringify({currentIndex:39,answers:{q0:'a'},flagged:{},mistakes:{}}));
  await mount('legacy');expect(handles.legacy.state.answers).toEqual({q0:'a'});
  expect(localStorage.getItem('jp-go-exam-test-r2')).not.toBeNull();
  await act(async()=>handles.legacy.reset());expect(handles.legacy.state.answers).toEqual({});
  await mount('after-reset');expect(handles['after-reset'].state.answers).toEqual({});
  expect(backend.rows.size).toBe(2);
 });
 it('reports failure if neither browser nor server can save',async()=>{
  backend.offline=true;await mount('failed');
  vi.spyOn(localStorage,'setItem').mockImplementation(()=>{throw new Error('quota');});
  await act(async()=>handles.failed.update(s=>({...s,answers:{q0:'a'}})));
  expect(handles.failed.status).toContain('Chưa lưu được');
  expect(handles.failed.state.answers).toEqual({q0:'a'});
 });
});
