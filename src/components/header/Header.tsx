'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MobileMenuButton } from './MobileMenuButton';
import { NavIndicator } from './NavIndicator';
import { NavItem } from './NavItem';
import { menuItems } from './menuItems';
import ThemeToggle from '@/components/ThemeToggle';

import './Header.css';

export default function Header() {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [currentPath, setCurrentPath] = useState<string>('');
  
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Memoizamos la función de normalización
  const normalizePath = useCallback((pathname: string): string => {
    return pathname.replace(/\/+$/, '') || '/';
  }, []);

  // Memoizamos la búsqueda del índice activo
  const findActiveMenuIndex = useCallback((path: string): number | null => {
    const mainIndex = menuItems.findIndex(item => item.href === path);
    if (mainIndex !== -1) return mainIndex;

    for (let i = 0; i < menuItems.length; i++) {
      if (menuItems[i].dropdownItems?.some(child => child.href === path)) {
        return i;
      }
    }
    return null;
  }, []);

  // Optimizamos la actualización del indicador
  const updateIndicatorPosition = useCallback((index: number) => {
    if (!navContainerRef.current) return;
    
    const navItems = navContainerRef.current.querySelectorAll('.nav-item');
    const currentNavItem = navItems[index];
    
    if (currentNavItem) {
      const rect = currentNavItem.getBoundingClientRect();
      const parentRect = navContainerRef.current.getBoundingClientRect();
      
      setIndicatorStyle({
        width: `${rect.width}px`,
        transform: `translateX(${rect.left - parentRect.left}px)`,
        height: '40px',
        opacity: 1,
      });
    }
  }, []);

  // Efecto inicial para establecer la ruta actual
  useEffect(() => {
    const path = normalizePath(window.location.pathname);
    setCurrentPath(path);
  }, [normalizePath]);

  // Manejador de eventos de navegación
  useEffect(() => {
    const handleRouteChange = () => {
      const newPath = normalizePath(window.location.pathname);
      setCurrentPath(newPath);
      setIsMenuOpen(false);
      
      const activeIndex = findActiveMenuIndex(newPath);
      if (activeIndex !== null) {
        updateIndicatorPosition(activeIndex);
      }
    };

    // Usar el evento de Astro para navegación
    document.addEventListener('astro:page-load', handleRouteChange);
    
    return () => {
      document.removeEventListener('astro:page-load', handleRouteChange);
    };
  }, [normalizePath, findActiveMenuIndex, updateIndicatorPosition]);

  // Manejo de resize optimizado
  useEffect(() => {
    const handleResize = () => {
      if (activeItem !== null) {
        updateIndicatorPosition(activeItem);
      } else {
        const activeIndex = findActiveMenuIndex(currentPath);
        if (activeIndex !== null) {
          updateIndicatorPosition(activeIndex);
        }
      }
      
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const debouncedResize = debounce(handleResize, 150);
    window.addEventListener('resize', debouncedResize);
    
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [activeItem, currentPath, findActiveMenuIndex, updateIndicatorPosition]);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <MobileMenuButton 
            isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <div className="nav-items" ref={navContainerRef}>
              <NavIndicator style={indicatorStyle} />

              {menuItems.map((item, index) => (
                <NavItem
                  key={item.name}
                  item={item}
                  isActive={currentPath === item.href || 
                    item.dropdownItems?.some(dropItem => dropItem.href === currentPath)}
                  currentPath={currentPath}
                  onMouseEnter={() => {
                    setActiveItem(index);
                    updateIndicatorPosition(index);
                  }}
                  onMouseLeave={() => {
                    setActiveItem(null);
                    const activeIndex = findActiveMenuIndex(currentPath);
                    if (activeIndex !== null) {
                      updateIndicatorPosition(activeIndex);
                    } else {
                      setIndicatorStyle({ opacity: 0 });
                    }
                  }}
                />
              ))}
            </div>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

// Utilidad para debounce
function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}