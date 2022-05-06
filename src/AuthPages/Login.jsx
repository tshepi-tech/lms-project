//NPM packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import InputField from "../components/InputField";
import form from "../data/loginForm.json";
import { loginUser } from "../scripts/firebaseAuth";
import { getCollection } from "../scripts/firestore";

export default function Login({ uidState, adminState }) {
  const navigation = useNavigate();
  const [uid, setUID] = uidState;
  const [uidAdmin, setUIDadmin] = adminState;

  const [email, setEmail] = useState("tshepi.tech@gmail.com");
  const [password, setPassword] = useState("123456");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadData(path) {
      const data = await getCollection(path);
      setStudents(data);
    }
    loadData("users");
  }, []);

  function isStudent(loginUID) {
    const student = students.find((item) => item.id === loginUID);
    if (student) {
      setUID(loginUID);
      navigation("/dashboard");
    } else {
      setUIDadmin(loginUID);
      navigation("/admin");
    }
  }

  async function onLogin(event) {
    event.preventDefault();

    const loginUID = await loginUser(email, password);
    isStudent(loginUID);

    /*  if (loginUID) {
      setUID(loginUID);
    
      // navigation("/dashboard");
    } */
  }

  return (
    <div>
      <h1>Welcome back</h1>
      <form onSubmit={onLogin}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Submit</button>
      </form>
    </div>
  );
}
