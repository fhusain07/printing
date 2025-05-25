// import { ISearchCriterion, parseInput } from "@/utils/searchParser";
// import { KeyboardEvent, useRef, useState } from "react";
// import { twMerge } from "tailwind-merge";
// import Chip from "../Chip";

// function SearchBar() {
//   const [inputValue, setInputValue] = useState("");
//   const [criteria, setCriteria] = useState<ISearchCriterion[]>([]);
//   const inputRef = useRef<HTMLInputElement>(null);

//   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter" && inputValue.trim()) {
//       e.preventDefault();
//       const parsed = parseInput(inputValue.trim());
//       if (parsed) {
//         setCriteria([...criteria, parsed]);
//         setInputValue("");
//       }
//     } else if (
//       e.key === "Backspace" &&
//       inputValue === "" &&
//       criteria.length > 0
//     ) {
//       setCriteria((prev) => prev.slice(0, -1));
//     }
//   };

//   const removeCriterion = (index: number) => {
//     setCriteria((prev) => prev.filter((_, i) => i !== index));
//     inputRef.current?.focus();
//   };

//   return (
//     <div className={twMerge("w-full max-w-2xl mx-auto p-4")}>
//       <div
//         className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1 focus-within:ring-2 focus-within:ring-primary bg-white"
//         onClick={() => inputRef.current?.focus()}
//       >
//         {criteria.map((chip, index) => (
//           <Chip
//             key={index}
//             label={`${chip.field} ${chip.operator} ${chip.value}`}
//             onRemove={() => removeCriterion(index)}
//           />
//         ))}
//         <input
//           ref={inputRef}
//           className="flex-1 min-w-[100px] py-1 px-2 outline-none text-sm text-gray-700"
//           placeholder='e.g. "Student Name"="~Syed"'
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onKeyDown={handleKeyDown}
//         />
//       </div>
//     </div>
//   );
// }

// export default SearchBar;

import { ISearchCriterion } from "@/types/global";
import { parseInput } from "@/utils/searchParser";
import { KeyboardEvent, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import Chip from "../Chip";

interface SearchBarProps {
  value?: ISearchCriterion[];
  onChange?: (criteria: ISearchCriterion[]) => void;
  placeholder?: string;
  fullwidth?: boolean;
  className?: string;
}

function SearchBar({
  value = [],
  onChange,
  placeholder = 'e.g. "Student Name":"~Syed"',
  fullwidth,
  className,
}: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const [criteria, setCriteria] = useState<ISearchCriterion[]>(value);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      const parsed = parseInput(inputValue.trim());
      if (parsed) {
        const newCriteria = [...criteria, parsed];
        setCriteria(newCriteria);
        onChange?.(newCriteria);
        setInputValue("");
      }
    } else if (
      e.key === "Backspace" &&
      inputValue === "" &&
      criteria.length > 0
    ) {
      const newCriteria = criteria.slice(0, -1);
      setCriteria(newCriteria);
      onChange?.(newCriteria);
    }
  };

  const removeCriterion = (index: number) => {
    const newCriteria = criteria.filter((_, i) => i !== index);
    setCriteria(newCriteria);
    onChange?.(newCriteria);
    inputRef.current?.focus();
  };

  return (
    <div className={twMerge(fullwidth && "w-full", className)}>
      <div
        className="flex flex-wrap items-center gap-1 border border-gray-300 rounded px-2 py-1.5 focus-within:ring-2 focus-within:ring-primary bg-white"
        onClick={() => inputRef.current?.focus()}
      >
        {criteria.map((chip, index) => (
          <Chip
            key={index}
            label={`"${chip.field}" ${chip.operator} "${chip.value}"`}
            onRemove={() => removeCriterion(index)}
          />
        ))}
        <input
          ref={inputRef}
          className="flex-1 min-w-[100px] py-1 px-2 outline-none text-sm text-gray-700"
          placeholder={placeholder}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}

export default SearchBar;
