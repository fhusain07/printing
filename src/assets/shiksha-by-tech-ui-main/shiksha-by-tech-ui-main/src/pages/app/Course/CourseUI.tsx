import Container from "@/components/ui/Container";
import CourseList from "@/components/ui/CourseList.tsx";
import { Course } from "@/features/app/course/course.types";
import heroBg from "@assets/images/login-bg.png";
import CourseFilter from "./components/CourseFilters";

export const mockCourses: Course[] = [
  {
    id: "1",
    title: "Web Design Fundamentals",
    author: "Alina Smith",
    level: "Beginner",
    duration: "4 Weeks",
    image: heroBg,
    description:
      "Master HTML, CSS, and design principles for modern web interfaces.",
  },
  {
    id: "2",
    title: "UX/UI Design",
    author: "Emily Johnson",
    level: "Intermediate",
    duration: "6 Weeks",
    image: heroBg,
    description:
      "Learn UI/UX principles, wireframing, and interactive design tools.",
  },
  {
    id: "3",
    title: "JavaScript Essentials",
    author: "Michael Brown",
    level: "Beginner",
    duration: "5 Weeks",
    image: heroBg,
    description: "Understand the fundamentals of JavaScript programming.",
  },
  // add more
];

function CourseUI() {
  return (
    <Container className="flex flex-col gap-2 md:flex-row min-h-screen relative">
      <CourseFilter />
      <CourseList courses={mockCourses} showLink={false} />
    </Container>
  );
}

export default CourseUI;
