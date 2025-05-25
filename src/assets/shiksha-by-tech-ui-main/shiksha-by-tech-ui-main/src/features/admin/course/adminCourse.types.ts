export interface IAddCourseRequest {
  heading: string;
  thumbnailImage: string;
  level: string;
  isFree: boolean;
  price: number;
  discount?: number;
  isLock?: boolean;
}
