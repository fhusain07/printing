import { IGenerateFilter } from "@/types/global";

export const handleGenerateFilter = (params: IGenerateFilter) => {
  const { value, type, oldFilter, dateData } = params;

  if (!type) {
    throw new Error("Invalid parameter: 'type' is required.");
  }

  const filterMap = new Map(
    oldFilter.values.map((filter) => [filter.type, filter.value]),
  );

  // Handle date filters with `from` and `to`
  if (type === "dateRange" && dateData?.from && dateData?.to) {
    filterMap.set("from", dateData.from);
    filterMap.set("to", dateData.to);
    filterMap.delete("dateRange");
  } else {
    if (value && !["0"].includes(value)) {
      filterMap.set(type, value);
    } else if (value === "0") {
      filterMap.delete(type);
    } else {
      filterMap.delete(type);
    }
  }

  const updatedValues = Array.from(filterMap.entries()).map(
    ([type, value]) => ({ type, value }),
  );

  const url = updatedValues
    .map((filter) => `&${filter.type}=${filter.value}`)
    .join("");
  return {
    url,
    values: updatedValues,
  };
};
