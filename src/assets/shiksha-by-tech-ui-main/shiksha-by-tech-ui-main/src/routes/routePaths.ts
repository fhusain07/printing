// src/routes/routePaths.ts

export const ROUTES = {
  AUTH: {
    ROOT: "/auth",
    LOGIN: "/auth/login",
  },
  ADMIN: {
    ROOT: "/admin",
    COURSE: "/admin/courses",
    EXAM: "/admin/exams",
    SUBJECT: "/admin/subjects",
  },

  HOME: "/",
  COURSE: "/courses",
  EXAM: "/exams",
  ABOUT_US: "/about-us",
  PROFILE: "/profile",
  SETTINGS: "/settings",

  ERROR: {
    NOT_FOUND: "/404",
    UNAUTHORIZED: "/unauthorized",
  },
};
