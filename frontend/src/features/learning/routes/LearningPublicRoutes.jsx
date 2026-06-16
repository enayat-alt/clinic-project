import { lazy } from "react";

import ErrorBoundary from "../../../common/ErrorBoundary";

const LearningLayout = lazy(() => import("../layouts/LearningLayout"));

const LearningHome = lazy(() => import("../pages/public/LearningHome"));

const LearningLogin = lazy(() => import("../pages/public/LearningLogin"));

const LearningRegister = lazy(() => import("../pages/public/Register"));

const FindCourse = lazy(() => import("../pages/public/FindCourse"));

const GetCertified = lazy(() => import("../pages/public/GetCertified"));

const Subscribe = lazy(() => import("../pages/public/Subscribe"));

const CourseDetails = lazy(() => import("../components/CourseDetails"));

const EnrollCourse = lazy(() => import("../pages/public/EnrollCourse"));

const EnrollPage = lazy(() => import("../pages/public/EnrollPage"));

export const learningPublicRoutes = [
  {
    path: "/learning",
    //element: <LearningLayout />,

    element: (
      <ErrorBoundary>
        <LearningLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <LearningHome />,
      },
      {
        path: "find-course",
        element: <FindCourse />,
      },
      {
        path: "certifications",
        element: <GetCertified />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
      {
        path: "course/:courseId",
        element: <CourseDetails />,
      },
      {
        path: "enroll/:courseId",
        element: <EnrollCourse />,
      },
      {
        path: "payment/:courseId",
        element: <EnrollPage />,
      },
    ],
  },

  // Public Auth Routes
  {
    path: "/learning/login",
    element: <LearningLogin />,
  },
  {
    path: "/learning/register",
    element: <LearningRegister />,
  },
];
