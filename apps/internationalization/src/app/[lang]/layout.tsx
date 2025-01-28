import { type PropsWithChildren, type ReactNode } from 'react';

import { getDictionary } from '@monorepo/dictionary';
import Nav from '@monorepo/nav';
import { LocaleProvider } from '@monorepo/shared/providers';
import type { AppLocale } from '@monorepo/shared/types';

const Layout = async ({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{ lang: AppLocale }>;
}>): Promise<ReactNode> => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <LocaleProvider lang={lang} dictionary={dict}>
      <Nav />
      {children}
    </LocaleProvider>
  );
};

export default Layout;
