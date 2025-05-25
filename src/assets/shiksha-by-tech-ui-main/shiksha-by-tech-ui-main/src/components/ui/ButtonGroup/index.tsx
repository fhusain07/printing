// src/components/common/ButtonGroup.tsx

import { twMerge } from "tailwind-merge";
import Button from "../Button";

interface ButtonGroupProps<T extends string> {
  options: T[];
  selected: T;
  onSelect: (value: T) => void;
  disabled?: boolean;
}

function ButtonGroup<T extends string>({
  options,
  onSelect,
  disabled = false,
}: ButtonGroupProps<T>) {
  return (
    <div className="flex bg-primary/45 w-max border border-primary/50 ">
      {options.map((option) => (
        <Button
          key={option}
          className={twMerge(
            "px-4 rounded-none capitalize py-2 border-r-2 border-r-[#e7e7e7] last:border-0",
            "bg-primary text-white",
            disabled && "bg-gray-400 cursor-not-allowed",
          )}
          disabled={disabled}
          type="button"
          onClick={() => onSelect(option)}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default ButtonGroup;
