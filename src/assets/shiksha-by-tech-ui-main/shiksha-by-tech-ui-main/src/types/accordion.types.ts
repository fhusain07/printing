import React from "react";

export interface IAccordionProps {
  children: React.ReactNode;
  allowMultiple?: boolean;
  defaultIndex?: number | number[];
}

export interface IAccordionHeaderProps {
  isOpen?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface IAccordionPanelProps {
  isOpen?: boolean;
  children: React.ReactNode;
}
