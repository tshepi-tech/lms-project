//NPM package
import { Routes, Route } from "react-router-dom";

//Project files
import Landing from "../AuthPages/Landing";
import Login from "../AuthPages/Login";
import Signup from "../AuthPages/Signup";
import NotLogged from "../AuthPages/NotLogged";
import PasswordReset from "../AuthPages/PasswordReset";

export default function Unlogged({ uidState, adminState }) {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="login"
          element={<Login uidState={uidState} adminState={adminState} />}
        />
        <Route path="signup" element={<Signup uidState={uidState} />} />
        <Route path="*" element={<NotLogged />} />
        <Route path="resetpassword" element={<PasswordReset />} />
      </Routes>
    </div>
  );
}
