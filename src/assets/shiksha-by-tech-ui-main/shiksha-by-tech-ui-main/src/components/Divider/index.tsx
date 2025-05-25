// src/components/common/Divider.tsx

import React from "react";

interface DividerProps {
  text?: string;
  orientation?: "horizontal" | "vertical";
  align?: "left" | "center" | "right"; // Only for horizontal
  className?: string;
}

const Divider: React.FC<DividerProps> = ({
  text,
  orientation = "horizontal",
  align = "center",
  className = "",
}) => {
  if (orientation === "vertical") {
    return (
      <div
        className={`h-full w-px bg-gray-300 ${className}`}
        role="separator"
      />
    );
  }

  return (
    <div className={`flex items-center w-full ${className}`} role="separator">
      {text ? (
        <>
          <div
            className={`flex-grow border-t mt-2 mb-2 border-gray-300 ${align === "left" ? "mr-2" : align === "right" ? "ml-2" : "mx-2"}`}
          ></div>

          <span className="text-gray-500 mt-2 mb-2 text-sm whitespace-nowrap">
            {text}
          </span>
          <div
            className={`flex-grow border-t mt-2 mb-2 border-gray-300 ${align === "right" ? "mr-2" : align === "left" ? "ml-2" : "mx-2"}`}
          ></div>
        </>
      ) : (
        <div
          className={`flex-grow border-t mt-2 mb-2 border-gray-300 ${align === "right" ? "mr-2" : align === "left" ? "ml-2" : "mx-2"}`}
        ></div>
      )}
    </div>
  );
};

export default Divider;
