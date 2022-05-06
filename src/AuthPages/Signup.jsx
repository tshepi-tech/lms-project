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
  const [age, setAge] = useState("22");
  const [city, setCity] = useState("Lund");
  const [password, setPassword] = useState("12345abcd");
  const [student, setStudent] = useState("true");

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
      age: age,
      city: city,
      student: student,
    };
    const payload = await createDocumentWithId("users", newUID, newUser);
    if (payload.error) alert("Could not create user");
    else {
      setUID(newUID);
      localStorage.setItem("newUser", JSON.stringify(newUID));
      navigation("/dashboard");
    }
  }
  return (
    <div>
      <h1>Create an account</h1>
      <p>Create an account to view courses and materials of your studies</p>
      <form onSubmit={onSignup}>
        <InputField setup={form.name} state={[name, setName]} />
        <InputField setup={form.email} state={[email, setEmail]} />
        <InputField setup={form.age} state={[age, setAge]} />
        <InputField setup={form.city} state={[city, setCity]} />
        <InputField setup={form.password} state={[password, setPassword]} />
        <button>Submit</button>
      </form>
    </div>
  );
}
