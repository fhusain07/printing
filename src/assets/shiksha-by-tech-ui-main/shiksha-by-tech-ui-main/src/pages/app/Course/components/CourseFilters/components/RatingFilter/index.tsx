import RadioButton from "@/components/ui/RadioButton";
import StarRating from "@/components/ui/StarRating";
import { EFilterCourseType } from "@/features/app/course/course.enum";
import { ICourseFilter } from "@/features/app/course/course.types";

import { IFilter } from "@/types/global";
import React from "react";

interface IRatingFilterProps {
  onChange: (
    value: string,
    type: EFilterCourseType,
    oldUrl: IFilter<ICourseFilter>,
  ) => void;
  filterUrl: IFilter<ICourseFilter>;
  selectedRating: string;
  setSelectedRating: (state: string) => void;
}

const ratingOptions = [
  { value: "4", label: "4 & up", stars: 4 },
  { value: "3", label: "3 & up", stars: 3 },
  { value: "2", label: "2 & up", stars: 2 },
];

function RatingFilter(props: IRatingFilterProps) {
  const { onChange, filterUrl, selectedRating, setSelectedRating } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedRating(value);

    if (onChange) onChange?.(value, EFilterCourseType.Rating, filterUrl);
  };
  return (
    <div>
      {ratingOptions.map((option) => (
        <RadioButton
          key={option.value}
          checked={selectedRating === option.value}
          containerStyle="w-full"
          label={
            <span className="flex items-center gap-2">
              <StarRating rating={option.stars} /> <span>{option.label}</span>
            </span>
          }
          name="rating"
          value={option.value}
          onChange={handleChange}
        />
      ))}
    </div>
  );
}

export default RatingFilter;
