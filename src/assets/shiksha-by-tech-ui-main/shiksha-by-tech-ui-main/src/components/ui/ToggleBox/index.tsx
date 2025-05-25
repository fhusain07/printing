import IconButton from "@/components/ui/IconButton";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface ToggleBoxProps {
  title?: string;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
}

const ToggleBox: React.FC<ToggleBoxProps> = ({
  title,
  onClose,
  className = "",
  children,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => onClose(), 200);
  };

  return (
    <div
      className={twMerge(
        `
        relative w-full mx-auto my-4 p-4 border border-gray-200 rounded-md shadow-lg bg-white
        transition-all duration-300 ease-out transform
        ${visible ? "opacity-100 scale-100" : "opacity-0 scale-110"}
        `,
        className,
      )}
    >
      {/* Close Button */}
      <div className="absolute top-2 right-2">
        <IconButton variant="text" onClick={handleClose}>
          <FaTimes className="text-gray-500 hover:text-gray-700 active:scale-95 transition-transform duration-150" />
        </IconButton>
      </div>

      {/* Optional Title */}
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-gray-800 transition-opacity duration-200">
          {title}
        </h2>
      )}

      {/* Content */}
      <div>{children}</div>
    </div>
  );
};

export default ToggleBox;
