import client from "@/lib/ApiClient";
import { API_URLS } from "@/lib/endPoints";
import { ILoginRequest } from "./auth.types";

export async function login(values: ILoginRequest): Promise<any> {
  return await client.post(API_URLS.AUTH, values);
}

// system@shikshabytech.com
