import Divider from "@/components/Divider";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { default as EditableText } from "@/components/ui/EditableText";
import QuestionBuilder from "@/components/ui/Quiz/QuestionBuilder";
import QuestionList from "@/components/ui/Quiz/QuestionList";
import { IQuestion } from "@/features/app/exam/quiz.types";

interface IExamUIProps {
  questions: IQuestion[];
}

function ExamUI(props: IExamUIProps) {
  const { questions } = props;

  return (
    <Card fullwidth className="space-y-4 w-full md:max-w-3xl 2xl:max-w-7xl">
      <div className="flex items-center gap-2 w-full">
        <EditableText
          elementType="h2"
          initialValue="Question Set Name"
          textClassName="text-4xl font-semibold text-gray-900 cursor-pointer w-full px-3 py-2 rounded-md hover:bg-gray-100 transition"
        />
      </div>
      <QuestionList questions={questions} />
      <QuestionBuilder />
      <Divider />
      <div className="flex justify-end gap-3">
        <Button className="w-max" variant="primary">
          Save
        </Button>
        <Button className="w-max" variant="secondary">
          Cancel
        </Button>
      </div>
    </Card>
  );
}

export default ExamUI;
