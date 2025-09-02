'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { translations } from './translations';

export type Language = 'he' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

// Client component that handles pathname detection
function ClientLanguageProvider({ children }: LanguageProviderProps) {
  const pathname = usePathname();
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize with correct language based on pathname immediately
    return pathname === '/fr' ? 'fr' : 'he';
  });

  // Update language when pathname changes
  useEffect(() => {
    if (pathname === '/fr') {
      setLanguage('fr');
    } else {
      setLanguage('he');
    }
  }, [pathname]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Server-safe wrapper
export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  return <ClientLanguageProvider>{children}</ClientLanguageProvider>;
};
