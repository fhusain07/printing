import React from "react";

interface ITableBodyProps {
  children: React.ReactNode;
}

function TableBody(props: ITableBodyProps) {
  const { children } = props;
  return <tbody className="divide-y divide-gray-200">{children}</tbody>;
}

export default TableBody;
