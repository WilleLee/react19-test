import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"button">;

const button = ({ children, ...rest }: Props) => {
  return <button {...rest}>{children}</button>;
};

export default button;
