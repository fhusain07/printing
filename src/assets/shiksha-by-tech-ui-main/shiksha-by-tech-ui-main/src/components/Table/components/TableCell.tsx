import React from "react";

interface ITableCellProps {
  children: React.ReactNode;
  isHeader?: boolean;
  className?: string;
}

function TableCell(props: ITableCellProps) {
  const { children, isHeader = false, className = "" } = props;
  const Component = isHeader ? "th" : "td";
  return (
    <Component
      className={`px-4 py-3 text-sm text-gray-700 ${isHeader ? "font-semibold" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}

export default TableCell;
