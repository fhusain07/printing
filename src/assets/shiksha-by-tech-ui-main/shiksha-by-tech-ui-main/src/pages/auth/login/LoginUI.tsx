import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import TextField from "@/components/ui/TextField";
import Typography from "@/components/ui/Typography";
import { ILoginRequest } from "@/features/auth/auth.types";
import { FormikProps } from "formik";
import { Link } from "react-router-dom";

interface ILoginUIProps {
  formik: FormikProps<ILoginRequest>;
  isLoading: boolean;
}
function LoginUI(props: ILoginUIProps) {
  const { formik, isLoading } = props;
  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;
  return (
    <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Image */}
      <div className="hidden md:block bg-cover bg-center login-bg-image w-full "></div>

      {/* Right Form */}
      <div className="space-y-6 flex items-center pl-0 md:pl-10">
        <Card>
          <div className="flex items-center justify-between">
            <Typography variant="body-lg">
              Welcome to Shiksha by tech
            </Typography>
            <Typography as="span" className="text-base text-gray-500 w-[100px]">
              No Account?{" "}
              <Link
                className="text-orange-500 hover:underline"
                to="/auth/register"
              >
                Sign up
              </Link>
            </Typography>
          </div>
          <Typography className="pb-1" variant="h2">
            Login
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              error={!!touched.email && !!errors.email}
              helperText={(touched.email && errors?.email) || ""}
              label="Email address"
              name="email"
              placeholder="Username or email address"
              value={values.email}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <TextField
              className="relative"
              error={!!touched.password && !!errors.password}
              helperText={(touched.password && errors?.password) || ""}
              label="Password"
              name="password"
              placeholder="Password"
              type="password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
            />
            <TextField
              error={!!touched.institutionCode && !!errors.institutionCode}
              helperText={
                (touched.institutionCode && errors?.institutionCode) || ""
              }
              label="Acronym"
              name="institutionCode"
              placeholder="Acronym"
              value={values.institutionCode}
              onBlur={handleBlur}
              onChange={handleChange}
            />

            <div className="flex justify-end pb-1">
              <Link
                className="text-base text-primary hover:underline"
                to="/auth/forgot-password"
              >
                Forgot Password
              </Link>
            </div>

            <Button disabled={isLoading} type="submit">
              {isLoading ? "Submitting" : "Login"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default LoginUI;
