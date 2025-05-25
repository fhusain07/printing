import { IDecodedData } from "@/hooks/useDecodedData";
import { store } from "@/store/store";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";

const client = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const AUTH_ROUTES = ["login", "accept-invite"];
const FILE_ROUTES: string[] = [];
const LOCATION = ["countries/state/cities", "countries/states"];
client.interceptors.request.use(
  (request) => {
    if (!request) return request;
    const authRoutes = AUTH_ROUTES.some((route) =>
      request?.url?.includes(route),
    );
    const uploadRoutes = FILE_ROUTES.some((route) => {
      const segments = request?.url?.split("/").filter(Boolean); // Remove empty segments
      if (!!segments && segments?.length === 0) return false; // Guard clause for empty URL

      const lastSegment = segments?.[segments.length - 1];
      const secondLastSegment = segments?.[segments?.length - 2] || "";

      return lastSegment === route || secondLastSegment === route;
    });
    const locationRoutes = LOCATION.some((route) =>
      request?.url?.includes(route),
    );
    const { auth } = store.getState();
    const { token } = auth;
    if (!authRoutes && request.headers) {
      const decodedToken: IDecodedData = jwtDecode(token ?? "");
      // TODO: add token to secure request
      request.headers.Authorization = `Bearer ${token}`;
      // request.headers.CompanyId = 1;
      request.headers.CompanyId = decodedToken?.CompanyId;
      request.headers.timestamp = new Date().getTime().toString();
    }
    if (uploadRoutes) {
      request.headers["Content-Type"] = "multipart/form-data";
    }
    if (locationRoutes) {
      request.headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    return request;
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: AxiosError) => {
    console.log(
      "❌ Error while executing API:",
      error?.config?.method?.toUpperCase(),
      error?.config?.url,
      "\nStatus:",
      error?.response?.status,
      "\nMessage:",
      error?.message,
    );
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (response: any) => {
    if (response.data.error) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error) => {
    console.log(
      "❌ Error while executing API:",
      error?.config?.method?.toUpperCase(),
      error?.config?.url,
      "\nStatus:",
      error?.response?.status,
      "\nMessage:",
      error?.message,
    );
    if (error.response?.status === 401) {
      // TODO: handle expired token
    }
    return Promise.reject(error.response?.data);
  },
);

export default client;
