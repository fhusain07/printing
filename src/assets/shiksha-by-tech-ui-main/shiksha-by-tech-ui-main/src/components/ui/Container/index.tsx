import React, { JSX } from "react";
import { twMerge } from "tailwind-merge";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"; // default = 'lg'
  padding?: boolean; // default = true
  as?: keyof JSX.IntrinsicElements; // default = 'div'
}

const Container: React.FC<ContainerProps> = ({
  children,
  className,
  maxWidth = "xl",
  padding = true,
  as: Component = "div",
}) => {
  const maxWidthClass = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-screen-lg",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    full: "max-w-full",
  }[maxWidth];

  return (
    <Component
      className={twMerge(
        "w-full mx-auto flex flex-col gap-2 container",
        maxWidthClass,
        padding && "px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Component>
  );
};

export default Container;
