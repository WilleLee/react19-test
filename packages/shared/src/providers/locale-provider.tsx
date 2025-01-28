'use client';

import { createContext, type ReactNode, type PropsWithChildren } from 'react';

import { type DictionaryMap, defaultDictionary } from '@monorepo/dictionary';

import type { AppLocale } from '../types';

export type LocaleContextType = {
  locale: AppLocale;
  dictionary: DictionaryMap;
};

export const LocaleContext = createContext<LocaleContextType>({
  locale: 'ko',
  dictionary: defaultDictionary,
});

const LocaleProvider = ({
  children,
  lang,
  dictionary,
}: PropsWithChildren<{
  lang: AppLocale;
  dictionary: DictionaryMap;
}>): ReactNode => {
  return (
    <LocaleContext.Provider
      value={{
        locale: lang,
        dictionary,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
