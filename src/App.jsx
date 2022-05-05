//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import Home from "./pages/Home";
import { CourseProvider } from "./state/CourseContext";
import { ModalProvider } from "./state/ModalContext";
import "./styles/styles.css";
import MangageStudent from "./TeacherView/pages/ManageStudent";
import Modal from "./TeacherView/components/Modal";
import Admin from "./TeacherView/pages/Admin";
import ManageResources from "./TeacherView/pages/ManageResources";

export default function App() {
  return (
    <div className="App">
      <ModalProvider>
        <CourseProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/:courseId" element={<MangageStudent />} />
              <Route
                path="/admin/:courseId/files"
                element={<ManageResources />}
              />
            </Routes>
          </BrowserRouter>
          <Modal />
        </CourseProvider>
      </ModalProvider>
    </div>
  );
}
