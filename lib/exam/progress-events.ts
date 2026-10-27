export interface ExamProgress {
  currentIndex: number;
  answers: Record<string, string>;
  flagged: Record<string, boolean>;
  mistakes: Record<string, boolean>;
  submitted: boolean;
}
export interface ProgressEvent {
  id: string;
  at: number;
  epoch: string;
  kind: 'edit' | 'reset' | 'import';
  patch: Partial<ExamProgress>;
}
export function emptyProgress(flagged: Record<string, boolean> = {}): ExamProgress {
  return { currentIndex: 0, answers: {}, flagged: { ...flagged }, mistakes: {}, submitted: false };
}
export function validEvent(value: unknown): value is ProgressEvent {
  if (!value || typeof value !== 'object') return false;
  const e = value as ProgressEvent;
  if (typeof e.id !== 'string' || typeof e.epoch !== 'string' || !Number.isSafeInteger(e.at) || e.at < 0 || !['edit','reset','import'].includes(e.kind)) return false;
  const p = e.patch;
  if (!p || typeof p !== 'object' || Array.isArray(p)) return false;
  if (p.currentIndex !== undefined && (!Number.isInteger(p.currentIndex) || p.currentIndex < 0)) return false;
  if (p.submitted !== undefined && typeof p.submitted !== 'boolean') return false;
  for (const key of ['answers','flagged','mistakes'] as const) {
    const map = p[key];
    if (map !== undefined && (!map || typeof map !== 'object' || Array.isArray(map) || Object.values(map).some(v => typeof v !== (key === 'answers' ? 'string' : 'boolean')))) return false;
  }
  return true;
}
export function projectProgress(events: ProgressEvent[], defaults: Record<string, boolean> = {}) {
  const sorted = [...new Map(events.filter(validEvent).map(e => [e.id,e])).values()].sort((a,b) => a.at-b.at || a.id.localeCompare(b.id));
  const reset = sorted.filter(e => e.kind === 'reset').at(-1);
  const epoch = reset?.id ?? 'initial';
  const state = emptyProgress(defaults);
  // Legacy snapshots only fill gaps, never overwrite edits or resurrect a reset.
  const relevant = sorted.filter(e => e.kind !== 'reset' && e.epoch === epoch);
  for (const e of [...relevant.filter(e => e.kind === 'import'), ...relevant.filter(e => e.kind === 'edit')]) {
    const p = e.patch;
    Object.assign(state.answers, p.answers);
    Object.assign(state.flagged, p.flagged);
    for (const [id, wrong] of Object.entries(p.mistakes ?? {})) if (wrong) state.mistakes[id] = true;
    if (p.currentIndex !== undefined) state.currentIndex = p.currentIndex;
    if (p.submitted !== undefined) state.submitted = p.submitted;
  }
  return { state, epoch };
}
export function progressPatch(before: ExamProgress, after: ExamProgress): Partial<ExamProgress> {
  const patch: Partial<ExamProgress> = {};
  if (after.currentIndex !== before.currentIndex) patch.currentIndex = after.currentIndex;
  if (after.submitted !== before.submitted) patch.submitted = after.submitted;
  const answers = Object.fromEntries(Object.entries(after.answers).filter(([k,v]) => before.answers[k] !== v));
  const flagged = Object.fromEntries(Object.entries(after.flagged).filter(([k,v]) => before.flagged[k] !== v));
  const mistakes = Object.fromEntries(Object.entries(after.mistakes).filter(([k,v]) => v && !before.mistakes[k]));
  if (Object.keys(answers).length) patch.answers = answers;
  if (Object.keys(flagged).length) patch.flagged = flagged;
  if (Object.keys(mistakes).length) patch.mistakes = mistakes;
  return patch;
}
