import Divider from "@/components/Divider";

import { useQuestionActions } from "@/features/app/exam/questionSlice";
import { IQuestion } from "@/features/app/exam/quiz.types";
import { memo, useCallback } from "react";
import Typography from "../../Typography";
import QuestionItem from "../QuestionItem";

interface IQuestionListProps {
  questions: IQuestion[];
  disabled?: boolean;
}

function QuestionList(props: IQuestionListProps) {
  const { questions, disabled } = props;
  // const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const { removeQuestion } = useQuestionActions();
  const handleAnswerChange = useCallback((id: string, selected: string[]) => {
    //setAnswers((prev) => ({ ...prev, [id]: selected }));
    console.log(id, selected);
  }, []);

  return (
    <div className="space-y-4 ">
      {questions.length === 0 ? (
        <Typography variant="h5">No Questions available</Typography>
      ) : (
        questions?.map((question, index) => (
          <>
            <QuestionItem
              key={`question-${question.id}`}
              disabled={disabled}
              index={index}
              question={question}
              onAnswerChange={handleAnswerChange}
              onRemove={(questionId) => removeQuestion(questionId)}
            />
            <Divider />
          </>
        ))
      )}
    </div>
  );
}

export default memo(QuestionList);
