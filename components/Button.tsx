"use client";
import { ButtonProps } from "@types";
import Image from "next/image";

const Button = ({
  title,
  containerStyle,
  handleClick,
  btnType,
}: ButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyle}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};

export default Button;
