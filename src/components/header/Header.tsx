'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MobileMenuButton } from './MobileMenuButton';
import { NavIndicator } from './NavIndicator';
import { NavItem } from './NavItem';
import { menuItems } from './menuItems';
import ThemeToggle from '@/components/ThemeToggle';

import './Header.css';

// Tip opcional: define un tipo para tus dropdownItems
// interface DropdownItem {
//   name: string;
//   href: string;
// }

interface MenuItem {
  name: string;
  href: string;
  // dropdownItems?: DropdownItem[];
  dropdownItems?: { name: string; href: string }[];
}

interface HeaderProps {
  currentPath: string; // Ruta actual recibida desde Astro (por ejemplo)
}

export default function Header({ currentPath }: HeaderProps) {
  // Estado para el ítem activo cuando pasamos el ratón
  const [activeItem, setActiveItem] = useState<number | null>(null);

  // Estado para abrir/cerrar el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para el estilo del indicador
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({});

  // Referencia al contenedor de navegación
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Guardamos un array con las dimensiones de cada nav-item (left, width)
  // para no recalcular en cada hover
  const itemsRectDataRef = useRef<Array<{ left: number; width: number }>>([]);

  // Normaliza la ruta para no tener problemas con slashes finales.
  // (Podrías hacer esta normalización fuera, si ya la recibes normalizada como prop.)
  const normalizePath = useCallback((pathname: string): string => {
    return pathname.replace(/\/+$/, '') || '/';
  }, []);

  // Encuentra el índice de menú principal que coincide con la ruta
  const findActiveMenuIndex = useCallback(
    (path: string): number | null => {
      const mainIndex = menuItems.findIndex((item) => item.href === path);
      if (mainIndex !== -1) return mainIndex;

      // Si no está en items principales, busca en dropdowns
      for (let i = 0; i < menuItems.length; i++) {
        if (
          menuItems[i].dropdownItems?.some((child) => child.href === path)
        ) {
          return i;
        }
      }
      return null;
    },
    []
  );

  // Función para medir y guardar las dimensiones de todos los nav-items
  const measureNavItems = useCallback(() => {
    if (!navContainerRef.current) return;
    const navItems = navContainerRef.current.querySelectorAll('.nav-item');

    itemsRectDataRef.current = Array.from(navItems).map((item) => {
      const rect = (item as HTMLElement).getBoundingClientRect();
      return {
        left: rect.left,
        width: rect.width,
      };
    });
  }, []);

  // Actualiza la posición del indicador usando las medidas precalculadas
  const updateIndicatorPosition = useCallback(
    (index: number) => {
      if (!navContainerRef.current) return;
      const parentRect = navContainerRef.current.getBoundingClientRect();
      const { left, width } = itemsRectDataRef.current[index] || {};

      if (width) {
        setIndicatorStyle({
          width: `${width}px`,
          transform: `translateX(${left - parentRect.left}px)`,
          height: '40px', // si deseas ajustar la altura específica
          opacity: 1,
        });
      }
    },
    []
  );

  // Efecto para medir inicialmente los items (después de que rendericen)
  useEffect(() => {
    measureNavItems();

    // Ajustamos el indicador según la ruta actual
    const path = normalizePath(currentPath);
    const activeIndex = findActiveMenuIndex(path);
    if (activeIndex !== null) {
      updateIndicatorPosition(activeIndex);
    } else {
      setIndicatorStyle({ opacity: 0 });
    }
  }, [currentPath, measureNavItems, normalizePath, findActiveMenuIndex, updateIndicatorPosition]);

  // Manejo de resize optimizado con debounce
  useEffect(() => {
    const handleResize = () => {
      // Primero volvemos a medir
      measureNavItems();

      // Luego movemos el indicador según el ítem activo (si lo hubiera)
      if (activeItem !== null) {
        updateIndicatorPosition(activeItem);
      } else {
        const path = normalizePath(currentPath);
        const activeIndex = findActiveMenuIndex(path);
        if (activeIndex !== null) {
          updateIndicatorPosition(activeIndex);
        } else {
          setIndicatorStyle({ opacity: 0 });
        }
      }

      // Si la pantalla es grande, cierra el menú móvil automáticamente
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    const debouncedResize = debounce(handleResize, 150);
    window.addEventListener('resize', debouncedResize);

    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, [
    activeItem,
    currentPath,
    findActiveMenuIndex,
    measureNavItems,
    normalizePath,
    updateIndicatorPosition,
  ]);

  // Cuando hagas click en un NavItem (si utilizas <a> puro), puedes cerrar el menú:
  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

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

              {menuItems.map((item, index) => {
                const path = normalizePath(currentPath);
                const itemIsActive =
                  path === item.href ||
                  item.dropdownItems?.some((child) => child.href === path);

                return (
                  <NavItem
                    key={item.name}
                    item={item}
                    isActive={itemIsActive}
                    currentPath={path}
                    onMouseEnter={() => {
                      setActiveItem(index);
                      updateIndicatorPosition(index);
                    }}
                    onMouseLeave={() => {
                      setActiveItem(null);
                      const activeIndex = findActiveMenuIndex(path);
                      if (activeIndex !== null) {
                        updateIndicatorPosition(activeIndex);
                      } else {
                        setIndicatorStyle({ opacity: 0 });
                      }
                    }}
                    onClick={handleNavItemClick}
                  />
                );
              })}
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
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
