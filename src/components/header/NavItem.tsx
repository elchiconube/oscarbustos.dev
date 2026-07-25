import { forwardRef, useEffect, useState } from 'react';
import { Dropdown } from "./Dropdown";
import type { MenuItem } from "./types";

interface NavItemProps {
  readonly item: MenuItem;
  readonly isActive?: boolean;
  readonly currentPath: string;
  readonly isMenuOpen?: boolean;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
}

import './NavItem.css'

const MOBILE_BREAKPOINT = 768;

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(({
  item,
  isActive,
  currentPath,
  isMenuOpen = true,
  onMouseEnter,
  onMouseLeave,
}, ref) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      setIsDropdownOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = () => {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      setIsDropdownOpen((open) => !open);
    }
  };

  return (
    <div
      className={`nav-item ${isActive ? 'active' : ''} ${isDropdownOpen ? 'open' : ''}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.hasDropdown ? (
        <div className="nav-dropdown-container">
          <button
            type="button"
            className="nav-button"
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            {item.name}
            <svg 
              className="nav-chevron" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </button>
          {item.dropdownItems && (
            <Dropdown 
              items={item.dropdownItems}
              currentPath={currentPath}
            />
          )}
        </div>
      ) : (
        <a href={item.href} className="nav-link">
          {item.name}
        </a>
      )}
    </div>
  );
});
