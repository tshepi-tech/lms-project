//NPM packages
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import InputField from "../components/InputField";
import form from "../data/loginForm.json";
import FormImage from "../assets/images/FormImage.png";
import { loginUser } from "../scripts/firebaseAuth";
import { getCollection } from "../scripts/firestore";
import { useUserRole } from "../state/UserRolesContext";
import NavigationStatic from "../components/NavigationStatic";

export default function Login({ uidState, adminState }) {
  const navigation = useNavigate();
  const [uid, setUID] = uidState;
  const [uidAdmin, setUIDadmin] = adminState;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { students, setStudents } = useUserRole();

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
    resetForm();
  }

  function resetForm() {
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <NavigationStatic />
      <h1>Welcome back</h1>
      <div className="form-content">
        <form onSubmit={onLogin}>
          <InputField setup={form.email} state={[email, setEmail]} />
          <InputField setup={form.password} state={[password, setPassword]} />
          <button>Submit</button>
        </form>
        <img
          className="form-image"
          src={FormImage}
          alt="animated man on computer"
        />
      </div>
    </div>
  );
}
