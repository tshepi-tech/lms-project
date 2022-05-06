//NPM package
import { Routes, Route } from "react-router-dom";

//Project files
import Landing from "../AuthPages/Landing";
import Login from "../AuthPages/Login";
import PasswordReset from "../AuthPages/PasswordReset";
import Signup from "../AuthPages/Signup";
import Dashboard from "../Dashboard";

export default function Student({ uidState, adminState }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="dashboard"
          element={<Dashboard uidState={uidState} adminState={adminState} />}
        />
        <Route
          path="login"
          element={<Login uidState={uidState} adminState={adminState} />}
        />
        <Route path="signup" element={<Signup uidState={uidState} />} />
        <Route path="resetpassword" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}
