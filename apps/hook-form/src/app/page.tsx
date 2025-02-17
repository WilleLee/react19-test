import { type ReactNode } from 'react';

import TextEditor from '@app/text-editor';
import Link from 'next/link';

export default function Home(): ReactNode {
  return (
    <div>
      <div>
        <nav>
          <Link href={'/plain-react'}>with plain react</Link>
        </nav>
        <div>
          <TextEditor />
        </div>
      </div>
    </div>
  );
}
