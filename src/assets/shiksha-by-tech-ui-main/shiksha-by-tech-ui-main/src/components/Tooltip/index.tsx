// src/components/common/Tooltip.tsx

import React, { ReactNode, useState } from "react";

interface TooltipProps {
  title: string;
  children: ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  position = "top",
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  return (
    <div
      className="relative inline-block"
      onBlur={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`
            absolute z-20 px-2 py-1 text-sm text-white bg-black rounded shadow-md whitespace-nowrap
            ${positionClasses[position]}
            ${className}
          `}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
