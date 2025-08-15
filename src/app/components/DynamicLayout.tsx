'use client';
import { useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

interface DynamicLayoutProps {
  children: React.ReactNode;
}

export default function DynamicLayout({ children }: DynamicLayoutProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const html = document.documentElement;
    if (language === 'fr') {
      html.lang = 'fr';
      html.dir = 'ltr';
    } else {
      html.lang = 'he';
      html.dir = 'rtl';
    }
  }, [language]);

  return <>{children}</>;
}
