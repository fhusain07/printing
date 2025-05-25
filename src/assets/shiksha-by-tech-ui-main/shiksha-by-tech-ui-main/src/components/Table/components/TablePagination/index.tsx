import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

interface ITablePaginationProps {
  page: number;
  rowsPerPage: number;
  total: number;
  onPageChange: (newPage: number) => void;
  onRowsPerPageChange: (newLimit: number) => void;
  rowsPerPageOptions?: number[];
  className?: string;
}

function TablePagination(props: ITablePaginationProps) {
  const {
    page,
    rowsPerPage,
    total,
    onPageChange,
    className,
    onRowsPerPageChange,
    rowsPerPageOptions = [5, 10, 25, 50],
  } = props;
  const totalPages = Math.ceil(total / rowsPerPage);
  const start = (page - 1) * rowsPerPage + 1;
  const end = Math.min(page * rowsPerPage, total);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    onPageChange(newPage);
  };
  const handleRowsPerPageChange = (newLimit: number) => {
    onRowsPerPageChange(newLimit);
    onPageChange(1); // Reset to first page when changing rows per page
  };

  return (
    <div
      className={twMerge(
        "flex flex-wrap justify-between items-center gap-3  text-sm text-gray-700 w-max",
        className,
      )}
    >
      {/* Rows per page */}
      <div className="flex items-center gap-2">
        <span>Rows per page:</span>
        <select
          className="border rounded border-gray-300 px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          title="Rows per page"
          value={rowsPerPage}
          onChange={(e) => handleRowsPerPageChange(Number(e.target.value))}
        >
          <optgroup className=" hover:bg-primary">
            {rowsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Page range display */}
      <div className="text-sm">
        {start}–{end} of {total}
      </div>

      {/* Navigation arrows */}
      <div className="flex items-center gap-2">
        <button
          className="p-1 disabled:opacity-40 text-gray-700 hover:text-black transition"
          disabled={page <= 1}
          title="Previous Page"
          type="button"
          onClick={() => handlePageChange(page - 1)}
        >
          <FiChevronLeft size={18} />
        </button>
        <button
          className="p-1 disabled:opacity-40 text-gray-700 hover:text-black transition"
          disabled={page >= totalPages}
          title="Previous Page"
          onClick={() => handlePageChange(page + 1)}
        >
          <FiChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

export default TablePagination;
