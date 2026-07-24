// Added React import to fix "Cannot find namespace 'React'" error
import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ModuleItem {
  id: number;
  title: string;
  subtopics: string[];
}

export interface Objetivo {
  text: string;
  icon: React.ReactNode;
}

export interface Razon {
  title: string;
  description: string;
}

export interface Oferta {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TargetProfile {
  title: string;
  description: string;
}
