import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

export type Language = 'zh' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lang') as Language;
      if (saved === 'zh' || saved === 'en') return saved;
    }
    return 'zh';
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'zh' ? 'en' : 'zh');
  }, [language, setLanguage]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
