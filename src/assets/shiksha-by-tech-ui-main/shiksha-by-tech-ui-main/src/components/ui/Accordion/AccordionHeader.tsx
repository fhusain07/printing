import { IAccordionHeaderProps } from "@/types/accordion.types";
import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const AccordionHeader: React.FC<IAccordionHeaderProps> = ({
  isOpen,
  onClick,
  children,
}) => (
  <button
    className="w-full text-left p-2 flex justify-between items-center font-medium cursor-pointer hover:bg-gray-100 transition"
    onClick={onClick}
  >
    <span>{children}</span>
    {isOpen ? (
      <FaChevronUp className="text-gray-500" />
    ) : (
      <FaChevronDown className="text-gray-500" />
    )}
  </button>
);

export default AccordionHeader;
