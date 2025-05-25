import { BASE_URL } from "@/config";

const endpoints = {
  login: "login",
};
export const API_URLS = {
  AUTH: `${BASE_URL}/Auth/${endpoints.login}`,
};
