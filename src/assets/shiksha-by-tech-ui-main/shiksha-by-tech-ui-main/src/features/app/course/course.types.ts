export interface Course {
  id: string;
  title: string;
  author: string;
  level: string;
  duration: string;
  image: string;
  description: string;
}

export type ICourseFilter =
  | "rating"
  | "levels"
  | "topics"
  | "subcategory"
  | "sort";
