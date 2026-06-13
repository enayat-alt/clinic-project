// import { Suspense } from "react";
// import { Routes } from "react-router-dom";

// import ClinicRoutes from "../features/clinic/routes/ClinicRoutes";
// import LearningPublicRoutes from "../features/learning/routes/LearningPublicRoutes";
// import LearningProtectedRoutes from "../features/learning/routes/LearningProtectedRoutes";
// import AdminRoutes from "../features/admin/routes/AdminRoutes";

// export default function AppRoutes() {
//   return (
//     <Suspense
//       fallback={
//         <div className="min-h-screen flex items-center justify-center">
//           Loading...
//         </div>
//       }
//     >
//       <Routes>
//         <ClinicRoutes />

//         <LearningPublicRoutes />

//         <LearningProtectedRoutes />

//         <AdminRoutes />
//       </Routes>
//     </Suspense>
//   );
// }



// src/app/router.jsx

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