import { IQuestion } from "@/features/app/exam/quiz.types";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import Checkbox from "../../Checkbox";
import RadioButton from "../../RadioButton";
import Stack from "../../Stack";
import Typography from "../../Typography";

interface IQuestionItemProps {
  question: IQuestion;
  onAnswerChange?: (questionId: string, selectedOptions: string[]) => void;
  index: number;
  onRemove?: (questionId: string) => void;
  onEdit?: (questionId: string) => void;
  disabled?: boolean;
}

function QuestionItem(props: IQuestionItemProps) {
  const { question, onAnswerChange, index, onEdit, onRemove, disabled } = props;
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (optionId: string) => {
    let updated: string[] = [];

    if (question.multipleAnswersAllowed) {
      updated = selected.includes(optionId)
        ? selected.filter((id) => id !== optionId)
        : [...selected, optionId];
    } else {
      updated = [optionId];
    }

    setSelected(updated);
    onAnswerChange?.(question.id ? String(question.id) : "", updated);
  };

  return (
    <Stack className="relative rounded-sm p-2 pt-5 hover:bg-gray-200 group transition-all duration-300 ease-in-out">
      <Stack
        alignItems="center"
        className="w-max absolute top-0  right-2 z-1  button-box hidden group-hover:flex opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
        direction="row"
        gap={1}
      >
        <div
          className="p-1 hover:text-orange-500  cursor-pointer"
          onClick={() => onEdit?.(String(question.id))}
        >
          <FaEdit className="my-1" />
        </div>
        <div
          className="p-1  hover:text-red-600 cursor-pointer"
          onClick={() => onRemove?.(String(question.id))}
        >
          <FaTrash />
        </div>
      </Stack>
      <Typography className="mb-4" variant="h5">
        {`${index + 1}. `} {question.text}
      </Typography>
      <fieldset className="w-full" disabled={disabled}>
        <Stack className=" " direction="row" gap={1}>
          <ul className="space-y-2  w-[97%]">
            {question.options.map((opt) => (
              <li key={opt.id}>
                <button
                  className={twMerge(
                    "w-full flex items-center-safe gap-3 text-left px-2 py-2 border border-gray-300 rounded-md transition duration-200 capitalize",
                    selected.includes(opt.id as string)
                      ? "bg-gray-200  border border-primary/10 shadow-sm"
                      : "bg-white hover:bg-gray-100",
                  )}
                  type="button"
                  onClick={() => toggleSelection(opt.id as string)}
                >
                  {!question?.multipleAnswersAllowed ? (
                    <RadioButton
                      checked={selected.includes(opt.id as string)}
                      checkedColor="text-green-500"
                      name="correct"
                      uncheckedColor="text-gray-400"
                      onChange={() => {}}
                    />
                  ) : (
                    <Checkbox
                      checked={selected.includes(opt.id as string)}
                      checkedColor="text-blue-500"
                      uncheckedColor="text-gray-400"
                      onChange={() => {}}
                    />
                  )}
                  <Typography variant="body-md">{opt.text}</Typography>
                </button>
              </li>
            ))}
          </ul>
        </Stack>
      </fieldset>
    </Stack>
  );
}

export default QuestionItem;
