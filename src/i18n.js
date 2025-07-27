import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importa tus traducciones
import translationES from './locales/es/translation.json';
import translationEN from './locales/en/translation.json';

const resources = {
  es: { translation: translationES },
  en: { translation: translationEN },
};

i18n
  .use(LanguageDetector) // detecta idioma del navegador
  .use(initReactI18next) // conecta con React
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: [],
    },
  });

export default i18n;
