import { AppLocale, Dictionary } from '@monorepo/shared';

export const dictionaries: Record<AppLocale, () => Promise<Dictionary>> = {
  ko: async () => {
    const [home, setting, nav] = await Promise.all([
      import('./ko/home.json').then((module) => module.default),
      import('./ko/setting.json').then((module) => module.default),
      import('./ko/nav.json').then((module) => module.default),
    ]);

    return {
      home,
      setting,
      nav,
    };
  },
  en: async () => {
    const [home, setting, nav] = await Promise.all([
      import('./en/home.json').then((module) => module.default),
      import('./en/setting.json').then((module) => module.default),
      import('./en/nav.json').then((module) => module.default),
    ]);

    return {
      home,
      setting,
      nav,
    };
  },
};
