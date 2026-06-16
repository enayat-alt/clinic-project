import { lazy } from "react";

import ErrorBoundary from "../../../common/ErrorBoundary";

import ProtectedRoute from "../../../routes/ProtectedRoute";

const DashboardLayout = lazy(() => import("../layouts/DashboardLayout"));

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

const MyLearning = lazy(() => import("../pages/Dashboard/MyLearning"));

const Profile = lazy(() => import("../pages/Dashboard/Profile"));

export const learningProtectedRoutes = [
  {
    //element: <ProtectedRoute />,
    element: (
      <ErrorBoundary>
        <ProtectedRoute />
      </ErrorBoundary>
    ),
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/learning/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/learning/my-learning",
            element: <MyLearning />,
          },
          {
            path: "/learning/profile",
            element: <Profile />,
          },
        ],
      },
    ],
  },
];
