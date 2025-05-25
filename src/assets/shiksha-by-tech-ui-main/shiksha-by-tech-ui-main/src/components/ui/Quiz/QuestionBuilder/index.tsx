import { useQuestionActions } from "@/features/app/exam/questionSlice";
import {
  IAnswerType,
  IQuestion,
  IQuestionRequest,
} from "@/features/app/exam/quiz.types";
import useQuizForm from "@/features/app/exam/useQuizForm";
import { RootState, useAppSelector } from "@/store/store";
import { FormikErrors } from "formik";
import { nanoid } from "nanoid";
import { FaTrash } from "react-icons/fa";
import Button from "../../Button";
import ButtonGroup from "../../ButtonGroup";
import Checkbox from "../../Checkbox";
import IconButton from "../../IconButton";
import RadioButton from "../../RadioButton";
import Stack from "../../Stack";
import Textarea from "../../TextArea";
import TextField from "../../TextField";

function QuestionBuilder() {
  const { showQuestionChoice, showQuestionForm, answerType } = useAppSelector(
    (state: RootState) => state.questionSlice,
  );

  const {
    setToggleQuestionChoice,
    setAnswerType,
    addQuestion,
    setToggleQuestionForm,
  } = useQuestionActions();

  const {
    handleChange,
    handleBlur,
    setFieldValue,
    errors,
    touched,
    values,
    resetForm,
  } = useQuizForm(onSubmit);

  async function onSubmit(values: IQuestionRequest) {
    const question: IQuestion = {
      id: values?.id,
      text: values?.questionText,
      options: answerType === "text" ? [] : (values.options ?? []),
      multipleAnswersAllowed: answerType === "checkbox",
    };
    await addQuestion(question);
    setFieldValue("questionText", "");
    setFieldValue("id", "");

    setFieldValue(
      "options",
      answerType == "text"
        ? []
        : [
            { id: nanoid(), text: "", isCorrect: false },
            { id: nanoid(), text: "", isCorrect: false },
          ],
    );
  }

  const handleFormClose = () => {
    setToggleQuestionForm(false);
    setAnswerType(null);
    resetForm();
  };

  const handleQuestionModel = (values: IQuestionRequest, type: string) => {
    setAnswerType(type as IAnswerType);
    setToggleQuestionChoice();
    if (values?.id) {
      return onSubmit(values);
    }

    setFieldValue("id", nanoid());
    setFieldValue("answerType", type);
    setFieldValue(
      "options",
      answerType === "text"
        ? []
        : [
            { id: nanoid(), text: "", isCorrect: false },
            { id: nanoid(), text: "", isCorrect: false },
          ],
    );
    setToggleQuestionForm(true);
  };

  const handleAddOption = () => {
    if (
      (answerType === "radio" || answerType === "checkbox") &&
      values?.options
    ) {
      setFieldValue("options", [
        ...(values?.options ?? []),
        { id: nanoid(), text: "" },
      ]);
    }
  };

  const handleRemoveOption = (id: string) => {
    setFieldValue(
      "options",
      values?.options?.filter((opt) => opt.id !== id),
    );
  };

  return (
    <Stack className="mx-auto">
      {showQuestionForm && (
        <Stack className="bg-gray-500/10 py-2 px-4 rounded-xs mb-4">
          <Stack alignItems="end">
            <div
              className="p-1 pb-2 hover:text-red-600 cursor-pointer"
              onClick={() => {
                handleFormClose();
                resetForm();
              }}
            >
              <FaTrash />
            </div>
          </Stack>
          <form className="flex flex-col">
            <div>
              <Textarea
                className="bg-white w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Question"
                value={values?.questionText}
                onBlur={handleBlur("questionText")}
                onChange={handleChange("questionText")}
              />
            </div>
            {answerType !== "text" && (
              <Stack className="mt-4">
                {values?.options?.map((opt, index) => (
                  <div key={opt.id} className="flex items-center gap-2 mb-2 ">
                    {answerType === "radio" && (
                      <RadioButton
                        checked={opt.isCorrect}
                        checkedColor="text-green-500"
                        name="correct"
                        uncheckedColor="text-gray-400"
                        onChange={() =>
                          setFieldValue(
                            "options",
                            values?.options?.map((o, i) => ({
                              ...o,
                              isCorrect: i === index,
                            })),
                          )
                        }
                      />
                    )}
                    {answerType === "checkbox" && (
                      <Checkbox
                        checked={opt.isCorrect}
                        checkedColor="text-blue-500"
                        name="isCorrect"
                        uncheckedColor="text-gray-400"
                        onChange={(e) =>
                          setFieldValue(
                            `options.${index}.isCorrect`,
                            e.target.checked,
                          )
                        }
                      />
                    )}
                    <div className="flex-grow">
                      <TextField
                        className="flex-1 bg-white border border-gray-300 rounded px-2 py-1 "
                        error={
                          (errors?.options?.[
                            index
                          ] as FormikErrors<IQuestionRequest>) &&
                          touched?.options
                        }
                        name={`options.${index}.text`}
                        placeholder={`Option ${index + 1}`}
                        value={values?.options?.[index]?.text}
                        onBlur={handleBlur(`options.${index}.text`)}
                        onChange={handleChange(`options.${index}.text`)}
                      />
                    </div>
                    <IconButton
                      className="text-red-500 text-sm hover:bg-red-600 hover:text-white"
                      type="button"
                      onClick={() => handleRemoveOption(opt.id ?? "")}
                    >
                      <FaTrash />
                    </IconButton>
                  </div>
                ))}
                <Button
                  className="mb-2 mt-4"
                  type="button"
                  variant="secondary"
                  onClick={handleAddOption}
                >
                  Add Option
                </Button>
              </Stack>
            )}
          </form>
        </Stack>
      )}
      <Stack direction="row" gap={2}>
        {showQuestionChoice && (
          <Stack className="mb-4">
            <ButtonGroup
              options={["radio", "checkbox", "text"]}
              selected={values.answerType ? values.answerType : ""}
              onSelect={(type) => handleQuestionModel(values, type)}
            />
          </Stack>
        )}
        {!showQuestionChoice && (
          <Button
            className="mb-4 self-start-safe mr-4"
            onClick={() => {
              setToggleQuestionChoice();
            }}
          >
            Add Question
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export default QuestionBuilder;
