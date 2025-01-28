import { type AppLocale, appLocale } from '@monorepo/shared';

export const isAppLocale = (locale: string): locale is AppLocale => appLocale.includes(locale as AppLocale);

export const getLocaleFromPathname = (pathname: string): AppLocale => {
  const [, locale] = pathname.split('/');
  if (isAppLocale(locale)) {
    return locale;
  }

  return 'ko';
};
