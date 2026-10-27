"use client";
import { useEffect, useRef, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import type { ExamQuestion } from './types';
import { emptyProgress, projectProgress, progressPatch, validEvent, type ExamProgress, type ProgressEvent } from './progress-events';

export function useExamProgress(userId: string, testId: string, questions: ExamQuestion[]) {
  const defaults = Object.fromEntries(questions.map(q => [q.id, q.is_flagged_default]));
  const [state, render] = useState<ExamProgress>(() => emptyProgress(defaults));
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState('Đang khôi phục tiến độ…');
  const live = useRef(state);
  const events = useRef(new Map<string, ProgressEvent>());
  const ack = useRef(new Set<string>());
  const busy = useRef(false);
  const active = useRef(false);
  const syncRef = useRef<() => Promise<void>>(async () => {});
  const prefix = `jp-exam-v2:${userId}:${testId}:`;

  function readLocal() {
    try {
      for (let i=0; i<localStorage.length; i++) {
        const key = localStorage.key(i);
        if (!key?.startsWith(prefix)) continue;
        try {
          const event: unknown = JSON.parse(localStorage.getItem(key) ?? 'null');
          if (validEvent(event)) events.current.set(event.id,event);
        } catch { /* Retain malformed entries; never erase a recoverable backup. */ }
      }
      return true;
    } catch { return false; }
  }
  function display() {
    const result = projectProgress([...events.current.values()], defaults);
    result.state.currentIndex = Math.min(result.state.currentIndex, Math.max(0, questions.length-1));
    live.current = result.state;
    if (active.current) render(result.state);
    return result;
  }
  function persist(event: ProgressEvent) {
    events.current.set(event.id,event);
    try { localStorage.setItem(prefix+event.id, JSON.stringify(event)); return true; }
    catch { return false; }
  }
  function append(kind: ProgressEvent['kind'], patch: Partial<ExamProgress>) {
    readLocal();
    const { epoch } = projectProgress([...events.current.values()], defaults);
    const at = [...events.current.values()].reduce((time,e) => Math.max(time,e.at+1), Date.now());
    const event: ProgressEvent = { id: crypto.randomUUID(), at, epoch, kind, patch };
    const saved = persist(event);
    display();
    setStatus(saved ? 'Đã lưu trên máy · đang đồng bộ…' : 'Chưa lưu trên máy — đang thử lưu tài khoản, đừng đóng trang.');
    void syncRef.current();
  }
  function update(updater: ExamProgress | ((previous: ExamProgress) => ExamProgress)) {
    if (!ready) return;
    const before = live.current;
    const after = typeof updater === 'function' ? updater(before) : updater;
    const patch = progressPatch(before, after);
    if (Object.keys(patch).length) append('edit',patch);
  }

  useEffect(() => {
    active.current = true;
    const client = createClient();
    readLocal();
    // A legacy copy is retained intact and claimed by only one account.
    const legacyKey = `jp-go-exam-test-${testId}`;
    try {
      const ownerKey = legacyKey+'-migrated-owner';
      const owner = localStorage.getItem(ownerKey);
      if (!owner || owner === userId) {
        localStorage.setItem(ownerKey,userId);
        for (const name of ['localStorage','sessionStorage'] as const) {
          const raw = window[name].getItem(legacyKey);
          if (!raw) continue;
          const data = JSON.parse(raw);
          const patch = { ...emptyProgress(defaults), ...data };
          // A deterministic ID makes migration idempotent across reloads.
          let h1 = 2166136261, h2 = 5381;
          for (const ch of raw) { h1 = Math.imul(h1 ^ ch.charCodeAt(0),16777619); h2 = Math.imul(h2,33) ^ ch.charCodeAt(0); }
          const id = `legacy-${name}-${h1 >>> 0}-${h2 >>> 0}`;
          if (!events.current.has(id)) {
            const event: ProgressEvent = {id,at:0,epoch:'initial',kind:'import',patch};
            if (validEvent(event)) persist(event);
          }
        }
      }
    } catch { /* Existing data is never deleted, even when migration fails. */ }
    display();


    async function sync() {
      if (busy.current || !active.current) return;
      busy.current = true;
      let succeeded = false;
      try {
        readLocal();
        // Append-only operations: a stale tab can never replace the whole exam.
        const pending = [...events.current.values()].filter(e => !ack.current.has(e.id));
        for (let offset=0; offset<pending.length; offset+=100) {
          const batch = pending.slice(offset,offset+100);
          const { error } = await client.from('jp_exam_progress_events').upsert(batch.map(e => ({user_id:userId,test_id:testId,event_id:e.id,data:e})), {onConflict:'user_id,test_id,event_id',ignoreDuplicates:true}).abortSignal(AbortSignal.timeout(15000));
          if (error) throw error;
          batch.forEach(e => ack.current.add(e.id));
        }
        for (let offset=0;;offset+=500) {
          const {data,error} = await client.from('jp_exam_progress_events').select('data').eq('user_id',userId).eq('test_id',testId).order('event_id').range(offset,offset+499).abortSignal(AbortSignal.timeout(15000));
          if (error) throw error;
          for (const row of data ?? []) if (validEvent(row.data)) {
            persist(row.data); ack.current.add(row.data.id);
          }
          if ((data?.length ?? 0)<500) break;
        }
        succeeded = true;
        if (active.current) {
          display();
          const outstanding = [...events.current.keys()].some(id => !ack.current.has(id));
          setStatus(outstanding ? 'Đã lưu trên máy · đang đồng bộ…' : 'Đã lưu vào tài khoản');
        }
      } catch {
        if (active.current) {
          let localSafe = true;
          for (const event of events.current.values()) if (!persist(event)) localSafe = false;
          setStatus(localSafe ? 'Đã lưu trên máy · chưa đồng bộ, sẽ tự thử lại.' : 'Chưa lưu được — giữ trang mở và thử lại.');
        }
      } finally {
        if (active.current) setReady(true);
        busy.current = false;
        if (succeeded && active.current && [...events.current.keys()].some(id => !ack.current.has(id))) void sync();
      }
    }
    syncRef.current = sync;
    const refresh = () => { readLocal(); display(); void sync(); };
    const storage = (e: StorageEvent) => { if (e.key?.startsWith(prefix)) refresh(); };
    const timer = window.setInterval(refresh,15000);
    window.addEventListener('online',refresh);
    window.addEventListener('focus',refresh);
    window.addEventListener('storage',storage);
    void sync();
    return () => {
      active.current = false;
      window.clearInterval(timer);
      window.removeEventListener('online',refresh);
      window.removeEventListener('focus',refresh);
      window.removeEventListener('storage',storage);
    };
    // Component is keyed by user and test; these inputs are immutable per mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId,testId]);
  return {state,update,ready,status, retry: () => void syncRef.current(), reset: () => append('reset',{})};
}
