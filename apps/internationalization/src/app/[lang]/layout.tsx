import { type PropsWithChildren, type ReactNode } from 'react';

import { noto_sans_kr } from '@app/fonts';
import { getDictionary } from '@monorepo/dictionary';
import Nav from '@monorepo/nav';
import { LocaleProvider } from '@monorepo/shared/providers';
import type { AppLocale } from '@monorepo/shared/types';
import type { Metadata } from 'next';
import '@monorepo/shared/styles';

export const metadata: Metadata = {
  title: 'Internationalization Example',
  description: 'An example of internationalization in a Next.js app',
};

// 빌드 타임에 정적 페이지를 생성
export async function generateStaticParams(): Promise<{ lang: AppLocale }[]> {
  return [{ lang: 'ko' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{
  params: Promise<{ lang: AppLocale }>;
}>): Promise<ReactNode> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <html lang={lang}>
      <body className={`${noto_sans_kr.variable} antialiased`}>
        <LocaleProvider lang={lang} dictionary={dict}>
          <Nav />
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}
