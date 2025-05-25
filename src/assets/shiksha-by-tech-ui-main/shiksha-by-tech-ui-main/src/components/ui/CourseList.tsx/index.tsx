import { Course } from "@/features/app/course/course.types";
import { ROUTES } from "@/routes/routePaths";
import Card from "../Card";
import CourseCard from "../CourseCard";
import Typography from "../Typography";

interface ICourseListProps {
  courses: Course[];
  showHeader?: boolean;
  showLink?: boolean;
}

function CourseList(props: ICourseListProps) {
  const { courses, showHeader = true, showLink = true } = props;
  return (
    <section className=" flex-1  ">
      <Card fullwidth className="py-6 px-4">
        {showHeader && (
          <div className="flex justify-between items-center mb-6">
            <div>
              <Typography
                className="text-2xl font-bold text-gray-900"
                variant="h2"
              >
                Our Courses
              </Typography>
              <Typography className="text-md max-w-md mt-1" variant="body-md">
                Learn from industry experts and enhance your skills. Choose from
                top trending courses.
              </Typography>
            </div>
            {showLink && (
              <a
                className="text-primary text-sm font-medium hover:underline"
                href={ROUTES.COURSE}
              >
                View All
              </a>
            )}
          </div>
        )}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Card>
    </section>
  );
}

export default CourseList;
