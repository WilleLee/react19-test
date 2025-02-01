import { type ReactNode } from 'react';

import { getDictionary } from '@monorepo/dictionary';
import { Counter } from '@monorepo/features';
import { type AppLocale } from '@monorepo/shared';

const Page = async ({ params }: { params: Promise<{ lang: AppLocale }> }): Promise<ReactNode> => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div>
      <h2>{dict.home.title}</h2>
      <Counter />
    </div>
  );
};

export default Page;
