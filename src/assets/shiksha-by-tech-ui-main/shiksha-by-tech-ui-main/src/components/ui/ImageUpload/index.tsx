import { ChangeEvent, MouseEvent } from "react";
import { FaTimes } from "react-icons/fa";

interface IImageUploadProps {
  onImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
  imageUrl: string;
  onRemoveImage: (e: MouseEvent<HTMLButtonElement>) => void;
}

function ImageUpload({
  onImageChange,
  imageUrl,
  onRemoveImage,
}: IImageUploadProps) {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    onImageChange?.(e);
  };

  return (
    <div className="relative w-full max-w-xs border-2 border-dashed border-gray-300 rounded-md p-6 bg-white">
      {imageUrl ? (
        <div className="relative w-full h-40">
          <img
            alt="Preview"
            className="object-cover w-full h-full rounded-md"
            src={imageUrl}
          />
          <button
            aria-label="Remove image"
            className="absolute top-1 right-1 z-10 bg-white cursor-pointer text-gray-600 hover:text-red-600 rounded-full p-1 shadow z-10"
            type="button"
            onClick={onRemoveImage}
          >
            <FaTimes className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition">
          <svg
            className="w-10 h-10 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4-4m0 0l-4 4m4-4v12"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="mt-2 text-sm text-gray-600">Upload Image</span>
          <input
            accept="image/*"
            className="hidden"
            name="thumbnailImage"
            type="file"
            onChange={handleImageChange}
          />
        </label>
      )}
    </div>
  );
}

export default ImageUpload;
