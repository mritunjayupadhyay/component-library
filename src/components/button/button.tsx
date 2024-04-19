import React, { MouseEventHandler } from "react";
export type ButtonProps = {
  text?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = ({ text = "Click me" }) => {
  return <button>{text}</button>;
};

export default Button;
