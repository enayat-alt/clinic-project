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


import LearningHome from "../learning/pages/public/LearningHome";
import LearningLogin from "../learning/pages/public/LearningLogin";
import Profile from "../learning/pages/Dashboard/Profile";
import Dashboard from "../learning/pages/Dashboard/Dashboard";
import MyLearning from "../learning/pages/Dashboard/MyLearning";
import LearningRegister from "../learning/pages/public/Register";
import FindCourse from "../learning/pages/public/FindCourse";
import GetCertified from "../learning/pages/public/GetCertified";
import Subscribe from "../learning/pages/public/Subscribe";



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
