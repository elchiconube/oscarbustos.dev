'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MobileMenuButton } from './MobileMenuButton';
import { NavIndicator } from './NavIndicator';
import { NavItem } from './NavItem';
import { menuItems } from './menuItems';
import ThemeToggle from '@/components/ThemeToggle';

import './Header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});
  const [currentPath, setCurrentPath] = useState('/');
  const navContainerRef = useRef<HTMLDivElement>(null);

  const isItemActive = (item: typeof menuItems[0]) => {
    if (item.href === currentPath) return true;
    if (item.dropdownItems?.some(dropItem => dropItem.href === currentPath)) return true;
    return false;
  };

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  useEffect(() => {
    const handleNavigation = () => {
      const newPath = window.location.pathname;
      setCurrentPath(newPath);
    };

    document.addEventListener('astro:page-load', handleNavigation);
    return () => document.removeEventListener('astro:page-load', handleNavigation);
  }, []);

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
                  isActive={isItemActive(item)}
                  currentPath={currentPath}
                  onMouseEnter={() => updateIndicatorPosition(index)}
                  onMouseLeave={() => setIndicatorStyle({ opacity: 0 })}
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