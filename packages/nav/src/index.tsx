'use client';

import { type ReactNode } from 'react';

import { useLocaleContext } from '@monorepo/shared';
import Link from 'next/link';

const Nav = (): ReactNode => {
  const { dictionary, locale } = useLocaleContext();
  return (
    <div>
      <nav>
        <ul className="flex items-center gap-1.5">
          <li>
            <Link href={`/${locale}`}>{dictionary.nav.home}</Link>
          </li>
          <li>
            <Link href={`/${locale}/setting`}>{dictionary.nav.setting}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
