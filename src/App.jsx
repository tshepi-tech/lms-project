//NPM packages
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//Project files
import { CourseProvider } from "./state/CourseContext";
import { ModalProvider } from "./state/ModalContext";
import { ResourceProvider } from "./state/ResourceContext";
import { UserRoleProvider } from "./state/UserRolesContext";
import { useUID } from "./state/UIDContext";
import "./styles/styles.css";
import Modal from "./TeacherView/components/Modal";
import Unlogged from "./Routes/Unlogged";
import Admin from "./Routes/Admin";
import Student from "./Routes/Student";

export default function App() {
  //Global state
  const { uid } = useUID();
  const { uidAdmin } = useUID();
  return (
    <div className="App">
      <ModalProvider>
        <CourseProvider>
          <ResourceProvider>
            <UserRoleProvider>
              <BrowserRouter>
                {!uid && !uidAdmin && <Unlogged />}
                {uidAdmin && <Admin />}
                {uid && <Student />}
              </BrowserRouter>
              <Modal />
            </UserRoleProvider>
          </ResourceProvider>
        </CourseProvider>
      </ModalProvider>
    </div>
  );
}
