import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('sv_theme');
    if (saved === 'dark' || saved === 'light' || saved === 'system') {
      return saved;
    }
    return 'dark'; // Default to sleek futuristic dark mode
  });

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function applyTheme() {
      const isDark =
        theme === 'dark' ||
        (theme === 'system' && mediaQuery.matches);

      if (isDark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
      }
    }

    applyTheme();
    localStorage.setItem('sv_theme', theme);

    function handleChange() {
      if (theme === 'system') {
        applyTheme();
      }
    }

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  return { theme, setTheme };
}
