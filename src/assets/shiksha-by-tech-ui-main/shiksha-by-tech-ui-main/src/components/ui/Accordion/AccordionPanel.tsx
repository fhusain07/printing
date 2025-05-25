import { IAccordionPanelProps } from "@/types/accordion.types";
import React from "react";
import { twMerge } from "tailwind-merge";

const AccordionPanel: React.FC<IAccordionPanelProps> = ({
  isOpen,
  children,
}) => (
  <div
    className={twMerge(
      "text-sm text-gray-700  overflow-hidden",
      isOpen ? "h-full p-2 " : "h-0",
    )}
  >
    {isOpen ? children : null}
  </div>
);

export default AccordionPanel;
