//NPM packages
import { Routes, Route } from "react-router-dom";

//Project files
import AdminDashboard from "../TeacherView/pages/AdminDashboard";
import Dashboard from "../Dashboard";
import Landing from "../AuthPages/Landing";
import Login from "../AuthPages/Login";
import PasswordReset from "../AuthPages/PasswordReset";
import MangageStudent from "../TeacherView/pages/ManageStudent";
import ManageResources from "../TeacherView/pages/ManageResources";

export default function Admin() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="resetpassword" element={<PasswordReset />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="admin/:courseId" element={<MangageStudent />} />

        <Route path="admin/resources/:courseId" element={<ManageResources />} />
      </Routes>
    </div>
  );
}
