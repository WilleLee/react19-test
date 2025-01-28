export type DictionaryMap = {
  home: {
    title: string;
    counter: {
      title: string;
      submit: string;
      pending: string;
    };
  };
  setting: {
    title: string;
    description: string;
    language: {
      title: string;
      ko: string;
      en: string;
    };
  };
  nav: {
    home: string;
    setting: string;
  };
};
