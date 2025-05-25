import CourseList from "@/components/ui/CourseList.tsx";
import { mockCourses } from "@/pages/app/Course/CourseUI";

function Courses() {
  return (
    <section className="mb-10">
      <CourseList showHeader courses={mockCourses} />
    </section>
  );
}

export default Courses;
