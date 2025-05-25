import { IAccordionProps } from "@/types/accordion.types";
import React, { createContext, useContext, useState } from "react";

interface Context {
  openIndexes: number[];
  toggleIndex: (index: number) => void;
  allowMultiple: boolean;
}

const AccordionContext = createContext<Context | undefined>(undefined);

export const useAccordion = () => {
  const context = useContext(AccordionContext);
  if (!context)
    throw new Error("Accordion must be used within AccordionContext");
  return context;
};

const Accordion: React.FC<IAccordionProps> = ({
  children,
  allowMultiple = false,
  defaultIndex = [],
}) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>(
    Array.isArray(defaultIndex) ? defaultIndex : [defaultIndex],
  );

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => {
      if (allowMultiple) {
        return prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index];
      }
      return prev.includes(index) ? [] : [index];
    });
  };

  return (
    <AccordionContext.Provider
      value={{ openIndexes, toggleIndex, allowMultiple }}
    >
      <div className="divide-y divide-gray-300">{children}</div>
    </AccordionContext.Provider>
  );
};

export default Accordion;
