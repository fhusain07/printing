import {
  FocusEvent,
  KeyboardEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

export interface AutocompleteOption {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

interface AutocompleteProps<T = AutocompleteOption> {
  options: T[];
  value?: T | null;
  onChange: (value: T | null) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  getOptionLabel?: (option: T) => string;
  getOptionValue?: (option: T) => string | number;
  noOptionsText?: string;
  name?: string;
  label?: string;
  id?: string;
  error?: boolean;
  helperText?: string;
}

function Autocomplete<T extends AutocompleteOption>({
  options,
  value = null,
  onChange,
  placeholder = "Select...",
  className,
  disabled = false,
  getOptionLabel = (o) => o.label,
  getOptionValue = (o) => o.value,
  noOptionsText = "No options",
  name,
  label,
  id,
  error,
  helperText,
}: AutocompleteProps<T>) {
  const [inputValue, setInputValue] = useState(
    value ? getOptionLabel(value) : "",
  );
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((opt) =>
    getOptionLabel(opt).toLowerCase().includes(inputValue.toLowerCase()),
  );

  const inputClass = twMerge(
    "border rounded-md px-4 py-2 text-base focus:outline-none focus:ring-1 w-full",
    error
      ? "border-red-500 focus:ring-red-500"
      : "border-gray-300 focus:ring-primary",
    disabled && "bg-gray-100 text-gray-400",
    className,
  );

  const handleSelect = (option: T) => {
    const label = getOptionLabel(option);
    setInputValue(label);
    onChange(option);
    setIsOpen(false);
    setHighlightIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setIsOpen(true);
        setHighlightIndex((prev) =>
          Math.min(prev + 1, filteredOptions.length - 1),
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightIndex((prev) => Math.max(prev - 1, 0));
        break;
      case "Enter":
        if (highlightIndex >= 0 && filteredOptions[highlightIndex]) {
          e.preventDefault();
          handleSelect(filteredOptions[highlightIndex]);
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    e.stopPropagation();
    // optional: delay blur to allow mouse click on suggestion
    setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 100);
  };

  const handleOutsideClick = useCallback((e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [handleOutsideClick]);

  useEffect(() => {
    // update input if parent changes value
    if (value) {
      setInputValue(getOptionLabel(value));
    }
  }, [value, getOptionLabel]);

  return (
    <div ref={containerRef} className={twMerge("relative w-full", className)}>
      {label && (
        <label className="text-base text-gray-700 block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        autoComplete="off"
        className={inputClass}
        disabled={disabled}
        id={id}
        name={name}
        placeholder={placeholder}
        type="text"
        value={inputValue}
        onBlur={handleBlur}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsOpen(true);
          setHighlightIndex(-1);
        }}
        onFocus={() => {
          if (!disabled) setIsOpen(true);
        }}
        onKeyDown={handleKeyDown}
      />
      {helperText && error && (
        <p className="text-sm text-red-500 mt-1">{helperText}</p>
      )}

      {isOpen && (
        <ul className="absolute z-10 mt-1 max-h-60 w-full overflow-auto border rounded-md border-gray-300 bg-white shadow-lg">
          {filteredOptions.length === 0 ? (
            <li className="px-4 py-2 text-sm text-gray-500">{noOptionsText}</li>
          ) : (
            filteredOptions.map((option, index) => (
              <li
                key={getOptionValue(option)}
                className={twMerge(
                  "px-4 py-2 cursor-pointer text-sm",
                  highlightIndex === index
                    ? "bg-primary-100 text-primary-800"
                    : "hover:bg-primary-50",
                )}
                onClick={() => handleSelect(option)}
              >
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {getOptionLabel(option)}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default Autocomplete;
