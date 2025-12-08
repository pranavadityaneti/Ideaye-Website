import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  points: string[];
  icon: React.ReactNode;
}

export interface ClientItem {
  name: string;
  category: 'brand' | 'celebrity' | 'movie';
  imagePlaceholder?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  brief: string;
  overview: string;
  approach: string;
  execution: string;
  highlights: string[];
  images: string[]; // For demo, we'll use CSS classes or placeholders
}