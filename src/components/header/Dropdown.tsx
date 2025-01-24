interface DropdownItemType {
  name: string;
  description: string;
  href: string;
}

interface DropdownProps {
  items: DropdownItemType[];
  currentPath: string;
}

import './Dropdown.css';

export function Dropdown({ items, currentPath }: Readonly<DropdownProps>) {
  return (
    <div className="dropdown">
      <div className="dropdown-content">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`dropdown-item ${currentPath === item.href ? 'active' : ''}`}
          >
            <span className="dropdown-item-title">{item.name}</span>
            <span className="dropdown-item-description">{item.description}</span>
          </a>
        ))}
      </div>
    </div>
  );
}