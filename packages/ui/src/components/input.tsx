'use client';

import { type ReactNode, type ComponentPropsWithRef } from 'react';

import { cn } from '@monorepo/ui/utils';

type InputProps = ComponentPropsWithRef<'input'> & {
  error?: string;
};

const Input = ({ ref, className, type, error, ...props }: InputProps): ReactNode => {
  return (
    <input
      type={type}
      className={cn(
        'placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        error ? 'border-destructive' : 'border-input',
        className,
      )}
      ref={ref}
      {...props}
    />
  );
};
Input.displayName = 'Input';

export { Input };
