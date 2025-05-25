import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import { FaPlus } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface HeaderBarProps {
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newLimit: number) => void;
  onAdd?: () => void;
  onDownloadAll?: () => void;
  isOpen?: boolean;
  rowsPerPageOptions?: number[];
}

function HeaderBar({
  page,
  rowsPerPage,
  total,
  onPageChange,
  onRowsPerPageChange,
  onAdd,
  onDownloadAll,
  isOpen = false,
  rowsPerPageOptions = [10, 20, 50, 100],
}: HeaderBarProps) {
  const totalPages = Math.ceil(total / rowsPerPage);
  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, total);

  const handleRowsPerPageChange = (newLimit: number) => {
    onRowsPerPageChange(newLimit);
    onPageChange(1); // Reset to page 1 on limit change
  };

  return (
    <div className="flex justify-between items-center w-max gap-4 flex-wrap">
      {/* Left Side: Page Info */}
      <div className="flex items-center gap-3 text-sm text-gray-700">
        <span className="whitespace-nowrap">
          Viewing {start} - {end} of {total}
        </span>
        <div className="flex items-center border-l h-5 border-gray-300 pl-3 gap-1">
          <button
            className="transition disabled:opacity-40 hover:text-black text-gray-700 cursor-pointer "
            disabled={page <= 1}
            title="Previous"
            onClick={() => onPageChange(page - 1)}
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            className="transition disabled:opacity-40 hover:text-black text-gray-700 cursor-pointer "
            disabled={page >= totalPages}
            title="Next"
            onClick={() => onPageChange(page + 1)}
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Center: Rows Per Page Selector */}
      <div className="flex items-center gap-2 border-l h-5 border-gray-300 pl-3">
        <span className="text-sm">Rows per page:</span>
        <select
          className="border rounded border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          title="Rows per page"
          value={rowsPerPage}
          onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
        >
          <optgroup>
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Right Side: Actions */}
      <div className="flex items-center gap-2 border-l h-5 border-gray-300 pl-3">
        {typeof onDownloadAll === "function" && (
          <Button
            btnType="outlined"
            className="text-sm font-medium text-primary"
            size="sm"
            type="button"
            onClick={onDownloadAll}
          >
            Download All
          </Button>
        )}
        {!isOpen && typeof onAdd === "function" && (
          <IconButton
            aria-label="Add"
            className="bg-primary hover:bg-primary-dark text-white"
            onClick={onAdd}
          >
            <FaPlus size={12} />
          </IconButton>
        )}
      </div>
    </div>
  );
}

export default HeaderBar;
