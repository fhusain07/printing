import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IAnswerType, IQuestionRequest } from "./quiz.types";

export const defaultValues: IQuestionRequest = {
  questionText: "",
  options: [],
};

export const validationSchema = Yup.object({
  questionText: Yup.string().required("Question is required"),
  answerType: Yup.string().oneOf(["text", "radio", "checkbox"]),
  options: Yup.array()
    .when("answerType", {
      is: (type: IAnswerType) => type !== "text",
      then: (schema) =>
        schema.min(2, "At least two options required").of(
          Yup.object().shape({
            text: Yup.string().required("Option is required"),
          }),
        ),
    })
    .default([]),
});

const useQuizForm = (
  onSubmit: (
    values: IQuestionRequest,
    formikHelpers: FormikHelpers<IQuestionRequest>,
  ) => void | Promise<unknown>,
  initialValues = defaultValues,
) => {
  return useFormik<IQuestionRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useQuizForm;
