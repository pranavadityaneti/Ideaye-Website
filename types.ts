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

export interface PricingPackage {
  title: string;
  subtitle?: string;
  price: string;
  period: string;
  features: string[];
  isHighlight?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}