import { Route } from "react-router-dom";

import AdminLayout from "../layout/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Appointments from "../pages/Appointments";
import Students from "../pages/Students";



export default function AdminRoutes() {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="appointments" element={<Appointments />} />
      <Route path="students" element={<Students />} />
     
     
    </Route>
  );
}