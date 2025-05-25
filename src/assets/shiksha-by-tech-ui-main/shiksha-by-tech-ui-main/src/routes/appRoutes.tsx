import RouteError from "@/components/RouteErrorElement";
import AdminLayout from "@/layouts/AdminLayout";
import AuthLayout from "@/layouts/AuthLayout";
import PageLayout from "@/layouts/PageLayout";
import Subject from "@/pages/admin/Subject";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import { ROUTES } from "./routePaths";

// 🔁 Lazy-loaded route components
// auth routes
const Login = lazy(() => import("@/pages/auth/Login"));

// app routes
const Home = lazy(() => import("@/pages/app/Home"));
const Course = lazy(() => import("@/pages/app/Course"));
const Exam = lazy(() => import("@/pages/app/Exam"));
const AboutUs = lazy(() => import("@/pages/app/AboutUs"));

// admin
const AdminCourse = lazy(() => import("@/pages/admin/Course"));
const AdminExam = lazy(() => import("@/pages/admin/Exam"));
const AdminDashboard = lazy(() => import("@/pages/admin/Dashboard"));

export const AppRoutes = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <ProtectedRoute />,
    errorElement: <RouteError />,
    children: [
      {
        path: ROUTES.HOME,
        element: <PageLayout />,

        children: [{ index: true, element: <Home /> }],
      },
      {
        path: ROUTES.COURSE,
        element: <PageLayout />,

        children: [{ index: true, element: <Course /> }],
      },
      {
        path: ROUTES.ABOUT_US,
        element: <PageLayout />,

        children: [
          { index: true, element: <AboutUs /> },
          // More protected children
        ],
      },
      {
        path: ROUTES.EXAM,
        element: <PageLayout />,

        children: [{ index: true, element: <Exam /> }],
      },
    ],
  },
  {
    path: ROUTES.ADMIN.ROOT,
    element: <ProtectedRoute allowedRoles={["superAdmin", "admin"]} />,
    errorElement: <RouteError />,
    children: [
      {
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminDashboard /> },
          { path: ROUTES.ADMIN.COURSE, element: <AdminCourse /> },
          { path: ROUTES.ADMIN.SUBJECT, element: <Subject /> },
          { path: ROUTES.ADMIN.EXAM, element: <AdminExam /> },
        ],
      },
    ],
  },
  {
    path: ROUTES.AUTH.ROOT,
    element: <AuthLayout />,
    children: [
      // { index: true, element: <Login /> },
      { path: ROUTES.AUTH.LOGIN, element: <Login /> },
    ],
  },
]);
