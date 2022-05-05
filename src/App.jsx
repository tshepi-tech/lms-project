//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import Home from "./pages/Home";
import { CourseProvider } from "./state/CourseContext";
import { ModalProvider } from "./state/ModalContext";
import Modal from "./TeacherView/components/Modal";
import Admin from "./TeacherView/pages/Admin";
import AdminCourses from "./TeacherView/pages/AdminCourses";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <CourseProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:courseId" element={<AdminCourses />} />
            </Routes>
          </BrowserRouter>
          <Modal />
        </CourseProvider>
      </ModalProvider>
    </div>
  );
}
