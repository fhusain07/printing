import React from "react";

interface ITableHeadProps {
  children: React.ReactNode;
}

function TableHead(props: ITableHeadProps) {
  const { children } = props;
  return (
    <thead className="bg-gray-200/80 border-b border-gray-300 text-left text-sm font-semibold text-gray-700 ">
      {children}
    </thead>
  );
}

export default TableHead;
