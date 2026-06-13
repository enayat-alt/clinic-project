import { lazy } from "react";
import { Route } from "react-router-dom";

import ProtectedRoute from "../../../routes/ProtectedRoute";

const DashboardLayout = lazy(
  () => import("../layouts/DashboardLayout")
);

const Dashboard = lazy(
  () => import("../pages/Dashboard/Dashboard")
);

const MyLearning = lazy(
  () => import("../pages/Dashboard/MyLearning")
);

const Profile = lazy(
  () => import("../pages/Dashboard/Profile")
);

export default function LearningProtectedRoutes() {
  return (
    <Route element={<ProtectedRoute />}>
      <Route element={<DashboardLayout />}>
        <Route
          path="/learning/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/learning/my-learning"
          element={<MyLearning />}
        />

        <Route
          path="/learning/profile"
          element={<Profile />}
        />
      </Route>
    </Route>
  );
}