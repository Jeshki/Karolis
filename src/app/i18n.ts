// src/config/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Kelias nuo src/config iki public/locales (du lygius aukštyn, tada žemyn)
import enTranslation from '../../public/locales/en/translation.json';
import ltTranslation from '../../public/locales/lt/translation.json';

const resources = {
  en: {
    translation: enTranslation,
  },
  lt: {
    translation: ltTranslation,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'lt',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
  });

export default i18n;