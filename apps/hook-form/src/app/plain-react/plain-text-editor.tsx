'use client';

import { Button, Input } from '@monorepo/ui';
import { useActionState } from 'react';

type FormState = {
  error?: string;
  text: string;
};

const fetchText = async (text: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (text.length < 4) {
    throw new Error('Text is too short');
  }

  return text;
};

const textAction = async (prevState: FormState, formData?: FormData): Promise<FormState> => {
  try {
    const text = formData?.get('text') as string;

    const newText = await fetchText(text);

    return {
      text: newText,
    };
  } catch (err) {
    const errMessage = err instanceof Error ? err.message : 'Unknown error';

    return {
      ...prevState,
      error: errMessage,
    };
  }
};

const PlainTextEditor = () => {
  const [formState, formAction, isPending] = useActionState<FormState>(textAction, { text: '' });
  const { error, text } = formState;
  return (
    <form action={formAction}>
      <Input name="text" error={error} />
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Pending...' : 'Submit'}
      </Button>
      <p>{text}</p>
    </form>
  );
};

export default PlainTextEditor;
