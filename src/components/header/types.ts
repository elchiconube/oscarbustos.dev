export interface MenuItem {
  name: string;
  hasDropdown?: boolean;
  href?: string;
  dropdownItems?: {
    name: string;
    description: string;
    href: string;
  }[];
}
