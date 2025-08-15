'use client';
import { useEffect } from 'react';
import About from '../components/about/About';
import Hero from '../components/hero/Hero';
import Services from '../components/services/Services';
import { LanguageProvider, useLanguage } from '../contexts/LanguageContext';

function FrenchContent() {
  const { setLanguage } = useLanguage();
  
  useEffect(() => {
    setLanguage('fr');
  }, [setLanguage]);

  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
}

export default function FrenchPage() {
  return (
    <LanguageProvider>
      <FrenchContent />
    </LanguageProvider>
  );
}
