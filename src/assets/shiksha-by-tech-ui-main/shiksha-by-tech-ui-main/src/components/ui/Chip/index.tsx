import React from "react";

interface ChipProps {
  label: string;
  onRemove: () => void;
}

const Chip: React.FC<ChipProps> = ({ label, onRemove }) => (
  <div className="flex items-center bg-primary/10 text-primary px-3  rounded-full">
    <span className="mr-2 text-sm">{label}</span>
    <button
      aria-label="Remove"
      className=" text-primary hover:text-red-500 focus:outline-none cursor-pointer text-lg"
      onClick={onRemove}
    >
      &times;
    </button>
  </div>
);

export default Chip;
