'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import './Nav.css';
import { PHONE_NUMBER } from '@/utils/constants';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const newLanguage = language === 'he' ? 'fr' : 'he';
    setLanguage(newLanguage);
    
    // Navigate to appropriate route
    if (newLanguage === 'fr' && pathname === '/') {
      router.push('/fr');
    } else if (newLanguage === 'he' && pathname === '/fr') {
      router.push('/');
    }
  };

  return (
    <nav className="navbar">
      {language === 'he' ? (
        // Hebrew layout: Logo on left, phone on right
        <>
          <div className="navbar-logo-container">
            <span className="navbar-logo">{t('nav.logo')}</span>
            <span className="navbar-sub-logo">
              {t('nav.subLogo')}
            </span>
          </div>
          
          <div className="navbar-controls">
            <button
              className="navbar-hamburger"
              aria-label={t('nav.menu')}
              onClick={() => setMenuOpen((open) => !open)}>
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
          
          <div className="navbar-right">
            <a
              href="tel:050-8225023"
              className={`navbar-phone${menuOpen ? ' open' : ''}`}>
              {PHONE_NUMBER}
            </a>
            <button
              className="language-switcher"
              onClick={toggleLanguage}
              aria-label="Switch to French">
              FR
            </button>
          </div>
        </>
      ) : (
        // French layout: Phone on left, logo on right
        <>
          <div className="navbar-left">
            <a
              href="tel:050-8225023"
              className={`navbar-phone${menuOpen ? ' open' : ''}`}>
              {PHONE_NUMBER}
            </a>
            <button
              className="language-switcher"
              onClick={toggleLanguage}
              aria-label="Switch to Hebrew">
              Heb
            </button>
          </div>
          
          <div className="navbar-controls">
            <button
              className="navbar-hamburger"
              aria-label={t('nav.menu')}
              onClick={() => setMenuOpen((open) => !open)}>
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
              <span className="hamburger-bar" />
            </button>
          </div>
          
          <div className="navbar-logo-container">
            <span className="navbar-logo">{t('nav.logo')}</span>
            <span className="navbar-sub-logo">
              {t('nav.subLogo')}
            </span>
          </div>
        </>
      )}
      
      {menuOpen && (
        <div className="navbar-overlay" onClick={() => setMenuOpen(false)} />
      )}
      <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            {t('nav.services')}
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t('nav.about')}
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t('nav.contact')}
          </a>
        </li>
      </ul>
    </nav>
  );
}
