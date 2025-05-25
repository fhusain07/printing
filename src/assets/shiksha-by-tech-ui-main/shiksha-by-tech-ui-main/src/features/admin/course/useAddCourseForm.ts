import GenericErrorMessages from "@/constants/messages/errorMessages";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { IAddCourseRequest } from "./adminCourse.types";

// ✅ 1. Default form values
export const defaultValues: IAddCourseRequest = {
  heading: "",
  thumbnailImage: "",
  level: "",
  isFree: false,
  price: 0,
  discount: 0,
  isLock: false,
};

// ✅ 2. Validation schema
const addCourseValidationSchema = Yup.object({
  heading: Yup.string().required(GenericErrorMessages.required("Heading")),

  thumbnailImage: Yup.string()
    .url("Must be a valid URL")
    .required(GenericErrorMessages.required("Thumbnail")),

  level: Yup.string().required(GenericErrorMessages.required("Level")),

  isFree: Yup.boolean().required(),

  price: Yup.number()
    .min(0, "Price must be positive")
    .when("isFree", {
      is: false,
      then: (schema) => schema.moreThan(0, "Price must be greater than 0"),
      otherwise: (schema) => schema.min(0),
    }),

  discount: Yup.number()
    .nullable()
    .transform((v, o) => (o === "" ? undefined : v))
    .min(0, "Discount must be at least 0%")
    .max(100, "Discount cannot exceed 100%"),

  isLock: Yup.boolean().required(),
});

// ✅ 3. Hook setup
const useAddCourseForm = (
  onSubmit: (
    values: IAddCourseRequest,
    formikHelpers: FormikHelpers<IAddCourseRequest>,
  ) => void | Promise<unknown>,
  initialValues: IAddCourseRequest = defaultValues,
) => {
  return useFormik<IAddCourseRequest>({
    initialValues,
    validationSchema: addCourseValidationSchema,
    onSubmit,
    enableReinitialize: true,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
  });
};

export default useAddCourseForm;
