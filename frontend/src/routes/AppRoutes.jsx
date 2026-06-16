

import { createBrowserRouter } from "react-router-dom";

import { clinicRoutes } from "../features/clinic/routes/ClinicRoutes";
import { learningPublicRoutes } from "../features/learning/routes/LearningPublicRoutes";
import { learningProtectedRoutes } from "../features/learning/routes/LearningProtectedRoutes";
import { adminRoutes } from "../features/admin/routes/AdminRoutes";

export const router = createBrowserRouter([
  ...clinicRoutes,
  ...learningPublicRoutes,
  ...learningProtectedRoutes,
  ...adminRoutes,
]);