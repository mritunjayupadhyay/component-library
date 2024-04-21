import React, { FC } from "react";
import Button, { ButtonProps } from "../button";

const ButtonContainer: FC<ButtonProps> = ({
  disabled = false,
  onClick = () => {},
  primary = true,
  size = "small",
  text = "Button345",
}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <Button
        size={size}
        text={text}
        disabled={disabled}
        onClick={onClick}
        primary={primary}
      />
    </div>
  );
};

export default ButtonContainer;
