import { type ComponentPropsWithRef } from "react";

type Props = ComponentPropsWithRef<"input"> & {
  error?: string;
};

const Input = ({ error, ...rest }: Props) => {
  return (
    <div>
      <input
        className={`${
          error ? "border-red-500" : "border-transparent"
        } border-2 border-solid bg-transparent p-2 outline-none`}
        {...rest}
      />
    </div>
  );
};

export default Input;
