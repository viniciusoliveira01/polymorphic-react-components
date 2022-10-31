import React from "react";

type TextProps<C extends React.ElementType> = {
  as?: C;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType = "span">({
  as,
  children,
  ...rest
}: TextProps<C>) => {
  const Component = as || "span";

  return <Component {...rest}>{children}</Component>;
};
