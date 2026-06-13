import { lazy } from "react";
import { Route } from "react-router-dom";

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

export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />

      <Route
        path="appointments"
        element={<Appointments />}
      />

      <Route path="students" element={<Students />} />

      <Route path="courses" element={<Courses />} />

      <Route path="setting" element={<Setting />} />

      {/* Courses Routes */}

      <Route
        path="courses/create"
        element={<CreateCourse />}
      />

      <Route
        path="courses/:courseId/content"
        element={<CourseContent />}
      />

      <Route
        path="add-lesson/:courseId/:chapterId"
        element={<AddLesson />}
      />

      <Route
        path="add-chapter/:courseId"
        element={<AddChapter />}
      />

      <Route
        path="courses/:id/edit"
        element={<EditCourse />}
      />
    </Route>
  );
}