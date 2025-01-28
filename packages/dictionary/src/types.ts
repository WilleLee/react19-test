type HomeDictionary = {
  title: string;
  counter: {
    title: string;
    submit: string;
    pending: string;
  };
};

type SettingDictionary = {
  title: string;
  description: string;
  language: {
    title: string;
    ko: string;
    en: string;
  };
};

type NavDictionary = {
  home: string;
  setting: string;
};

export type Dictionary = {
  home: HomeDictionary;
  setting: SettingDictionary;
  nav: NavDictionary;
};
