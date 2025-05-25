import { ROUTES } from "@/routes/routePaths";
import React from "react";
import { FaLaptopCode, FaMicroscope } from "react-icons/fa";
import { FiBox } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";

export interface SidebarItemType {
  label: string;
  icon: React.ReactNode;
  path: string;
  section?: string;
}

export const sidebarData: SidebarItemType[] = [
  { label: "Dashboard", icon: <MdDashboard />, path: ROUTES.ADMIN.ROOT },
  { label: "Course", icon: <FiBox />, path: ROUTES.ADMIN.COURSE },
  { label: "Exam", icon: <FaMicroscope />, path: ROUTES.ADMIN.EXAM },
  { label: "Subject", icon: <FaLaptopCode />, path: ROUTES.ADMIN.SUBJECT },
];
