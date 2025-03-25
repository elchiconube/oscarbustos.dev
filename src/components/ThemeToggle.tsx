'use client';

import { Sun, Moon } from "@phosphor-icons/react";
import { useEffect, useState } from 'react';
import { getPreferredTheme, applyTheme } from '../utils/theme';
import type { Theme } from '../utils/theme';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get initial theme using our utility function
    const initialTheme = getPreferredTheme();
    setTheme(initialTheme);
  }, []);

  // Listen for system preference changes
  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [mounted]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    applyTheme(newTheme);
  };

  
  if (!mounted) {
    return (
      <button className="theme-toggle" aria-label="Theme toggle placeholder">
        <Moon size={20} weight="light" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={`Change to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon size={20} weight="light" />
      ) : (
        <Sun size={20} weight="light" />
      )}
    </button>
  );
}