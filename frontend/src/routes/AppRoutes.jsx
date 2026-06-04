import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Departments from "../pages/Departments/Departments";
import Consultation from "../pages/Consultation/Consultation";
import TestsServices from "../pages/TestsServices/TestsServices";
import Contact from "../pages/Contact/Contact";
import Appointment from "../pages/Appointment/Appointment";

import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import LearningHome from "../pages/learning/pages/LearningHome";
import LearningLogin from "../pages/learning/pages/Login/LearningLogin";
import Profile from "../pages/learning/pages/Profile";
import Dashboard from "../pages/learning/pages/Dashboard";
import MyLearning from "../pages/learning/pages/MyLearning";
import LearningRegister from "../pages/learning/pages/Register/Register";
import FindCourse from "../pages/learning/pages/FindCourse";
import GetCertified from "../pages/learning/pages/GetCertified";
import Subscribe from "../pages/learning/pages/Subscribe";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/consultation" element={<Consultation />} />
      <Route path="/tests-services" element={<TestsServices />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* learning routes*/}

      <Route path="/learning" element={<LearningHome />} />
      <Route path="/learning/login" element={<LearningLogin />} />
      <Route path="/learning/register" element={<LearningRegister />} />
      <Route path="/learning/find-course" element={<FindCourse />} />
      <Route path="/learning/certifications" element={<GetCertified />} />
      <Route path="/learning/subscribe" element={<Subscribe/>} />

      <Route element={<ProtectedRoute />}>
        <Route path="/learning/dashboard" element={<Dashboard />} />

        <Route path="/learning/my-learning" element={<MyLearning />} />

        <Route path="/learning/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}
