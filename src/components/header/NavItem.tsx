import { forwardRef } from 'react';
import { Dropdown } from "./Dropdown";
import type { MenuItem } from "./types";

interface NavItemProps {
  readonly item: MenuItem;
  readonly isActive?: boolean;
  readonly currentPath: string;
  readonly onMouseEnter: () => void;
  readonly onMouseLeave: () => void;
}

import './NavItem.css'

export const NavItem = forwardRef<HTMLDivElement, NavItemProps>(({
  item,
  isActive,
  currentPath,
  onMouseEnter,
  onMouseLeave,
}, ref) => {
  return (
    <div
      className={`nav-item ${isActive ? 'active' : ''}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {item.hasDropdown ? (
        <div className="nav-dropdown-container">
          <span className="nav-button">
            {item.name}
            <svg 
              className="nav-chevron" 
              viewBox="0 0 20 20"
            >
              <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
          </span>
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