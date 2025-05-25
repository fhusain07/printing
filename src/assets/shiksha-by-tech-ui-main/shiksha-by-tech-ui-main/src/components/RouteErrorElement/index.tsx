// src/pages/errors/RouteError.tsx
import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import Typography from "../ui/Typography";

const RouteError = () => {
  const error = useRouteError();

  console.error("Routes error", error);
  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-center px-4">
        <div>
          <Typography
            className="text-5xl font-bold text-primary mb-4"
            variant="h1"
          >
            Oops! An error occurred.
          </Typography>
          <Typography
            className="text-5xl font-bold text-primary mb-4"
            variant="h3"
          >
            {error.status}
          </Typography>
          <Typography className="text-lg text-gray-700 mb-2" variant="body-md">
            {error.statusText || "Something went wrong."}
          </Typography>
          <Typography variant="body-md">
            looks like the page your trying to access is not available right
            now. Please try after sometime.
          </Typography>
          <Link className="text-sm text-primary hover:underline mt-4" to="/">
            Go to Home
          </Link>

          {error.data?.message && (
            <p className="text-sm text-gray-500">{error.data.message}</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-center bg-white px-4">
      <div>
        <h1 className="text-5xl font-bold text-primary mb-4">
          Unexpected Error
        </h1>
        <Link className="text-sm text-primary hover:underline mt-4" to="/">
          Go to Home
        </Link>
        {/* <p className="text-gray-700 text-red-600 font-medium">
          {(error as Error)?.message}
        </p> */}
      </div>
    </div>
  );
};

export default RouteError;
