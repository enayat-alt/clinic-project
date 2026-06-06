import { Route } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Appointments from "../pages/Appointments";
import Students from "../pages/Students";
import Courses from "../pages/Courses";
import Setting from "../pages/Setting";



export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="students" element={<Students />} />
      <Route path="courses" element={<Courses />} />
      <Route path="setting" element={<Setting />} />
     
     
    </Route>
  );
}