import { type ReactNode } from 'react';

import PlainTextEditor from './plain-text-editor';

const PlainReact = (): ReactNode => {
  return (
    <div>
      <h3 className="text-blue-600">Plain React</h3>
      <div>
        <PlainTextEditor />
      </div>
    </div>
  );
};

export default PlainReact;
