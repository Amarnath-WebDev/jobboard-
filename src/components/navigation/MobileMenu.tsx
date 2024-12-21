import React from 'react';
import { Menu, X } from 'lucide-react';
import { NavLinks } from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function MobileMenu({ isOpen, onToggle }: MobileMenuProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-primary transition-colors duration-300"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-menu"
          className="absolute top-16 left-0 right-0 bg-white shadow-lg p-4 border-t"
          role="dialog"
          aria-modal="true"
        >
          <NavLinks isMobile onItemClick={onToggle} />
        </div>
      )}
    </div>
  );
}