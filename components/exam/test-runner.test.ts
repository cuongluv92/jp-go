import {beforeEach,describe,it,expect,vi} from 'vitest';
import {createElement,useState} from 'react';
import {createRequire} from 'node:module';
import {TestRunner} from './test-runner';
import type {ExamTest,ExamQuestion} from '@/lib/exam/types';
import {emptyProgress} from '@/lib/exam/progress-events';
const {create,act}=createRequire(import.meta.url)('react-test-renderer');
const fixture=vi.hoisted(()=>({initial:{},latest:{},nav:{}}));
vi.mock('@/lib/exam/use-exam-progress',()=>({useExamProgress:()=>{
 const [state,update]=useState(fixture.initial);fixture.latest=state;
 return {state,update,ready:true,status:'Đã lưu vào tài khoản',retry:()=>{},reset:()=>update(emptyProgress())};
}}));
vi.mock('@/lib/hooks/use-arrow-key-nav',()=>({useArrowKeyNav:(nav:object)=>{fixture.nav=nav;}}));
vi.mock('@/lib/hooks/use-column-keyboard-shortcuts',()=>({useColumnKeyboardShortcuts:()=>{}}));
vi.mock('./answer-feedback-modal',()=>({AnswerFeedbackModal:({onNext,onRetry}:{onNext:()=>void;onRetry:()=>void})=>createElement('div',{},createElement('button',{onClick:onNext},'Feedback next'),createElement('button',{onClick:onRetry},'Feedback retry'))}));
const questions=Array.from({length:5},(_,i)=>({id:`q${i}`,question_number:i+1,question_jp:`Question ${i+1}`,question_vi:'Dịch',references:[],choices:[{id:`right${i}`,choice_label:'1',choice_jp:'Right',is_correct:true},{id:`wrong${i}`,choice_label:'2',choice_jp:'Wrong',is_correct:false}]})) as unknown as ExamQuestion[];
const test={id:'test',slug:'r6-2denki-1ji-late',title:'Test',exam_stage:'1ji'} as ExamTest;
function textOf(node: {children?:unknown[]}):string{return (node.children??[]).map(c=>typeof c==='string'?c:textOf(c as {children?:unknown[]})).join('');}
function button(root: {findAllByType:(type:string)=>Array<{props:Record<string,unknown>;children:unknown[]}>},label:string){return root.findAllByType('button').find(n=>textOf(n)===label)!;}
beforeEach(()=>{
 fixture.initial={...emptyProgress(),answers:{q0:'right0',q1:'wrong1',q3:'wrong3'},mistakes:{q0:true,q1:true,q3:true}};
 vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT',true);
 vi.stubGlobal('window',{localStorage:{getItem:()=>null,setItem:()=>{}},confirm:()=>true});
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:false}));
});
describe('wrong-answer retry mode',()=>{
 it('filters currently wrong answers, retains corrected questions for navigation, and preserves full-exam answers',async()=>{
 let view:ReturnType<typeof create>;await act(async()=>{view=create(createElement(TestRunner,{test,questions,userId:'user'}));});
 const click=async(label:string)=>act(async()=>{(button(view.root,label).props.onClick as () => void)();});
 await click('Chỉ làm lại câu sai (2)');
 let cells=view.root.findAllByType('button').filter((b:{props:Record<string,unknown>})=>String(b.props['aria-label']).startsWith('Câu '));
 expect(cells.map((b:{props:Record<string,unknown>})=>b.props['aria-label'])).toEqual(['Câu 2: Chưa đúng, đã chọn đáp án 2','Câu 4: Chưa đúng, đã chọn đáp án 2']);
 await click('1Right');await click('Feedback next');
 expect(fixture.latest).toMatchObject({currentIndex:3,answers:{q0:'right0',q1:'right1',q3:'wrong3'}});
 await act(async()=>{(fixture.nav as {onPrev:()=>void}).onPrev();});
 expect(fixture.latest).toMatchObject({currentIndex:1});
 await click('Câu sau →');await click('2Wrong');await click('Feedback next');
 expect(button(view.root,'Ôn tiếp các câu còn sai (1)')).toBeDefined();
 await click('Ôn tiếp các câu còn sai (1)');
 expect(fixture.latest).toMatchObject({currentIndex:3});
 await click('1Right');await click('Feedback next');
 expect(button(view.root,'Ôn tiếp các câu còn sai (1)')).toBeUndefined();
 await click('Xem toàn bộ đề');
 cells=view.root.findAllByType('button').filter((b:{props:Record<string,unknown>})=>String(b.props['aria-label']).startsWith('Câu '));expect(cells).toHaveLength(5);
 expect(button(view.root,'Chỉ làm lại câu sai (0)').props.disabled).toBe(true);
 expect(fixture.latest).toMatchObject({answers:{q0:'right0',q1:'right1',q3:'right3'},mistakes:{q0:true,q1:true,q3:true}});
 await act(async()=>view.unmount());
 });
 it('disables retry when only unanswered or corrected questions remain',async()=>{
 fixture.initial={...emptyProgress(),answers:{q0:'right0'},mistakes:{q0:true}};
 let view:ReturnType<typeof create>;await act(async()=>{view=create(createElement(TestRunner,{test,questions,userId:'user'}));});
 expect(button(view.root,'Chỉ làm lại câu sai (0)').props.disabled).toBe(true);
 await act(async()=>view.unmount());
 });
});
