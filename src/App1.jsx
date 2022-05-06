//NPM packages
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

//Project files
import Unlogged from "./Routes/Unlogged";

import Admin from "./Routes/Admin";
import Student from "./Routes/Student";

export default function App() {
  const [uid, setUID] = useState(null);
  const [uidAdmin, setUIDadmin] = useState(null);

  return (
    <div className="App">
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
    </div>
  );
}
