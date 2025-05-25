import Checkbox from "@/components/ui/Checkbox";
import { EFilterCourseType } from "@/features/app/course/course.enum";
import { ICourseFilter } from "@/features/app/course/course.types";

import { IFilter, IOption } from "@/types/global";

interface ITopicFilterProps {
  onChange: (
    value: string,
    type: EFilterCourseType,
    oldUrl: IFilter<ICourseFilter>,
  ) => void;
  filterUrl: IFilter<ICourseFilter>;
  selectedTopics: string[];
  setSelectedTopics: (state: string[]) => void;
}

const topics: IOption[] = [
  { id: "React", value: "react" },
  { id: "Node.js", value: "node" },
  { id: "SQL", value: "sql" },
];

function TopicFilter(props: ITopicFilterProps) {
  const { onChange, filterUrl, selectedTopics, setSelectedTopics } = props;
  // const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const toggleTopic = (value: string) => {
    const updated = selectedTopics.includes(value)
      ? selectedTopics.filter((v) => v !== value)
      : [...selectedTopics, value];
    setSelectedTopics(updated);
    onChange?.(updated.join(","), EFilterCourseType.Topics, filterUrl);
  };
  return (
    <div>
      {topics.map((item) => (
        <Checkbox
          key={`topics-filter-${item.id}`}
          checked={selectedTopics.includes(item.value)}
          containerStyle="w-full"
          label={item.value}
          onChange={() => toggleTopic(item.value)}
        />
      ))}
    </div>
  );
}

export default TopicFilter;
