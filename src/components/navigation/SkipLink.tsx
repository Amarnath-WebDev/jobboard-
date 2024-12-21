import React from 'react';

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-primary px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}