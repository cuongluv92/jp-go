import Image from "next/image";
import references from "./index-references.json";
import { bookPageHref } from "./index-lookup";

export const indexPages = [538, 539, 540, 541, 542, 543, 544, 545, 546, 547];
const width = 1250;
const height = 1900;

export function BookIndexScan({ page, availablePages }: { page: number; availablePages: number[] }) {
  const src = `/denken/index/${page}.webp`;
  const links = references[String(page) as keyof typeof references] ?? [];

  return (
    <figure className="mx-auto max-w-[60rem] space-y-2">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-2 text-sm">
        <span className="text-muted">Nhấn số trang có gạch dưới để mở bài trong tab mới.</span>
        <a href={src} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
          Mở ảnh phóng to
        </a>
      </figcaption>
      <div className="relative overflow-hidden rounded-lg ring-1 ring-border">
        <Image src={src} alt={`索引 · Ảnh tra cứu thuật ngữ trang ${page}`} width={width} height={height}
          unoptimized className="block h-auto w-full" />
        {links.map(([target, x, y, w, h]) => {
          const href = target === "xx" ? "/denken#quantity-symbols"
            : typeof target === "number" && availablePages.includes(target) ? bookPageHref(target) : null;
          if (!href) return null;
          const label = `Mở trang ${target} trong tab mới`;
          return (
            <a key={`${x}-${y}-${target}`} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label} title={label}
              className="absolute border-b border-sky-700 hover:bg-sky-400/30 focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-sky-700"
              style={{
                left: `${(Number(x) - 2) / width * 100}%`,
                top: `${(Number(y) - 2) / height * 100}%`,
                width: `${(Number(w) + 4) / width * 100}%`,
                height: `${(Number(h) + 5) / height * 100}%`,
              }} />
          );
        })}
      </div>
    </figure>
  );
}
