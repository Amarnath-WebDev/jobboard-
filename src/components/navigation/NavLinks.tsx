import React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
];

interface NavLinksProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

export function NavLinks({ isMobile, onItemClick }: NavLinksProps) {
  return (
    <ul className={`${isMobile ? 'flex flex-col space-y-4' : 'hidden md:flex md:space-x-8'}`}>
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="text-gray-600 hover:text-primary transition-colors duration-300"
            onClick={onItemClick}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}