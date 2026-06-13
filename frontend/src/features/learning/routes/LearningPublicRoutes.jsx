// import { lazy } from "react";
// import { Route } from "react-router-dom";

// const LearningLayout = lazy(
//   () => import("../layouts/LearningLayout")
// );

// const LearningHome = lazy(
//   () => import("../pages/public/LearningHome")
// );

// const LearningLogin = lazy(
//   () => import("../pages/public/LearningLogin")
// );

// const LearningRegister = lazy(
//   () => import("../pages/public/Register")
// );

// const FindCourse = lazy(
//   () => import("../pages/public/FindCourse")
// );

// const GetCertified = lazy(
//   () => import("../pages/public/GetCertified")
// );

// const Subscribe = lazy(
//   () => import("../pages/public/Subscribe")
// );

// const CourseDetails = lazy(
//   () => import("../components/CourseDetails")
// );

// const EnrollCourse = lazy(
//   () => import("../pages/public/EnrollCourse")
// );

// const EnrollPage = lazy(
//   () => import("../pages/public/EnrollPage")
// );

// export default function LearningPublicRoutes() {
//   return (
//     <>
//       {/* Public Learning Layout */}
//       <Route path="/learning" element={<LearningLayout />}>
//         <Route index element={<LearningHome />} />

//         <Route
//           path="find-course"
//           element={<FindCourse />}
//         />

//         <Route
//           path="certifications"
//           element={<GetCertified />}
//         />

//         <Route
//           path="subscribe"
//           element={<Subscribe />}
//         />

//         <Route
//           path="course/:courseId"
//           element={<CourseDetails />}
//         />

//         <Route
//           path="enroll/:courseId"
//           element={<EnrollCourse />}
//         />

//         <Route
//           path="payment/:courseId"
//           element={<EnrollPage />}
//         />
//       </Route>

//       {/* Public Auth Pages */}
//       <Route
//         path="/learning/login"
//         element={<LearningLogin />}
//       />

//       <Route
//         path="/learning/register"
//         element={<LearningRegister />}
//       />
//     </>
//   );
// }



import { lazy } from "react";

const LearningLayout = lazy(
  () => import("../layouts/LearningLayout")
);

const LearningHome = lazy(
  () => import("../pages/public/LearningHome")
);

const LearningLogin = lazy(
  () => import("../pages/public/LearningLogin")
);

const LearningRegister = lazy(
  () => import("../pages/public/Register")
);

const FindCourse = lazy(
  () => import("../pages/public/FindCourse")
);

const GetCertified = lazy(
  () => import("../pages/public/GetCertified")
);

const Subscribe = lazy(
  () => import("../pages/public/Subscribe")
);

const CourseDetails = lazy(
  () => import("../components/CourseDetails")
);

const EnrollCourse = lazy(
  () => import("../pages/public/EnrollCourse")
);

const EnrollPage = lazy(
  () => import("../pages/public/EnrollPage")
);

export const learningPublicRoutes = [
  {
    path: "/learning",
    element: <LearningLayout />,
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