import type { MenuItem } from './types';

export const menuItems: MenuItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Timeline', href: '/timeline' },
  {
    name: 'Content',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Book', description: 'Learn Frontend development', href: '/book' },
      { name: 'Blog', description: 'Sharing ideas', href: '/blog' },
    ]
  },
  {
    name: 'Work',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Projects', description: 'Check my projects', href: '/projects' },
      { name: 'Experience', description: 'About my work', href: '/experience' },
    ]
  },
  {
    name: 'More',
    hasDropdown: true,
    dropdownItems: [
      { name: 'About', description: 'More personal info', href: '/about' },
    ]
  },
];
