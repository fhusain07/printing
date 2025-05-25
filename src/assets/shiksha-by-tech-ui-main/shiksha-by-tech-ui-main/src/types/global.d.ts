export interface IOption {
  id: string | number;
  value: string;
}

export type IActionResponse = any;

export type IValue = string | number;
export type IFilterValues<T> = {
  type: T;
  value: string | number;
};
export interface IFilter<T> {
  url: string;
  values: IFilterValues<T>[];
}

export interface IGenerateFilter {
  value: string;
  type: string;
  oldFilter: IFilter<any>;
  dateData?: { from: string; to: string };
}

interface User {
  id: string;
  name: string;
  role: "admin" | "user";
  token: string;
  // anything else you need
}

export interface ISearchCriterion {
  field: string;
  operator: "Contains" | "StartsWith" | "EndsWith" | "Equals";
  value: string;
  caseInsensitive: boolean;
}
