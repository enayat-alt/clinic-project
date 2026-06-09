import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "../admin/layout/AdminLayout";
import AdminDashboard from "../admin/pages/Dashboard";
import Appointments from "../admin/pages/Appointments";
import Students from "../admin/pages/Students";
import Courses from "../admin/courses/pages/Courses";
import Setting from "../admin/pages/Setting";
import CreateCourse from "../admin/courses/pages/CreateCourse";
import CourseContent from "../admin/courses/pages/CourseContent";
import AddLesson from "../admin/courses/pages/AddLesson";
import AddChapter from "../admin/courses/pages/AddChapter";
import EditCourse from "../admin/courses/pages/EditCourse";
import EnrollPage from "../learning/pages/public/EnrollPage";

// Clinic Pages

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

//  Learning Layouts

const LearningLayout = lazy(() => import("../learning/layouts/LearningLayout"));

const DashboardLayout = lazy(
  () => import("../learning/layouts/DashboardLayout"),
);

// Learning Public Pages

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
const CourseDetails = lazy(
  () => import("../learning/components/CourseDetails"),
);
const EnrollCourse = lazy(
  () => import("../learning/pages/public/EnrollCourse"),
);

//  Learning Dashboard Pages

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
        {/*  Clinic Route*/}

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/tests-services" element={<TestsServices />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Learning Public Routes*/}

        <Route path="/learning" element={<LearningLayout />}>
          <Route index element={<LearningHome />} />

          <Route path="find-course" element={<FindCourse />} />

          <Route path="certifications" element={<GetCertified />} />

          <Route path="subscribe" element={<Subscribe />} />
          <Route path="course/:courseId" element={<CourseDetails />} />
          <Route path="enroll/:courseId" element={<EnrollCourse />} />
          <Route path="payment/:courseId" element={<EnrollPage />} />
        </Route>

        {/* Learning Auth Routes */}

        <Route path="/learning/login" element={<LearningLogin />} />

        <Route path="/learning/register" element={<LearningRegister />} />

        {/*Learning Protected Routes*/}

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/learning/dashboard" element={<Dashboard />} />

            <Route path="/learning/my-learning" element={<MyLearning />} />

            <Route path="/learning/profile" element={<Profile />} />
          </Route>
        </Route>
        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
          <Route path="setting" element={<Setting />} />
          <Route path="courses/create" element={<CreateCourse />} />
          <Route path="courses/:courseId/content" element={<CourseContent />} />
          <Route
            path="add-lesson/:courseId/:chapterId"
            element={<AddLesson />}
          />
          <Route path="add-chapter/:courseId" element={<AddChapter />} />
          <Route path="courses/:id/edit" element={<EditCourse />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
