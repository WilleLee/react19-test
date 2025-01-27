import { type AppLocale } from '@monorepo/shared';

import { type DictionaryMap } from './src/types';

const dictionaries: Record<AppLocale, () => Promise<DictionaryMap>> = {
  ko: () => import('./src/dictionaries/ko.json').then((module) => module.default),
  en: () => import('./src/dictionaries/en.json').then((module) => module.default),
};

export const getDictionary = (locale: AppLocale): Promise<DictionaryMap> => {
  return dictionaries[locale]();
};
