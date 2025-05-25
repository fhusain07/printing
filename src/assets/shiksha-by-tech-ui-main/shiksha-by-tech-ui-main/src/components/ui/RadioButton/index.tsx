import React from "react";
import { twMerge } from "tailwind-merge";

interface IRadioButtonProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checkedColor?: string;
  uncheckedColor?: string;
  label?: React.ReactNode;
  labelStyle?: string;
  iconStyle?: string;
  containerStyle?: string;
}

const RadioButton: React.FC<IRadioButtonProps> = ({
  checkedColor = "text-green-500",
  uncheckedColor = "text-gray-400",
  label,
  labelStyle = "",
  iconStyle = "",
  containerStyle = "",
  ...rest
}) => {
  const isChecked = rest.checked ?? false;

  return (
    <label
      className={twMerge(
        "inline-flex items-center space-x-2 cursor-pointer",
        containerStyle,
      )}
    >
      <div className="relative flex items-center justify-center">
        <input
          className="absolute opacity-0 w-0 h-0 peer"
          type="radio"
          {...rest}
        />
        <div
          className={twMerge(
            "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
            isChecked ? checkedColor : uncheckedColor,
            "border-current",
            iconStyle,
          )}
        >
          <div
            className={twMerge(
              "w-2 h-2 rounded-full transition-opacity duration-200",
              isChecked ? "opacity-100 bg-current" : "opacity-0",
            )}
          ></div>
        </div>
      </div>
      {label && <span className={twMerge("text-sm", labelStyle)}>{label}</span>}
    </label>
  );
};

export default RadioButton;
