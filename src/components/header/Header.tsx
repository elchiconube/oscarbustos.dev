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

  const updateIndicator = useCallback((index: number | null) => {
    if (index === null) {
      const activeIndex = findActiveMenuIndex();
      if (activeIndex === null) {
        setIndicatorStyle({ opacity: 0 });
      } else {
        updateIndicatorPosition(activeIndex);
      }
      return;
    }
    updateIndicatorPosition(index);
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

  const findActiveMenuIndex = useCallback((): number | null => {
    const mainIndex = menuItems.findIndex(item => item.href === currentPath);
    if (mainIndex !== -1) return mainIndex;

    for (let i = 0; i < menuItems.length; i++) {
      const item = menuItems[i];
      if (item.dropdownItems?.some(child => child.href === currentPath)) {
        return i;
      }
    }
    return null;
  }, [currentPath]);

  useEffect(() => {
    const handleNavigation = () => {
      const path = window.location.pathname;
      setCurrentPath(path);
      setIsMenuOpen(false);
      
      setTimeout(() => {
        const activeIndex = findActiveMenuIndex();
        if (activeIndex !== null) {
          updateIndicatorPosition(activeIndex);
        }
      }, 0);
    };

    handleNavigation();
    document.addEventListener('astro:after-navigation', handleNavigation);
    return () => document.removeEventListener('astro:after-navigation', handleNavigation);
  }, [findActiveMenuIndex, updateIndicatorPosition]);

  useEffect(() => {
    const handleResize = () => {
      const activeIndex = activeItem ?? findActiveMenuIndex();
      if (activeIndex !== null) {
        updateIndicatorPosition(activeIndex);
      }
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeItem, findActiveMenuIndex, updateIndicatorPosition]);

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
                    updateIndicator(index);
                  }}
                  onMouseLeave={() => {
                    setActiveItem(null);
                    updateIndicator(null);
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