
import { lazy } from "react";
import ErrorBoundary from "../../../common/ErrorBoundary";

const AdminLayout = lazy(() => import("../layout/AdminLayout"));

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Appointments = lazy(() => import("../pages/Appointments"));
const Students = lazy(() => import("../pages/Students"));
const Setting = lazy(() => import("../pages/Setting"));

const Courses = lazy(() => import("../courses/pages/Courses"));
const CreateCourse = lazy(() =>
  import("../courses/pages/CreateCourse")
);

const CourseContent = lazy(() =>
  import("../courses/pages/CourseContent")
);

const AddLesson = lazy(() =>
  import("../courses/pages/AddLesson")
);

const AddChapter = lazy(() =>
  import("../courses/pages/AddChapter")
);

const EditCourse = lazy(() =>
  import("../courses/pages/EditCourse")
);

export const adminRoutes = [
  {
    path: "/admin",
    //element: <AdminLayout />,
       element: (
          <ErrorBoundary>
            <AdminLayout />
          </ErrorBoundary>
        ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "appointments",
        element: <Appointments />,
      },
      {
        path: "students",
        element: <Students />,
      },
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "setting",
        element: <Setting />,
      },

      // Course Routes
      {
        path: "courses/create",
        element: <CreateCourse />,
      },
      {
        path: "courses/:courseId/content",
        element: <CourseContent />,
      },
      {
        path: "add-lesson/:courseId/:chapterId",
        element: <AddLesson />,
      },
      {
        path: "add-chapter/:courseId",
        element: <AddChapter />,
      },
      {
        path: "courses/:id/edit",
        element: <EditCourse />,
      },
    ],
  },
];