import { RootState, useAppSelector } from "@/store/store";
import ExamUI from "./ExamUI";

function Exam() {
  const questions = useAppSelector(
    (state: RootState) => state.questionSlice.questions,
  );

  return <ExamUI questions={questions} />;
}

export default Exam;
