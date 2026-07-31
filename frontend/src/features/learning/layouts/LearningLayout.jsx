import { Outlet } from "react-router-dom";
import LearningNavbar from "../components/LearningNavbar";
import LearningCTA from "../components/LearningCTA";

export default function LearningLayout() {
  return (
    <>
      <LearningNavbar />
      <Outlet />
      <LearningCTA />
    </>
  );
}