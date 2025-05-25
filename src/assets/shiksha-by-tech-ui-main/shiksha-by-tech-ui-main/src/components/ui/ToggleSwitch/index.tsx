import React from "react";
import { twMerge } from "tailwind-merge";

interface ToggleSwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelPosition?: "left" | "right";
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({
  label,
  labelPosition = "right",
  checked,
  onChange,
  className,
  disabled = false,
  ...rest
}) => {
  return (
    <label
      className={twMerge(
        "inline-flex items-center gap-2 cursor-pointer select-none",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {label && labelPosition === "left" && (
        <span className="text-sm text-gray-700">{label}</span>
      )}

      <div className="relative">
        <input
          checked={checked}
          className="sr-only peer"
          disabled={disabled}
          type="checkbox"
          onChange={onChange}
          {...rest}
        />
        <div
          className={twMerge(
            `
            w-10 h-5 rounded-full
            peer-focus:outline-none
            peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-primary
            transition-colors duration-200
            bg-gray-300 peer-checked:bg-primary
          `,
          )}
        ></div>
        <div
          className={twMerge(
            `
            absolute left-0.5 top-0.5
            w-4 h-4 bg-white rounded-full
            transition-transform duration-300
            peer-checked:translate-x-5
          `,
          )}
        ></div>
      </div>

      {label && labelPosition === "right" && (
        <span className="text-sm text-gray-700">{label}</span>
      )}
    </label>
  );
};

export default ToggleSwitch;
