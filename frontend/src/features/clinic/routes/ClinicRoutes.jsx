import { Route } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Departments = lazy(
  () => import("../pages/Departments/Departments")
);

const TestsServices = lazy(
  () => import("../pages/TestsServices/TestsServices")
);

const Contact = lazy(
  () => import("../pages/Contact/Contact")
);

const Appointment = lazy(
  () => import("../pages/Appointment/Appointment")
);

const Login = lazy(
  () => import("../pages/Login/Login")
);

const Register = lazy(
  () => import("../pages/Register/Register")
);

export default function ClinicRoutes() {
  return (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/tests-services" element={<TestsServices />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </>
  );
}