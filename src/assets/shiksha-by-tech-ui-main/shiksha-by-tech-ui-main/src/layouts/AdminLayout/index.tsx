import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../admin/AdminHeader";
import Sidebar from "../admin/Sidebar";

const AdminLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-gray-100">
        {/* Header */}
        <AdminHeader />
        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children ?? <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
