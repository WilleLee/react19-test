import { type ReactNode } from 'react';

import { getDictionary } from '@monorepo/dictionary';
import { type AppLocale } from '@monorepo/shared';
import Link from 'next/link';

export default async function Page({ params }: { params: Promise<{ lang: AppLocale }> }): Promise<ReactNode> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div>
      <h2>{dict.setting.title}</h2>
      <p>{dict.setting.description}</p>
      <div>
        <h3>{dict.setting.language.title}</h3>
        <Link href="/ko/setting">{dict.setting.language.ko}</Link>
        <Link href="/en/setting">{dict.setting.language.en}</Link>
      </div>
    </div>
  );
}
