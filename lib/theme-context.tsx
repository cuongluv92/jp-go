"use client";

import { createContext, useCallback, useContext, useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "jp-go-theme";
const CHANGE_EVENT = "jp-go-theme-change";

interface ThemeContextValue {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribe(callback: () => void) {
  window.addEventListener(CHANGE_EVENT, callback);
  return () => window.removeEventListener(CHANGE_EVENT, callback);
}

function getSnapshot(): ThemeMode {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

// Mặc định LUÔN là sáng khi render trên server (không có document) - theme
// tối chỉ có thể biết được ở client sau khi đọc localStorage. Script chặn
// trong app/layout.tsx đã set data-theme lên <html> TRƯỚC khi React hydrate,
// nên useSyncExternalStore tự đồng bộ lại đúng giá trị ngay lần render đầu ở
// client mà không cần useEffect (tránh cảnh báo/lint "setState trong effect"
// và tránh hydration mismatch so với việc tự đọc document lúc khởi tạo state).
function getServerSnapshot(): ThemeMode {
  return "light";
}

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setTheme = useCallback((next: ThemeMode) => {
    applyTheme(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // localStorage có thể bị chặn (chế độ ẩn danh...) - vẫn đổi được giao
      // diện trong phiên hiện tại, chỉ không nhớ lại lần sau.
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);

  return <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextValue {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme phải dùng trong ThemeProvider");
  return ctx;
}
