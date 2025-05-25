import Checkbox from "@/components/ui/Checkbox";
import { EFilterCourseType } from "@/features/app/course/course.enum";
import { ICourseFilter } from "@/features/app/course/course.types";

import { IFilter, IOption } from "@/types/global";

interface ISubCategoryFilterProps {
  onChange: (
    value: string,
    type: EFilterCourseType,
    oldUrl: IFilter<ICourseFilter>,
  ) => void;
  filterUrl: IFilter<ICourseFilter>;
  selectedSubCategories: string[];
  setSelectedSubCategories: (state: string[]) => void;
}

const subcategories: IOption[] = [
  { id: "Web Development", value: "web" },
  { id: "Data Science", value: "data" },
];

function SubCategoryFilter(props: ISubCategoryFilterProps) {
  const {
    onChange,
    filterUrl,
    selectedSubCategories,
    setSelectedSubCategories,
  } = props;

  // const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>(
  //   [],
  // );

  const toggleSubcategory = (value: string) => {
    const updated = selectedSubCategories.includes(value)
      ? selectedSubCategories.filter((v) => v !== value)
      : [...selectedSubCategories, value];
    setSelectedSubCategories(updated);
    onChange?.(updated.join(","), EFilterCourseType.Subcategory, filterUrl);
  };

  return (
    <div>
      {subcategories.map((item) => (
        <Checkbox
          key={`subcategory-filter-${item.id}`}
          checked={selectedSubCategories.includes(item.value)}
          containerStyle="w-full"
          label={item.value}
          onChange={() => toggleSubcategory(item.value)}
        />
      ))}
    </div>
  );
}

export default SubCategoryFilter;
