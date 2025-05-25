import React from "react";
import { useAccordion } from ".";

export interface IAccordionItemProps {
  index: number;
  isOpen?: boolean;
  onToggle?: (index: number) => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({
  index,
  children,
  onToggle,
}) => {
  const { openIndexes, toggleIndex } = useAccordion();
  const isOpen = openIndexes.includes(index);
  const handleToggle = () => {
    toggleIndex(index);
    if (onToggle) onToggle?.(index);
  };
  return (
    <div>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, {
              isOpen,
              onClick: handleToggle,
            })
          : child,
      )}
    </div>
  );
};

export default AccordionItem;
