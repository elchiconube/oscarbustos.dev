interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

import './MobileMenuButton.css';

export function MobileMenuButton({ isOpen, onClick }: Readonly<MobileMenuButtonProps>) {
  return (
    <button 
      className={`mobile-menu-button ${isOpen ? 'open' : ''}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      <span className="hamburger"></span>
    </button>
  );
}
