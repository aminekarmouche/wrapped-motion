import svTranslations from '../locales/sv.json';
import enTranslations from '../locales/en.json';

export type Language = 'sv' | 'en';

export const translations = {
  sv: svTranslations,
  en: enTranslations,
};

export const defaultLanguage: Language = 'sv';

export const getLanguageFromURL = (): Language => {
  const params = new URLSearchParams(window.location.search);
  const locale = params.get('locale');
  return (locale === 'en' || locale === 'sv') ? locale : defaultLanguage;
};
