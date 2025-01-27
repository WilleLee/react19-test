import { type ReactNode } from 'react';

import { type AppLocale } from '@monorepo/shared';
import type { Metadata } from 'next';
import { Noto_Sans_KR } from 'next/font/google';
import './globals.css';

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Internationalization Example',
  description: 'An example of internationalization in a Next.js app',
};

export async function generateStaticParams(): Promise<{ lang: AppLocale }[]> {
  return [{ lang: 'ko' }, { lang: 'en' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: AppLocale }>;
}>): Promise<ReactNode> {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
