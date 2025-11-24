import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Statistic {
  value: string;
  label: string;
  subLabel: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
}