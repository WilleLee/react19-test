import { type ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input">;

const Input = ({ ...rest }: Props) => {
  return <input {...rest} />;
};

export default Input;
