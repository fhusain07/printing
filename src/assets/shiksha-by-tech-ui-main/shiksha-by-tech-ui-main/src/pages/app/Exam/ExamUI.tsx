import Card from "@/components/ui/Card";
import QuestionList from "@/components/ui/Quiz/QuestionList";
import Typography from "@/components/ui/Typography";
import { IQuestion } from "@/features/app/exam/quiz.types";

interface IExamUIProps {
  questions: IQuestion[];
}

function ExamUI(props: IExamUIProps) {
  const { questions } = props;

  return (
    <Card fullwidth className="space-y-4 w-full md:max-w-3xl 2xl:max-w-7xl">
      <Typography as="h1" variant="h2">
        Quiz
      </Typography>
      <QuestionList disabled questions={questions} />
    </Card>
  );
}

export default ExamUI;
