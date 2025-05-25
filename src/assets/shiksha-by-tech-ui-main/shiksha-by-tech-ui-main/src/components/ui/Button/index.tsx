import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "primary" | "secondary" | "success" | "error";
type ButtonType = "contained" | "outlined";
type ButtonSize = "xs" | "sm" | "md" | "lg";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  btnType?: ButtonType;
  size?: ButtonSize;
  className?: string;
}

const baseClasses =
  "inline-flex items-center justify-center rounded-sm font-semibold font-poppins transition-all duration-200 ease-in-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

const sizeClasses: Record<ButtonSize, string> = {
  xs: "px-2 py-1 text-xs",
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-2.5 py-1.5 text-sm",
  lg: "px-3 py-2 text-base",
};

const variantContained: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary/90",
  secondary: "bg-gray-100 text-primary hover:bg-primary hover:text-white",
  success: "bg-green-600 text-white hover:bg-green-700",
  error: "bg-red-600 text-white hover:bg-red-700",
};

const variantOutlined: Record<ButtonVariant, string> = {
  primary:
    "border border-primary text-primary hover:bg-primary hover:text-white",
  secondary:
    "border border-gray-300 text-gray-700 hover:border-primary hover:text-primary",
  success: "border border-green-600 text-green-600 hover:bg-green-100",
  error: "border border-red-600 text-red-600 hover:bg-red-100",
};

const getVariantClass = (
  variant: ButtonVariant,
  btnType: ButtonType,
): string => {
  return btnType === "contained"
    ? variantContained[variant]
    : variantOutlined[variant];
};

function Button({
  children,
  variant = "primary",
  btnType = "contained",
  size = "md",
  className,
  ...rest
}: IButtonProps) {
  return (
    <button
      {...rest}
      className={twMerge(
        baseClasses,
        sizeClasses[size],
        getVariantClass(variant, btnType),
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
