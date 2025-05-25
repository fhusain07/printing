import AddCourseForm from "./components/AddCourseForm";
import CourseTable from "./components/CourseTable";

interface ICourseUIProps {
  toggleForm: () => void;
  isOpen: boolean;
}

function CourseUI(props: ICourseUIProps) {
  const { toggleForm, isOpen } = props;

  return (
    <div>
      {isOpen && <AddCourseForm onClose={toggleForm} />}
      <CourseTable isOpen={isOpen} toggleForm={toggleForm} />
    </div>
  );
}

export default CourseUI;
