import React from "react";
import { twMerge } from "tailwind-merge";

interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checkedColor?: string;
  uncheckedColor?: string;
  label?: React.ReactNode;
  labelStyle?: string;
  containerStyle?: string;
}

function Checkbox(props: ICheckboxProps) {
  const {
    checkedColor = "text-green-500",
    uncheckedColor = "text-gray-400",
    label,
    labelStyle = "",
    containerStyle = "",
    ...rest
  } = props;

  const isChecked = rest.checked ?? false;

  return (
    <label
      className={twMerge(
        "inline-flex items-center space-x-2 cursor-pointer mb-0.5",
        containerStyle,
      )}
    >
      <div className="relative flex items-center justify-center">
        <input
          className="absolute opacity-0 w-0 h-0 peer"
          type="checkbox"
          {...rest}
        />
        <div
          className={twMerge(
            "w-4 h-4 rounded border-2 flex items-center justify-center transition-colors",
            isChecked ? checkedColor : uncheckedColor,
          )}
        >
          <svg
            className={twMerge(
              "w-3 h-3 transition-opacity duration-200",
              isChecked ? "opacity-100" : "opacity-0",
            )}
            fill="currentColor"
            viewBox="0 0 21 21"
          >
            <path
              clipRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              fillRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {label && <span className={`text-sm ${labelStyle}`}>{label}</span>}
    </label>
  );
}

export default Checkbox;
