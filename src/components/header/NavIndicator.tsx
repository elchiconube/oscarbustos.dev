interface NavIndicatorProps {
  readonly style: React.CSSProperties;
}

import './NavIndicator.css'

export function NavIndicator({ style }: NavIndicatorProps) {
  return (
    <div className="nav-indicator" style={style} />
  );
}
