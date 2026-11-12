import Image from "next/image";

export const indexPages = [538, 539, 540, 541, 542, 543, 544, 545, 546, 547];

export function BookIndexScan({ page }: { page: number }) {
  const src = `/denken/index/${page}.webp`;

  return (
    <figure className="mx-auto max-w-[60rem] space-y-2">
      <figcaption className="text-right text-sm">
        <a href={src} target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">
          Mở ảnh phóng to
        </a>
      </figcaption>
      <Image
        src={src}
        alt={`索引 · Ảnh tra cứu thuật ngữ trang ${page}`}
        width={1250}
        height={1900}
        unoptimized
        className="h-auto w-full rounded-lg border border-border"
      />
    </figure>
  );
}
