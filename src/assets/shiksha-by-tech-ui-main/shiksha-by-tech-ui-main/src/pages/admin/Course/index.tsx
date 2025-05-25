import { useState } from "react";
import CourseUI from "./CourseUI";

function Course() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => setIsOpen((prev) => !prev);
  return <CourseUI isOpen={isOpen} toggleForm={toggleForm} />;
}

export default Course;
