'use client';

import { type ReactNode, useActionState } from 'react';

import { useLocaleContext } from '@monorepo/shared';

const incrementAction = async (prevState: number): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return prevState + 1;
};

const Counter = (): ReactNode => {
  const [count, action, isPending] = useActionState(incrementAction, 0);
  const { dictionary } = useLocaleContext();
  return (
    <form action={action}>
      <h1>{dictionary.home.counter.title}</h1>
      <p>{count}</p>
      <button type="submit" disabled={isPending}>
        {isPending ? dictionary.home.counter.pending : dictionary.home.counter.submit}
      </button>
    </form>
  );
};

export default Counter;
