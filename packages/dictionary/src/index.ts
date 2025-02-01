import type { AppLocale, Dictionary } from '@monorepo/shared/types';

import { dictionaries } from './dictionaries';

export const getDictionary = (locale: AppLocale): Promise<Dictionary> => {
  return dictionaries[locale]();
};

export const defaultDictionary: Dictionary = {
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
