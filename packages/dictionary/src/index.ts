import type { AppLocale } from '@monorepo/shared/types';

import { type DictionaryMap } from './types';

const dictionaries: Record<AppLocale, () => Promise<DictionaryMap>> = {
  ko: async () => {
    const [home, setting, nav] = await Promise.all([
      import('./dictionaries/ko/home.json').then((module) => module.default),
      import('./dictionaries/ko/setting.json').then((module) => module.default),
      import('./dictionaries/ko/nav.json').then((module) => module.default),
    ]);

    return {
      home,
      setting,
      nav,
    };
  },
  en: async () => {
    const [home, setting, nav] = await Promise.all([
      import('./dictionaries/en/home.json').then((module) => module.default),
      import('./dictionaries/en/setting.json').then((module) => module.default),
      import('./dictionaries/en/nav.json').then((module) => module.default),
    ]);

    return {
      home,
      setting,
      nav,
    };
  },
};

const getDictionary = (locale: AppLocale): Promise<DictionaryMap> => {
  return dictionaries[locale]();
};

const defaultDictionary: DictionaryMap = {
  home: {
    title: '홈',
    counter: {
      title: '카운터',
      submit: '증가',
      pending: '처리 중...',
    },
  },
  setting: {
    title: '설정',
    description: '설정 페이지입니다.',
    language: {
      title: 'Language',
      ko: '한국어',
      en: 'English',
    },
  },
  nav: {
    home: '홈',
    setting: '설정',
  },
};

export { getDictionary, type DictionaryMap, defaultDictionary };
