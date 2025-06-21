'use client';

import { useState } from 'react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navigation">
      <div className="navigation__container">
        {/* Logo */}
        <div className="navigation__logo">
          <h1>Portfolio</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="navigation__menu">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="navigation__link"
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navigation__mobile-toggle"
        >
          <span className="visually-hidden">Open main menu</span>
          {!isOpen ? (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`navigation__mobile-menu ${isOpen ? 'navigation__mobile-menu--open' : ''}`}>
        <div className="mobile-menu__container">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="mobile-menu__link"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
