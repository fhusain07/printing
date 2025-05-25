import React from "react";

interface AutoCompleteProps {
  inputValue: string;
}

const suggestions = ["Student Name", "Age", "Grade", "Email"];

const SearchComplete: React.FC<AutoCompleteProps> = ({ inputValue }) => {
  if (!inputValue) return null;

  const filtered = suggestions.filter((s) =>
    s.toLowerCase().includes(inputValue.toLowerCase()),
  );

  if (filtered.length === 0) return null;

  return (
    <ul className="absolute z-10 bg-white border border-gray-300 w-full mt-1 rounded shadow">
      {filtered.map((suggestion, index) => (
        <li key={index} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SearchComplete;
