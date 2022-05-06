//NPM packages
import { useState } from "react";
import { Link } from "react-router-dom";

//Project files
import InputField from "../components/InputField";
import form from "../data/resetPasswordForm.json";
import { resetUser } from "../scripts/firebaseAuth";

export default function PasswordReset() {
  const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");

  async function onReset(event) {
    event.preventDefault();

    await resetUser(email);
    alert(`We sent an email to ${email}. Check you spam folder as well.`);
  }

  return (
    <div>
      <p>
        Please fill in the email which you used to create the account of the
        password you want to reset. Instructions to reset the passowrd will be
        sent to that email{" "}
      </p>
      <form onSubmit={onReset}>
        <InputField setup={form.email} state={[email, setEmail]} />
        <button>Submit</button>
      </form>
      <p>
        Did you remembered your password?
        <Link to="/login">Log in</Link> to go back the login page.
      </p>
    </div>
  );
}
