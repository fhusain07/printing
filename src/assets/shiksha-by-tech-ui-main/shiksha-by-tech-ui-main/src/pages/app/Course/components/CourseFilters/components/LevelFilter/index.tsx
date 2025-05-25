import Checkbox from "@/components/ui/Checkbox";
import { EFilterCourseType } from "@/features/app/course/course.enum";
import { ICourseFilter } from "@/features/app/course/course.types";

import { IFilter, IOption } from "@/types/global";

interface ILevelFilterProps {
  onChange: (
    value: string,
    type: EFilterCourseType,
    oldUrl: IFilter<ICourseFilter>,
  ) => void;
  filterUrl: IFilter<ICourseFilter>;
  selectedLevels: string[];
  setSelectedLevels: (state: string[]) => void;
}

const levels: IOption[] = [
  { id: "Beginner", value: "beginner" },
  { id: "Intermediate", value: "intermediate" },
  { id: "Advanced", value: "advanced" },
];
function LevelFilter(props: ILevelFilterProps) {
  const { onChange, filterUrl, selectedLevels, setSelectedLevels } = props;
  // const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const toggleLevel = (value: string) => {
    const updated = selectedLevels.includes(value)
      ? selectedLevels.filter((v) => v !== value)
      : [...selectedLevels, value];
    setSelectedLevels(updated);
    onChange?.(updated.join(","), EFilterCourseType.Rating, filterUrl);
  };
  return (
    <div>
      {levels.map((item) => (
        <Checkbox
          key={`level-filter-${item.id}`}
          checked={selectedLevels.includes(item.value)}
          containerStyle="w-full"
          label={item.value}
          onChange={() => toggleLevel(item.value)}
        />
      ))}
    </div>
  );
}

export default LevelFilter;
