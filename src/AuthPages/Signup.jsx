//NPM packages
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Project files
import InputField from "../components/InputField";
import form from "../data/signupForm.json";
import { createUser } from "../scripts/firebaseAuth";
import { createDocumentWithId } from "../scripts/firestore";

export default function Signup({ uidState }) {
  const [uid, setUID] = uidState;
  const navigation = useNavigate();

  const [name, setName] = useState("tshepi");
  const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");
  const [studentId, setStudentId] = useState("704780");
  const [password, setPassword] = useState("12345abcd");

  useEffect(() => {
    const loggedInUser = localStorage.getItem(uid);
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUID(foundUser);
    }
  }, []);

  async function onSignup(event) {
    event.preventDefault();
    const newUID = await createUser(email, password);
    const newUser = {
      name: name,
      email: email,
      studentId: studentId,
    };
    const payload = await createDocumentWithId("users", newUID, newUser);
    if (payload.error) alert("Could not create user");
    else {
      setUID(newUID);
      navigation("/dashboard");
    }
  }
  return (
    <div>
      <h2>Create an account to view courses and materials at Web3 school</h2>
      <form onSubmit={onSignup}>
        <InputField setup={form.name} state={[name, setName]} />
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.studentId} state={[studentId, setStudentId]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Submit</button>
      </form>
    </div>
  );
}
