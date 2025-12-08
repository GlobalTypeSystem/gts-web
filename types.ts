import { ReactNode } from 'react';

export interface NavItem {
  title: string;
  path: string;
}

export interface SidebarSection {
  title: string;
  items: NavItem[];
}

export interface DocPageContent {
  id: string;
  title: string;
  description: string;
  content: ReactNode;
  prev?: { title: string; path: string };
  next?: { title: string; path: string };
}
