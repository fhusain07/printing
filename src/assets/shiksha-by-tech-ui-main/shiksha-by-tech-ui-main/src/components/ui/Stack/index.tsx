import React from "react";
import { twMerge } from "tailwind-merge";

// ✅ Utility mappings (outside component)
const justifyContentMap = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
  around: "justify-around",
  evenly: "justify-evenly",
} as const;

const alignItemsMap = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch",
} as const;

// ✅ Utility type helpers
type JustifyContent = keyof typeof justifyContentMap;
type AlignItems = keyof typeof alignItemsMap;

interface StackProps {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "column";
  gap?: number; // Tailwind supports gap-0 to gap-96
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
}

// ✅ Stack Component
const Stack: React.FC<StackProps> = ({
  children,
  className,
  direction = "column",
  gap = 0,
  justifyContent,
  alignItems,
}) => {
  const flexDirectionClass = direction === "row" ? "flex-row" : "flex-col";
  const gapClass = `gap-${gap}`;
  const justifyClass = justifyContent ? justifyContentMap[justifyContent] : "";
  const alignClass = alignItems ? alignItemsMap[alignItems] : "";

  return (
    <div
      className={twMerge(
        "flex",
        flexDirectionClass,
        gapClass,
        justifyClass,
        alignClass,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Stack;
