//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Project files
import { CourseProvider } from "./state/CourseContext";
import { ModalProvider } from "./state/ModalContext";
import { ResourceProvider } from "./state/ResourceContext";
import "./styles/styles.css";
import Modal from "./TeacherView/components/Modal";
import Unlogged from "./Routes/Unlogged";
import Admin from "./Routes/Admin";
import Student from "./Routes/Student";

export default function App() {
  const [uid, setUID] = useState(null);
  const [uidAdmin, setUIDadmin] = useState(null);

  return (
    <div className="App">
      <ModalProvider>
        <CourseProvider>
          <ResourceProvider>
            <BrowserRouter>
              {!uid && !uidAdmin && (
                <Unlogged
                  uidState={[uid, setUID]}
                  adminState={[uidAdmin, setUIDadmin]}
                />
              )}
              {uidAdmin && (
                <Admin
                  adminState={[uidAdmin, setUIDadmin]}
                  uidState={[uid, setUID]}
                />
              )}
              {uid && (
                <Student
                  adminState={[uidAdmin, setUIDadmin]}
                  uidState={[uid, setUID]}
                />
              )}
            </BrowserRouter>
            <Modal />
          </ResourceProvider>
        </CourseProvider>
      </ModalProvider>
    </div>
  );
}
