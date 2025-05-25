export interface IUser {
  id: string;
  name: string;
  email: string;
  acronym: string;
  phone: string;
  role: string;
}

export interface IUserState {
  token: string;
  isLoggedIn: boolean;
}

export interface AuthState {
  token: string | null;
  user: IUser | null;
}

export interface ILoginRequest {
  email: string;
  password: string;
  institutionCode: string;
}

export interface IAuthContextType {
  user: IUser | null;

  isAuthenticated: boolean;
  handleSetUser: (user: IUser | null) => void;
}
