"use client";

import Link from "next/link";
import { useState } from "react";
import type { QuestionReference, SubjectStatistics } from "./statistics";

const panel = "space-y-3 rounded-xl border border-border bg-surface p-4 sm:p-5";
const control = "min-h-10 rounded-lg border border-border bg-surface px-3 text-sm";
const table = "w-full border-collapse text-left text-sm [&_td]:px-3 [&_td]:py-2.5 [&_td]:align-top [&_th]:px-3 [&_th]:py-2.5";
const head = "bg-surface-muted text-xs font-semibold";
const row = "border-t border-border";
const link = "text-accent underline-offset-2 hover:underline focus-visible:underline";
const percent = new Intl.NumberFormat("vi-VN", { style: "percent", maximumFractionDigits: 1 });

function normalizeSearch(text: string) {
  return text.normalize("NFKC").toLowerCase().replace(/\p{Script=Latin}/gu, (letter) =>
    letter.normalize("NFD").replace(/\p{M}/gu, "")
  ).replaceAll("đ", "d").trim();
}

function QuestionLink({ question }: { question: QuestionReference }) {
  return <Link href={question.href} prefetch={false} title={question.topic} className={link}>{question.label}</Link>;
}

function TopicTable({ data, years }: { data: SubjectStatistics; years: number[] }) {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("");
  const [limit, setLimit] = useState(10);
  const term = normalizeSearch(search);
  const titles = data.topics.map((topic) => {
    const matchingTitle = normalizeSearch(`${topic.title} ${topic.japanese}`).includes(term);
    const questions = topic.questions.map((index) => data.questions[index]).filter((question) =>
      (!year || question.year === Number(year)) && (matchingTitle || normalizeSearch(question.topic).includes(term))
    );
    const matchingYears = new Set(questions.map((question) => question.year)).size;
    return { ...topic, questions, matchingYears };
  }).filter(({ questions }) => questions.length)
    .sort((a, b) => b.matchingYears - a.matchingYears || b.questions.length - a.questions.length || a.title.localeCompare(b.title, "vi"));

  return (
    <section className={panel} aria-labelledby="denken-topics">
      <h3 id="denken-topics" className="font-semibold">Chủ đề đã ra theo năm</h3>
      <div className="flex flex-wrap gap-3">
        <label className="flex min-w-44 flex-1 flex-col gap-1 text-xs font-medium">
          Tìm chủ đề
          <input type="search" value={search} onChange={(e) => { setSearch(e.target.value); setLimit(10); }}
            placeholder="Ví dụ tụ điện, 変圧器" className={control} />
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium">
          Năm xuất hiện
          <select value={year} onChange={(e) => { setYear(e.target.value); setLimit(10); }} className={control}>
            <option value="">Tất cả các năm</option>
            {years.map((value) => <option key={value} value={value}>{value}</option>)}
          </select>
        </label>
      </div>
      <p className="text-xs text-muted">Xếp theo số năm xuất hiện rồi đến số câu. Một câu có thể gắn với nhiều bài lý thuyết.</p>
      {titles.length === 0 ? <p role="status" className="text-sm text-muted">Không tìm thấy chủ đề phù hợp.</p> : (
        <div className="overflow-x-auto">
          <table className={table}>
            <thead className={head}><tr><th scope="col">Chủ đề</th><th scope="col">Số năm</th><th scope="col">Số câu</th><th scope="col">Câu đã ra</th></tr></thead>
            <tbody>{titles.slice(0, limit).map((topic) => (
              <tr key={topic.href} className={row}>
                <th scope="row" className="min-w-32 font-medium">
                  <Link href={topic.href} prefetch={false} className={link}>{topic.title}</Link>
                  {topic.japanese && topic.japanese !== topic.title && <div lang="ja" className="text-xs text-muted">{topic.japanese}</div>}
                </th>
                <td className="tabular-nums">{topic.matchingYears}</td>
                <td className="tabular-nums">{topic.questions.length}</td>
                <td className="min-w-32">
                  <ul className="space-y-1">{topic.questions.slice(0, 3).map((question) => (
                    <li key={question.href}><QuestionLink question={question} /></li>
                  ))}</ul>
                  {topic.questions.length > 3 && (
                    <details className="mt-1">
                      <summary className="cursor-pointer text-xs text-accent">Thêm {topic.questions.length - 3} câu</summary>
                      <ul className="mt-1 space-y-1">{topic.questions.slice(3).map((question) => (
                        <li key={question.href}><QuestionLink question={question} /></li>
                      ))}</ul>
                    </details>
                  )}
                </td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
      {limit < titles.length && <button type="button" className={`${control} text-accent`} onClick={() => setLimit(limit + 10)}>Xem thêm chủ đề</button>}
    </section>
  );
}

function compareYears(data: SubjectStatistics, baseYear: number) {
  const byYear = new Map<number, { matches: { base: QuestionReference; other: QuestionReference; kind: "same" | "similar"; reviewed?: true }[]; same: Set<string>; similar: Set<string> }>();
  for (const { first, second, kind, reviewed } of data.repeats) {
    const a = data.questions[first];
    const b = data.questions[second];
    if (a.year !== baseYear && b.year !== baseYear) continue;
    const [base, other] = a.year === baseYear ? [a, b] : [b, a];
    const group = byYear.get(other.year) ?? { matches: [], same: new Set<string>(), similar: new Set<string>() };
    group.matches.push({ base, other, kind, reviewed });
    group[kind].add(base.href);
    byYear.set(other.year, group);
  }
  for (const { same, similar } of byYear.values()) {
    for (const href of same) similar.delete(href);
  }
  return byYear;
}

function RepeatTable({ data, years }: { data: SubjectStatistics; years: number[] }) {
  const [baseYear, setBaseYear] = useState(years[0]);
  const [comparisonYear, setComparisonYear] = useState<number>();
  const baseCount = data.exams.filter(({ year }) => year === baseYear).reduce((sum, exam) => sum + exam.count, 0);
  const byYear = compareYears(data, baseYear);
  const comparisonYears = years.filter((year) => year !== baseYear);
  const rankedYears = comparisonYears.toSorted((a, b) => {
    const count = (year: number) => (byYear.get(year)?.same.size ?? 0) + (byYear.get(year)?.similar.size ?? 0);
    return count(b) - count(a);
  });
  const otherYear = comparisonYear ?? rankedYears[0];
  const { matches, same, similar } = byYear.get(otherYear) ?? { matches: [], same: new Set(), similar: new Set() };
  const renderRate = (count: number) => `${count}/${baseCount} · ${percent.format(count / baseCount)}`;

  return (
    <section className={panel} aria-labelledby="denken-repeats">
      <h3 id="denken-repeats" className="font-semibold">So sánh đề giữa hai năm</h3>
      <div className="flex flex-wrap gap-3">
        <label className="flex flex-col gap-1 text-xs font-medium">
          Năm tính tỷ lệ
          <select value={baseYear} onChange={(e) => {
            const next = Number(e.target.value);
            setBaseYear(next);
            if (next === comparisonYear) setComparisonYear(undefined);
          }} className={control}>{years.map((year) => <option key={year}>{year}</option>)}</select>
        </label>
        <label className="flex flex-col gap-1 text-xs font-medium">
          Năm đối chiếu
          <select value={otherYear} onChange={(e) => setComparisonYear(Number(e.target.value))}
            className={control}>{comparisonYears.map((year) => <option key={year}>{year}</option>)}</select>
        </label>
      </div>
      <dl aria-live="polite" className="flex flex-wrap gap-3">
        <div className="flex-1 rounded-lg bg-accent-soft p-3"><dt className="text-sm">Trùng nội dung</dt><dd className="mt-1 text-lg font-semibold tabular-nums">{renderRate(same.size)}</dd></div>
        <div className="flex-1 rounded-lg bg-surface-muted p-3"><dt className="text-sm">Gần trùng</dt><dd className="mt-1 text-lg font-semibold tabular-nums">{renderRate(similar.size)}</dd></div>
      </dl>
      <p className="text-xs text-muted">Mẫu số gồm mọi mục câu hỏi của năm tính tỷ lệ trong môn đang chọn. Phần (a), (b) tính riêng. Mỗi mục chỉ tính một lần, ưu tiên nhóm trùng.</p>
      <details className="text-xs text-muted">
        <summary className="cursor-pointer text-accent">Cách xác định mức trùng</summary>
        <p className="mt-1">Tỷ lệ là ước tính dựa trên so khớp bản chữ và các cặp đã đối chiếu với đề gốc. Cùng nội dung có thể đổi thứ tự đáp án. Câu dựa vào hình hoặc bảng chỉ được tính trùng nội dung khi đã kiểm tra ảnh gốc. Khác biệt khi biên tập hoặc số liệu trong ảnh có thể ảnh hưởng kết quả.</p>
      </details>
      <details className="text-sm">
        <summary className="cursor-pointer text-accent">Tỷ lệ với tất cả các năm</summary>
        <div className="mt-2 overflow-x-auto">
          <table className={table}>
            <thead className={head}><tr><th scope="col">Năm đối chiếu</th><th scope="col">Trùng nội dung</th><th scope="col">Gần trùng</th></tr></thead>
            <tbody>{rankedYears.map((year) => (
              <tr key={year} className={row}>
                <th scope="row" className="font-medium">
                  <button type="button" onClick={() => setComparisonYear(year)} aria-pressed={year === otherYear}
                    className={`${link} aria-pressed:font-bold aria-pressed:underline`}>{year}</button>
                </th>
                <td className="tabular-nums">{renderRate(byYear.get(year)?.same.size ?? 0)}</td>
                <td className="tabular-nums">{renderRate(byYear.get(year)?.similar.size ?? 0)}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      </details>
      {matches.length === 0 ? <p className="text-sm text-muted">Chưa tìm thấy cặp đạt ngưỡng đối chiếu giữa hai năm này.</p> : (
        <div className="overflow-x-auto">
          <table className={table}>
            <thead className={head}><tr><th scope="col">{baseYear}</th><th scope="col">{otherYear}</th><th scope="col">Mức trùng</th></tr></thead>
            <tbody>{matches.map(({ base, other, kind, reviewed }) => (
              <tr key={`${base.href}:${other.href}`} className={row}>
                <td><QuestionLink question={base} /><div className="text-xs text-muted">{base.topic}</div></td>
                <td><QuestionLink question={other} /><div className="text-xs text-muted">{other.topic}</div></td>
                <td>{kind === "same" ? "Trùng nội dung" : "Gần trùng"}{reviewed && <div className="text-xs text-muted">Đã đối chiếu đề gốc</div>}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function CoverageTable({ data, years }: { data: SubjectStatistics; years: number[] }) {
  return (
    <details className={panel}>
      <summary className="cursor-pointer font-semibold">Bộ đề và số mục câu hỏi theo năm</summary>
      <div className="overflow-x-auto">
        <table className={table}>
          <thead className={head}><tr><th scope="col">Năm</th><th scope="col">Kỳ thi có trên app</th><th scope="col">Số mục câu hỏi</th></tr></thead>
          <tbody>{years.map((year) => {
            const exams = data.exams.filter((exam) => exam.year === year);
            return <tr key={year} className={row}>
              <th scope="row" className="font-medium">{year}</th>
              <td><div className="flex flex-wrap gap-x-4 gap-y-1">{exams.map((exam) => (
                <Link key={exam.href} href={exam.href} prefetch={false} className={link}>{exam.label}</Link>
              ))}</div></td>
              <td className="tabular-nums">{exams.reduce((sum, exam) => sum + exam.count, 0)}</td>
            </tr>;
          })}</tbody>
        </table>
      </div>
    </details>
  );
}

export function DenkenStatisticsPanel({ subjects }: { subjects: SubjectStatistics[] }) {
  const [selected, setSelected] = useState(0);
  const data = subjects[selected];
  const years = [...new Set(data.exams.map(({ year }) => year))];

  return (
    <section aria-labelledby="denken-statistics" className="space-y-4 border-t border-border pt-5">
      <header className="flex flex-wrap items-end justify-between gap-3">
        <h2 id="denken-statistics" className="text-xl font-bold">Thống kê đề thi</h2>
        <label className="flex flex-col gap-1 text-xs font-medium">
          Môn thi
          <select value={selected} onChange={(e) => setSelected(Number(e.target.value))} className={control}>
            {subjects.map(({ subject }, index) => <option key={subject} value={index}>{subject}</option>)}
          </select>
        </label>
      </header>
      <TopicTable key={data.subject} data={data} years={years} />
      <RepeatTable data={data} years={years} />
      <CoverageTable data={data} years={years} />
    </section>
  );
}
