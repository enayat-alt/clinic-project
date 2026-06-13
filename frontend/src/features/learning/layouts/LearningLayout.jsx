import { Outlet } from "react-router-dom";
import LearningNavbar from "../components/LearningNavbar";

export default function LearningLayout() {
  return (
    <>
      <LearningNavbar />
      <Outlet />
    </>
  );
}