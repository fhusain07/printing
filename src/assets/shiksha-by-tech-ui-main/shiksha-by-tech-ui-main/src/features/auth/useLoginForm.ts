/**
 * @format
 */
import {
  EMAIL_REGEX,
  PASSWORD_REGEX
} from "@/constants";
import GenericErrorMessages from "@/constants/messages/errorMessages";
import { authMessages } from "@/constants/messages/errorMessages/auth";
import { commonError } from "@/constants/messages/errorMessages/commonError";
import { FormikHelpers, useFormik } from "formik";
import * as Yup from "yup";
import { ILoginRequest } from "./auth.types";

const defaultValues: ILoginRequest = {
  email: "",
  password: "",
  institutionCode: "",
};

const useLoginForm = (
  onSubmit: (
    values: ILoginRequest,
    formikHelpers: FormikHelpers<ILoginRequest>,
  ) => void | Promise<unknown>,
  initialValues: ILoginRequest = defaultValues,
) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required(GenericErrorMessages.required("Email"))
      .matches(EMAIL_REGEX, commonError.emailFormat),
    password: Yup.string()
      .required(GenericErrorMessages.required("Password"))
      .matches(PASSWORD_REGEX, authMessages.password),
    institutionCode: Yup.string().required(
      GenericErrorMessages.required("Institution code"),
    ),
  });

  return useFormik<ILoginRequest>({
    initialValues,
    enableReinitialize: true,
    validationSchema: schema,
    validateOnChange: true,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit,
  });
};

export default useLoginForm;
