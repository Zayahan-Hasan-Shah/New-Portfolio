import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const apply = useCallback((next: Theme) => {
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.setAttribute('color-scheme', next);
    localStorage.setItem(STORAGE_KEY, next);
  }, []);

  useEffect(() => {
    apply(theme);
  }, [apply, theme]);

  const toggle = useCallback(() => {
    setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, setTheme, toggle };
}
