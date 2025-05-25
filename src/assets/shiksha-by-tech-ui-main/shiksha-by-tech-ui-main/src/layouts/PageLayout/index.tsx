// src/layouts/PageLayout/index.tsx
import { FC, memo, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../app/Footer";
import Header from "../app/Header";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex  min-h-full  bg-gray-100">
      <div className="flex flex-col flex-1 ">
        <Header />
        <main className="p-4 px-13 m-auto w-full  min-h-[calc(100vh_-_358px)] ">
          {children ?? <Outlet />}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default memo(PageLayout);
