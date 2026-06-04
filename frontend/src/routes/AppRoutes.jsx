
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

/* =========================
   Clinic Pages
========================= */

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Departments = lazy(() => import("../pages/Departments/Departments"));

const Consultation = lazy(() => import("../pages/Consultation/Consultation"));

const TestsServices = lazy(
  () => import("../pages/TestsServices/TestsServices"),
);

const Contact = lazy(() => import("../pages/Contact/Contact"));

const Appointment = lazy(() => import("../pages/Appointment/Appointment"));

const Login = lazy(() => import("../pages/Login/Login"));

const Register = lazy(() => import("../pages/Register/Register"));

/* =========================
   Learning Layouts
========================= */

const LearningLayout = lazy(() => import("../learning/layouts/LearningLayout"));

const DashboardLayout = lazy(
  () => import("../learning/layouts/DashboardLayout"),
);

/* =========================
   Learning Public Pages
========================= */

const LearningHome = lazy(
  () => import("../learning/pages/public/LearningHome"),
);

const LearningLogin = lazy(
  () => import("../learning/pages/public/LearningLogin"),
);

const LearningRegister = lazy(
  () => import("../learning/pages/public/Register"),
);

const FindCourse = lazy(() => import("../learning/pages/public/FindCourse"));

const GetCertified = lazy(
  () => import("../learning/pages/public/GetCertified"),
);

const Subscribe = lazy(() => import("../learning/pages/public/Subscribe"));

/* =========================
   Learning Dashboard Pages
========================= */

const Dashboard = lazy(() => import("../learning/pages/Dashboard/Dashboard"));

const MyLearning = lazy(() => import("../learning/pages/Dashboard/MyLearning"));

const Profile = lazy(() => import("../learning/pages/Dashboard/Profile"));

export default function AppRoutes() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#e5f9f8]">
          <div className="w-12 h-12 border-4 border-[#1a504c] border-t-transparent rounded-full animate-spin"></div>
        </div>
      }
    >
      <Routes>
        {/* =========================
            Clinic Routes
        ========================= */}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/tests-services" element={<TestsServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* =========================
            Learning Public Routes
        ========================= */}

        <Route path="/learning" element={<LearningLayout />}>
          <Route index element={<LearningHome />} />

          <Route path="find-course" element={<FindCourse />} />

          <Route path="certifications" element={<GetCertified />} />

          <Route path="subscribe" element={<Subscribe />} />
        </Route>

        {/* =========================
            Learning Auth Routes
        ========================= */}

        <Route path="/learning/login" element={<LearningLogin />} />

        <Route path="/learning/register" element={<LearningRegister />} />

        {/* =========================
            Learning Protected Routes
        ========================= */}

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/learning/dashboard" element={<Dashboard />} />

            <Route path="/learning/my-learning" element={<MyLearning />} />

            <Route path="/learning/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}
