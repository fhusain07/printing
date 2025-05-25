import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  fullwidth?: boolean;
}

function Card(props: CardProps) {
  const { className, children, fullwidth } = props;
  return (
    <div
      {...props}
      className={twMerge(
        "bg-white rounded-md  p-5 w-full max-w-2xl shadow-primary",
        fullwidth && "max-w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default Card;
