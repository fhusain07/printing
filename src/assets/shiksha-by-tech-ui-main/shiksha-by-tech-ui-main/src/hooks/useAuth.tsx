// context/AuthContext.tsx
import { IAuthContextType, IUser } from "@/features/auth/auth.types";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const AuthContext = createContext<IAuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleSetUser = (user: IUser | null) => {
    setUser(user);
  };

  const allValues = useMemo(() => {
    return { user, isAuthenticated: !!user, handleSetUser };
  }, [user]);

  return (
    <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
