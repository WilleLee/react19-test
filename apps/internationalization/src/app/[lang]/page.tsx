import { type ReactNode } from 'react';

import { getDictionary } from '@monorepo/dictionary';
import { type AppLocale } from '@monorepo/shared';
import Link from 'next/link';

const Page = async ({ params }: { params: Promise<{ lang: AppLocale }> }): Promise<ReactNode> => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h2>{dict.home.title}</h2>
      <Link href={`/${lang}/setting`}>{dict.home.nav.setting}</Link>
    </div>
  );
};

export default Page;
