import useLoginForm from "@/features/auth/useLoginForm";
import useLoginMutation from "@/features/auth/useLoginMutation";
import LoginUI from "./LoginUI";

function Login() {
  const { mutate: tryLogin, isPending } = useLoginMutation();
  const formik = useLoginForm(handleSubmit);

  function handleSubmit(values: any) {
    console.log("Form values", values);
    tryLogin(values);
  }

  return <LoginUI formik={formik} isLoading={isPending} />;
}

export default Login;
