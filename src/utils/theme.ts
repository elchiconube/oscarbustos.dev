export type Theme = 'light' | 'dark';

// Get the user's preferred theme
export function getPreferredTheme(): Theme {
  // Check localStorage first
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme') as Theme;
  }
  
  // Check system preference
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  
  // Default to light
  return 'light';
}

// Apply theme to document
export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;
  
  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Toggle between light and dark themes
export function toggleTheme(): Theme {
  const currentTheme = getPreferredTheme();
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
  return newTheme;
}

// Initialize theme (call this on page load)
export function initTheme(): void {
  const theme = getPreferredTheme();
  applyTheme(theme);
  
  // Listen for system preference changes
  if (typeof window !== 'undefined') {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', (e) => {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}
