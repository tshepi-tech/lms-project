//NPM packages
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import InputField from "../components/InputField";
import form from "../data/loginForm.json";
import FormImage from "../assets/images/FormImage.png";
import { loginUser } from "../scripts/firebaseAuth";
import { getCollection } from "../scripts/firestore";
import { useUserRole } from "../state/UserRolesContext";
import { useUID } from "../state/UIDContext";
import NavigationStatic from "../components/NavigationStatic";

export default function Login() {
  const navigation = useNavigate();
  //Global state
  const { students, setStudents } = useUserRole();
  const { setUID } = useUID();
  const { setUIDadmin } = useUID();

  //Local state
  const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");
  const [password, setPassword] = useState("12345abcd");

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
