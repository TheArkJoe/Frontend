import en from './locales/en';
import ar from './locales/ar';

const locales = { en, ar };

const languageMeta = {
  en: { name: 'English', dir: 'ltr', flag: '🇬🇧' },
  ar: { name: 'العربية', dir: 'rtl', flag: '🇪🇬' },
  // To add a new language:
  // 1. Create src/i18n/locales/xx.js (copy en.js as template)
  // 2. Add it to the `locales` import/object above
  // 3. Add an entry to `languageMeta` here
};

export function getTranslation(lang) {
  return locales[lang] || locales.en;
}

export function getAvailableLanguages() {
  return Object.entries(languageMeta).map(([code, meta]) => ({
    code,
    ...meta,
  }));
}

export function getLanguageMeta(lang) {
  return languageMeta[lang] || languageMeta.en;
}

export default locales;
