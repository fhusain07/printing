import { InputHTMLAttributes, ReactNode, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface ITextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  id?: string;
  name?: string;
  className?: string;
  fullwidth?: boolean;
  error?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  helperText?: string;
  disabled?: boolean;
}

function TextField(props: ITextFieldProps) {
  const {
    label,
    className,
    fullwidth,
    error,
    startIcon,
    endIcon,
    type = "text",
    helperText,
    disabled,
    ...inputProps
  } = props;

  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const inputClass = twMerge(
    "border rounded-md px-4 py-2 text-base focus:outline-none focus:ring-1 w-full",
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-primary",
    disabled ? "bg-gray-100 text-gray-400" : "focus:ring-primary",
    className,
  );

  return (
    <div className={twMerge("flex flex-col gap-1 pb-1", fullwidth && "w-full")}>
      {label && (
        <label className="text-base text-gray-700" htmlFor={props.id}>
          {label}
        </label>
      )}

      <div className="relative w-full">
        {startIcon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {startIcon}
          </div>
        )}

        <input
          {...inputProps}
          className={twMerge(
            inputClass,
            startIcon && "pl-10",
            (endIcon || isPassword) && "pr-10",
          )}
          id={props.id}
          name={props.name}
          type={isPassword ? (showPassword ? "text" : "password") : type}
        />

        {/* End Icon or Password Toggle */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
          {isPassword ? (
            <button
              className="text-gray-400 hover:text-primary hover:cursor-pointer focus:outline-none"
              tabIndex={-1}
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
            </button>
          ) : (
            endIcon && <span className="text-gray-400">{endIcon}</span>
          )}
        </div>
      </div>

      {helperText && error && (
        <p className="text-sm text-red-500">{helperText}</p>
      )}
    </div>
  );
}

export default TextField;
