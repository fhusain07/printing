// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = () => {
//   //   const token = useSelector((state: RootState) => state.auth.token) ;
//   const token = true;

//   return token ? <Outlet /> : <Navigate replace to="/auth/login" />;
// };

// export default ProtectedRoute;

import { Outlet } from "react-router-dom";

interface Props {
  allowedRoles?: string[];
}

const ProtectedRoute = ({ allowedRoles }: Props) => {
  // const { user } = useAuth();

  // if (!user) return <Navigate to={ROUTES.AUTH.LOGIN} />;
  console.log({ allowedRoles });
  // const isAdmin = allowedRoles && !allowedRoles.includes(user.role);
  // if (isAdmin) {
  //   return <Navigate to="/" />;
  // }

  return <Outlet />;
};

export default ProtectedRoute;
