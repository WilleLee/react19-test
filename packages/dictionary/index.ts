import { type AppLocale } from '@monorepo/shared';

const dictionaries = {
  ko: () => import('./dictionaries/ko.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = (locale: AppLocale) => {
  return dictionaries[locale]();
};
