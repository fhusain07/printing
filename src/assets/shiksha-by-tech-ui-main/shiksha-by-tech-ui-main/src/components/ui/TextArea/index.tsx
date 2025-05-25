// src/components/common/Textarea.tsx

import React from "react";
import { twMerge } from "tailwind-merge";

interface ITextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  className?: string;
}

function Textarea(props: ITextareaProps) {
  const { label, error, className } = props;
  return (
    <div className="flex flex-col space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <textarea
        {...props}
        className={twMerge(
          "w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
          error ? "border-red-500" : "border-gray-300",
          className,
        )}
      />
      {error && <span className="text-xs text-red-600">{error}</span>}
    </div>
  );
}

export default Textarea;
