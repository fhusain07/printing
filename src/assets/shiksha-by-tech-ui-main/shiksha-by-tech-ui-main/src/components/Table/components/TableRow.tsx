import React from "react";

interface ITableRowProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

function TableRow(props: ITableRowProps) {
  const { children, onClick, className } = props;
  return (
    <tr
      className={`hover:bg-gray-200 transition-colors cursor-pointer ${className}`}
      onClick={onClick}
    >
      {children}
    </tr>
  );
}

export default TableRow;
