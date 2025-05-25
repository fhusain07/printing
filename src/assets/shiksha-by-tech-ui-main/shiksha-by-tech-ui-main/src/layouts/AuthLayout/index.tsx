// src/layouts/AuthLayout/index.tsx
import { FC, memo, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

const AuthLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      {children ?? <Outlet />}
    </div>
  );
};

export default memo(AuthLayout);
