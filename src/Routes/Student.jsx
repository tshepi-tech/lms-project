//NPM package
import { Routes, Route } from "react-router-dom";

//Project files
import CoursePage from "../CoursePage";
import Landing from "../AuthPages/Landing";
import Login from "../AuthPages/Login";
import PasswordReset from "../AuthPages/PasswordReset";
import Signup from "../AuthPages/Signup";
import Dashboard from "../Dashboard";

export default function Student() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/course/:courseId" element={<CoursePage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="resetpassword" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}
