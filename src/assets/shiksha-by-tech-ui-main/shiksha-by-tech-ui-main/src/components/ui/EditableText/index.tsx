import React, { useEffect, useRef, useState } from "react";

interface EditableTextProps {
  initialValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  elementType?: "h1" | "h2" | "h3" | "p" | "span";
  inputClassName?: string;
  textClassName?: string;
  autoFocus?: boolean;
}

const EditableText: React.FC<EditableTextProps> = ({
  initialValue = "",
  onChange,
  placeholder = "Click to edit",
  elementType = "h1",
  inputClassName = "bg-white w-full border border-gray-300 rounded px-3 py-2 text-xl font-semibold",
  textClassName = "cursor-pointer w-full px-3 py-2 rounded-md hover:bg-gray-100 transition",
  autoFocus = false,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isEditing &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsEditing(false);
        onChange?.(text); // Call onChange if provided
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isEditing, text, onChange]);

  const Tag = elementType;

  return (
    <div className="w-full">
      {isEditing ? (
        <input
          ref={inputRef}
          autoFocus={autoFocus}
          className={inputClassName}
          value={text}
          onBlur={() => {
            setIsEditing(false);
            onChange?.(text);
          }}
          onChange={(e) => setText(e.target.value)}
        />
      ) : (
        <Tag className={textClassName} onClick={() => setIsEditing(true)}>
          {text || placeholder}
        </Tag>
      )}
    </div>
  );
};

export default EditableText;
