import React from 'react';
import { Briefcase } from 'lucide-react';

export function NavLogo() {
  return (
    <a href="/" className="flex items-center space-x-2" aria-label="Home">
      <Briefcase className="h-8 w-8 text-primary" aria-hidden="true" />
      <span className="text-xl font-bold text-primary">JobBoard</span>
    </a>
  );
}