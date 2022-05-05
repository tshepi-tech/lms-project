//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Project files
import Home from "./pages/Home";
import { CourseProvider } from "./state/CourseContext";
import { ModalProvider } from "./state/ModalContext";
import { ResourceProvider } from "./state/ResourceContext";
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
          <ResourceProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/admin/:courseId" element={<MangageStudent />} />
                <Route
                  path="/admin/resources/:courseId"
                  element={<ManageResources />}
                />
              </Routes>
            </BrowserRouter>
            <Modal />
          </ResourceProvider>
        </CourseProvider>
      </ModalProvider>
    </div>
  );
}
