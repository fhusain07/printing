import { ROUTES } from "@/routes/routePaths";

export const PER_PAGE = 10;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,128})/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const NAME_REGEX = /^(?=.*[a-z])[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_2 = /^[a-zA-Z]{2}[a-zA-Z0-9' -]*$/;
export const NAME_REGEX_3 = /^(?=.*[a-z])[a-zA-Z' -]*$/;
export const NUMBER_REGEX = /^[0-9]+$/;
export const USERNAME_REGEX = /^[a-zA-Z]{1}[a-zA-Z0-9 -]*$/;
export const ONLY_ALPHABETS_SPACES = /[^a-zA-Z\s]/gi;
export const ONLY_TEXT = /^[a-zA-Z\s]*[a-zA-Z][a-zA-Z\s]*$/;
export const NUMBER_WITH_LIMIT_REGEX = /^\d{10}$/;

export const navItems = [
  { name: "Home", path: "/" },
  { name: "Courses", path: ROUTES.COURSE },
  { name: "About Us", path: ROUTES.ABOUT_US },
  { name: "Exams", path: ROUTES.EXAM },
];
export const footerItems = [
  { name: "Privacy Policy", path: "/privacy" },
  { name: "Terms of Service", path: "/terms" },
  { name: "Help Center", path: "/help" },
  { name: "Contact Us", path: "/contact" },
];
