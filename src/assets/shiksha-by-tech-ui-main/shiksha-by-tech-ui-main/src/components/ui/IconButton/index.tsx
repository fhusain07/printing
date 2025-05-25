// src/components/common/IconButton.tsx

import React from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined" | "text";
  color?: "primary" | "secondary" | "danger" | "default";
  className?: string;
}

const sizeClasses = {
  small: "p-1",
  medium: "p-2",
  large: "p-3",
};

const colorClasses = {
  primary: "text-white bg-blue-600 hover:bg-blue-700",
  secondary: "text-white bg-gray-600 hover:bg-gray-700",
  danger: "text-white bg-red-600 hover:bg-red-700",
  default: "text-gray-700 bg-gray-200 hover:bg-gray-300",
};

const variantClasses = {
  filled: "",
  outlined: "border border-current bg-transparent",
  text: "bg-transparent",
};

const IconButton: React.FC<IconButtonProps> = ({
  children,
  size = "medium",
  variant = "filled",
  color = "default",
  className = "",
  ...rest
}) => {
  return (
    <button
      className={twMerge(
        `
        inline-flex items-center justify-center rounded-full w-8 h-8 cursor-pointer
        transition-all duration-200`,
        sizeClasses[size],
        colorClasses[color],
        variant === "outlined" ? variantClasses.outlined : "",
        variant === "text" ? variantClasses.text : "",
        className,
      )}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
