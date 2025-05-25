import React, { JSX } from "react";
import { twMerge } from "tailwind-merge";

type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body-lg"
  | "body-md"
  | "body-sm";

interface TypographyProps {
  variant?: TypographyVariant;
  as?: keyof JSX.IntrinsicElements; // This allows you to specify any HTML element (like 'p', 'span', etc.)
  className?: string;
  children: React.ReactNode;
}

// Define the mapping of variants to classNames
const variantClasses: Record<TypographyVariant, string> = {
  h1: "text-[55px] font-medium font-heading",
  h2: "text-[40px] font-medium font-heading",
  h3: "text-3xl font-semibold font-heading",
  h4: "text-2xl font-semibold font-heading",
  h5: "text-xl font-medium font-heading",
  h6: "text-lg font-medium font-heading",
  "body-lg": "text-xl ",
  "body-md": "text-base ",
  "body-sm": "text-xs  ",
};

function Typography(
  props: TypographyProps & React.HTMLAttributes<HTMLElement>,
) {
  const { variant = "body-md", as, className, children } = props;
  const isHeading = variant.startsWith("h");
  const Component = as || (isHeading ? variant : "p");
  const mergedClasses = twMerge(
    "capitalize-first",
    variantClasses[variant],
    isHeading ? "mb-1" : "mb-0.5",
    className,
  );
  return React.createElement(
    Component,
    {
      ...props,

      className: `${mergedClasses}`,
    },
    children,
  );
}

export default Typography;
