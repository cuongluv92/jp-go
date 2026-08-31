/**
 * Cache stale-while-revalidate cấp module (không phải React state) cho dữ
 * liệu tải qua Supabase ở các trang client. Next.js App Router unmount lại
 * toàn bộ component của route khi chuyển tab (kể cả quay lại tab cũ), nên
 * mỗi lần chuyển tab các trang từng phải tự fetch lại từ đầu và hiện "Đang
 * tải..." trước khi nội dung thật (chiều cao khác) thế chỗ — gây cảm giác
 * "nhảy loạn" khi bấm qua lại giữa các tab.
 *
 * Cache này sống ở module scope nên KHÔNG bị reset khi route unmount: lần
 * quay lại một tab đã từng tải, component khởi tạo state ngay từ cache (bỏ
 * qua bước "Đang tải..."), đồng thời vẫn fetch ngầm để cập nhật dữ liệu mới
 * nếu có, tránh vừa tránh nhảy layout vừa không hiển thị dữ liệu cũ mãi mãi.
 */
const cache = new Map<string, unknown>();

export function getCached<T>(key: string): T | undefined {
  return cache.get(key) as T | undefined;
}

export function setCached<T>(key: string, value: T): void {
  cache.set(key, value);
}
