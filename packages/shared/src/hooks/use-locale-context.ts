import { useContext } from 'react';

import { LocaleContext, type LocaleContextType } from '../providers/locale-provider';

const useLocaleContext = (): LocaleContextType => {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error('useLocaleContext must be used within a LocaleProvider');
  }

  return context;
};

export default useLocaleContext;
