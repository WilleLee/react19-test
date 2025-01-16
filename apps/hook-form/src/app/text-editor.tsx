"use client";

import { Input } from "@monorepo/ui";
import { useForm } from "react-hook-form";

type FormValues = {
  text: string;
};

const TextEditor = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <Input {...register("text")} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextEditor;
