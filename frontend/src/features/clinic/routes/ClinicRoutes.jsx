import { lazy } from "react";
import ClinicLayout from "../layouts/ClinicLayout";

const Home = lazy(() => import("../pages/Home/Home"));
const Learning = lazy(() => import("../pages/Learning/Learning"));
const About = lazy(() => import("../pages/About/About"));

const Departments = lazy(() => import("../pages/Departments/Departments"));

const TestsServices = lazy(
  () => import("../pages/TestsServices/TestsServices"),
);

const DoctorSection = lazy(() => import("../pages/Doctor/DoctorSection"));

const Appointment = lazy(() => import("../pages/Appointment/Appointment"));
const Learningg = lazy(() => import("../pages/Learning/Learning"));
const Login = lazy(() => import("../pages/Login/Login"));

const Register = lazy(() => import("../pages/Register/Register"));
const Contacts = lazy(() => import("../pages/Contact/Contact"));


export const clinicRoutes = [
  {
    element: <ClinicLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/departments",
        element: <Departments />,
      },
      {
        path: "/tests-services",
        element: <TestsServices />,
      },
      {
        path: "/doctor",
        element: <DoctorSection />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/Learningg",
        element: <Learning />,
      },
       {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },

  // Routes without Header & Footer
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
