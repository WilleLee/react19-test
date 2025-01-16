'use client';

import { Input } from '@monorepo/ui';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const fetchData = async (text: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  return text;
};

type FormValues = {
  text: string;
};

const TextEditor = () => {
  const [isPending, setIsPending] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    setIsPending(true);
    const text = await fetchData(data.text);
    console.log('text : ', text);
    setIsPending(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('text')} />
      <button type="submit" disabled={isPending}>
        {isPending ? 'Pending...' : 'Submit'}
      </button>
    </form>
  );
};

export default TextEditor;
