import { Outlet } from "react-router-dom";
import LearningNavbar from "../components/LearningNavbar";

export default function DashboardLayout() {
  return (
    <>
      <LearningNavbar />

      <div className="min-h-screen bg-[#f5fbfb]">
        <Outlet />
      </div>
    </>
  );
}