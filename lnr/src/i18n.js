// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import lv from './locales/lv.json';
import ru from './locales/ru.json';
import en from './locales/en.json';

i18n
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    resources: {
      lv: { translation: lv },
      ru: { translation: ru },
      en: { translation: en },
    },
    lng: 'lv', // Default language
    fallbackLng: 'lv', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes values to prevent XSS
    },
  });

export default i18n;
