import { describe,it,expect } from 'vitest';
import { emptyProgress,projectProgress,progressPatch,validEvent,type ProgressEvent } from './progress-events';
const edit=(id:string,at:number,patch:ProgressEvent['patch'],epoch='initial'):ProgressEvent=>({id,at,patch,epoch,kind:'edit'});
describe('durable exam progress',()=>{
 it('a stale empty tab navigating cannot wipe 64 completed answers',()=>{
  const empty=emptyProgress();
  const answers=Object.fromEntries(Array.from({length:64},(_,i)=>['q'+i,'answer']));
  const complete=edit('complete',1,{answers,submitted:true});
  const stale=edit('stale',2,progressPatch(empty,{...empty,currentIndex:1}));
  expect(Object.keys(projectProgress([complete,stale]).state.answers)).toHaveLength(64);
  expect(projectProgress([complete,stale]).state.submitted).toBe(true);
 });
 it('merges independent offline answers in any delivery order and deduplicates retries',()=>{
  const a=edit('a',1,{answers:{q1:'a'}}),b=edit('b',2,{answers:{q2:'b'}});
  expect(projectProgress([b,a,a]).state.answers).toEqual({q1:'a',q2:'b'});
  expect(projectProgress([a,b]).state).toEqual(projectProgress([b,a]).state);
 });
 it('preserves mistakes when retry becomes correct',()=>{
  expect(projectProgress([edit('a',1,{answers:{q:'wrong'},mistakes:{q:true}}),edit('b',2,{answers:{q:'right'},mistakes:{q:false}})]).state).toMatchObject({answers:{q:'right'},mistakes:{q:true}});
 });
 it('reset starts a new attempt; delayed old-tab writes cannot resurrect it',()=>{
  const reset:ProgressEvent={id:'reset',at:2,epoch:'initial',kind:'reset',patch:{}};
  const all=[edit('a',1,{answers:{q1:'a'}}),reset,edit('old',5,{answers:{q2:'b'}}),edit('new',3,{answers:{q3:'c'}},'reset')];
  expect(projectProgress(all).state.answers).toEqual({q3:'c'});
  expect(all).toHaveLength(4); // previous attempt remains recoverable
 });
 it('imports both legacy copies without allowing an import to replace newer answers',()=>{
  const imports:ProgressEvent[]=[{id:'legacy-a',at:0,epoch:'initial',kind:'import',patch:{answers:{q1:'old'}}},{id:'legacy-b',at:0,epoch:'initial',kind:'import',patch:{answers:{q2:'b'}}}];
  expect(projectProgress([...imports,edit('new',1,{answers:{q1:'new'}})]).state.answers).toEqual({q1:'new',q2:'b'});
 });
 it('restores completed status, flags and current question after serialization',()=>{
  const event=edit('a',1,{answers:{q:'a'},currentIndex:39,flagged:{q:true},submitted:true});
  expect(projectProgress(JSON.parse(JSON.stringify([event]))).state).toMatchObject(event.patch);
 });
 it('does not mutate input or silently interpret bad storage as valid events',()=>{
  const defaults={q:true}; const e=edit('a',1,{answers:{q:'a'}});
  expect(validEvent({...e,patch:{answers:null}})).toBe(false);
  expect(validEvent({...e,patch:{currentIndex:-1}})).toBe(false);
  projectProgress([e],defaults);expect(defaults).toEqual({q:true});expect(e.patch).toEqual({answers:{q:'a'}});
 });
 it('an empty snapshot cannot delete answers: only an explicit reset can',()=>{
  const before={...emptyProgress(),answers:{q:'a'}};
  expect(progressPatch(before,emptyProgress())).toEqual({});
 });
});
