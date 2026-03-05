import { createContext, useContext, useState, useEffect } from 'react';
import { getTranslation, getLanguageMeta } from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('ark-lang') || 'en';
  });

  const t = getTranslation(lang);
  const meta = getLanguageMeta(lang);

  useEffect(() => {
    localStorage.setItem('ark-lang', lang);
    document.documentElement.setAttribute('dir', meta.dir);
    document.documentElement.setAttribute('lang', lang);
  }, [lang, meta.dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir: meta.dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
