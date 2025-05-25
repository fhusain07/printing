import { ISearchCriterion } from "@/types/global";
import React from "react";
import Card from "../ui/Card";
import SearchBar from "../ui/SearchBar";
import Stack from "../ui/Stack";
import HeaderBar from "./components/HeaderBar";
import TablePagination from "./components/TablePagination";

interface ITableProps {
  children: React.ReactNode;
  className?: string;
  page: number;
  limit: number;
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (limit: number) => void;
  total: number;
  onSearch?: (criteria: ISearchCriterion[]) => void;
  onAdd?: () => void;
  isOpen?: boolean;
}

function Table(props: ITableProps) {
  const {
    children,
    className,
    page,
    limit,
    onPageChange,
    onRowsPerPageChange,
    total,
    onSearch,
    onAdd,
    isOpen,
  } = props;
  const handleSearchChange = (criteria: ISearchCriterion[]) => {
    console.log("Search filters:", criteria);
    // apply filtering or API call
    onSearch?.(criteria);
  };

  return (
    <Card fullwidth>
      <Stack direction="row" justifyContent="between">
        <div></div>
        <HeaderBar
          isOpen={isOpen}
          page={page}
          rowsPerPage={limit}
          total={total}
          onAdd={onAdd}
          onDownloadAll={() => console.log("Download all")}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      </Stack>
      <Stack className="mb-2 mt-7">
        <SearchBar
          fullwidth
          placeholder='e.g. "Student Name"="Syed*"'
          onChange={handleSearchChange}
        />
      </Stack>
      <table className={`min-w-full border-collapse ${className}`}>
        {children}
      </table>
      <Stack>
        <TablePagination
          className="self-end-safe"
          page={page}
          rowsPerPage={limit}
          total={total}
          onPageChange={(page) => onPageChange(page)}
          onRowsPerPageChange={(limit) => onRowsPerPageChange(limit)}
        />
      </Stack>
    </Card>
  );
}

export default Table;
