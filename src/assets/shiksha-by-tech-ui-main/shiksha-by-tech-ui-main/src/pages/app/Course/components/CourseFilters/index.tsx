import Accordion from "@/components/ui/Accordion";
import AccordionHeader from "@/components/ui/Accordion/AccordionHeader";
import AccordionItem from "@/components/ui/Accordion/AccordionItem";
import AccordionPanel from "@/components/ui/Accordion/AccordionPanel";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Menu from "@/components/ui/Menu";
import MenuItem from "@/components/ui/Menu/MenuItems";
import Stack from "@/components/ui/Stack";
import Typography from "@/components/ui/Typography";

import { EFilterCourseType } from "@/features/app/course/course.enum";
import { ICourseFilter } from "@/features/app/course/course.types";
import { IFilter } from "@/types/global";
import { handleGenerateFilter } from "@/utils";
import { useState } from "react";
import { FaBroom, FaSortAmountDown } from "react-icons/fa";
import LevelFilter from "./components/LevelFilter";
import RatingFilter from "./components/RatingFilter";
import SubCategoryFilter from "./components/SubcategoryFilter";
import TopicFilter from "./components/TopicFilter";

function CourseFilter() {
  const [filterUrl, setFilterUrl] = useState<IFilter<ICourseFilter>>({
    values: [],
    url: "",
  });
  const [selectedRating, setSelectedRating] = useState<string>("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>(
    [],
  );
  const [sort, setSort] = useState("");

  const handleChangeRating = (
    value: string,
    type: EFilterCourseType,
    oldUrl: IFilter<ICourseFilter>,
  ) => {
    const tempUrl: IFilter<ICourseFilter> = handleGenerateFilter({
      value: value,
      type: type,
      oldFilter: oldUrl,
    });

    setFilterUrl(tempUrl);
  };

  const handleSort = (value: string) => {
    setSort(value);
    handleChangeRating(value, EFilterCourseType.Sort, filterUrl);
  };

  const handleClearFilter = () => {
    setFilterUrl({
      values: [],
      url: "",
    });
    setSelectedRating("");
    setSelectedLevels([]);
    setSelectedTopics([]);
    setSelectedSubCategories([]);
    setSort("");
  };

  return (
    <aside className="w-full md:w-64  sticky top-20 self-start">
      <Card className="p-0">
        <Stack className="p-2" direction="row" gap={2}>
          <Menu
            anchor={
              <Button
                className="flex items-center justify-between gap-2"
                variant="secondary"
              >
                <FaSortAmountDown />{" "}
                <span className="text-xs">{sort || "Sort"}</span>
              </Button>
            }
            className="flex-1 min-w-auto"
            onSelect={(value) => handleSort(value)}
          >
            <MenuItem value="highest-rated">Highest rated</MenuItem>
            <MenuItem value="newest">Newest </MenuItem>
            <MenuItem value="most-rated">Most rated</MenuItem>
          </Menu>

          <Button
            className="flex items-center justify-center flex-1"
            variant="secondary"
            onClick={handleClearFilter}
          >
            <FaBroom />
          </Button>
        </Stack>
        <Accordion allowMultiple defaultIndex={[0]}>
          <AccordionItem index={0}>
            <AccordionHeader>
              <Typography variant="body-md">Ratings</Typography>
            </AccordionHeader>
            <AccordionPanel>
              <RatingFilter
                filterUrl={filterUrl}
                selectedRating={selectedRating}
                setSelectedRating={(state: string) => setSelectedRating(state)}
                onChange={handleChangeRating}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={1}>
            <AccordionHeader>
              <Typography variant="body-md">Topic</Typography>
            </AccordionHeader>
            <AccordionPanel>
              <TopicFilter
                filterUrl={filterUrl}
                selectedTopics={selectedTopics}
                setSelectedTopics={(state: string[]) =>
                  setSelectedTopics(state)
                }
                onChange={handleChangeRating}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={2}>
            <AccordionHeader>
              <Typography variant="body-md">SubCategory</Typography>
            </AccordionHeader>
            <AccordionPanel>
              <SubCategoryFilter
                filterUrl={filterUrl}
                selectedSubCategories={selectedSubCategories}
                setSelectedSubCategories={(state: string[]) =>
                  setSelectedSubCategories(state)
                }
                onChange={handleChangeRating}
              />
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem index={3}>
            <AccordionHeader>
              <Typography variant="body-md">Level</Typography>
            </AccordionHeader>
            <AccordionPanel>
              <LevelFilter
                filterUrl={filterUrl}
                selectedLevels={selectedLevels}
                setSelectedLevels={(state: string[]) =>
                  setSelectedLevels(state)
                }
                onChange={handleChangeRating}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Card>
    </aside>
  );
}

export default CourseFilter;
