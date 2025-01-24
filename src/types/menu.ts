export interface DropdownItem {
  name: string;
  description: string;
  href: string;
}

export interface MenuItem {
  name: string;
  hasDropdown?: boolean;
  href?: string;
  dropdownItems?: DropdownItem[];
}