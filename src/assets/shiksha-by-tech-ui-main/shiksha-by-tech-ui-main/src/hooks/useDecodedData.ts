/**
 * @format
 */
import { AuthState } from "@/features/auth/auth.types";
import { RootState } from "@/store/store";
import { jwtDecode } from "jwt-decode";
import { useSelector } from "react-redux";

export interface IDecodedData {
  unique_name: string;
  UserId: string;
  RoleId: string;
  RoleName: string;
  PlanName: string;
  PlanExpiryDate: string;
  CompanyId: string;
  IsDefault: string;
  nbf: number;
  exp: number;
  iat: number;
}

function useDecodedData(): IDecodedData {
  const userInfo: AuthState = useSelector((state: RootState) => state.auth);
  const { token } = userInfo;
  const decoded = token ? jwtDecode(token) : null;

  return decoded as IDecodedData;
}

export default useDecodedData;
