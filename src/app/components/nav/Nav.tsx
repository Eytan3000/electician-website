'use client';
import { useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <span className="navbar-logo">אריאל עבודות חשמל</span>
        <span className="navbar-sub-logo">
          חשמלאי ראשי מוסמך – רישיון מס’ 111025
        </span>
      </div>
      <button
        className="navbar-hamburger"
        aria-label="תפריט"
        onClick={() => setMenuOpen((open) => !open)}>
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
        <span className="hamburger-bar" />
      </button>
      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            שירותים
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            אודות
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            יצירת קשר
          </a>
        </li>
      </ul>
      <a
        href="tel:050-8225023"
        className={`navbar-phone${menuOpen ? ' open' : ''}`}>
        050-822-5023
      </a>
    </nav>
  );
}
