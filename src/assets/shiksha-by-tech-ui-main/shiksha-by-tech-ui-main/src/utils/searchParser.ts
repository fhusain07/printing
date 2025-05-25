import { ISearchCriterion } from "@/types/global";

const determineOperator = (
  rawValue: string,
): { operator: ISearchCriterion["operator"]; value: string } => {
  if (rawValue.startsWith("~")) {
    return { operator: "Contains", value: rawValue.slice(1) };
  }
  if (rawValue.startsWith("*")) {
    return { operator: "EndsWith", value: rawValue.slice(1) };
  }
  if (rawValue.endsWith("*")) {
    return { operator: "StartsWith", value: rawValue.slice(0, -1) };
  }
  return { operator: "Equals", value: rawValue };
};

export const parseInput = (input: string): ISearchCriterion | null => {
  const match = input.match(/^"(.+)"\s*:\s*"(.*)"$/);
  if (!match) return null;

  const [, rawField, rawValue] = match;
  const { operator, value } = determineOperator(rawValue);

  return {
    field: rawField.trim(),
    operator,
    value: value.trim(),
    caseInsensitive: true,
  };
};
