//NPM packages
import { useState } from "react";

//Project files
import InputField from "../components/InputField";
import form from "../data/resetPasswordForm.json";
import FormImage from "../assets/images/FormImage.png";
import { resetUser } from "../scripts/firebaseAuth";
import NavigationStatic from "../components/NavigationStatic";

export default function PasswordReset() {
  const [email, setEmail] = useState("tshepi.lehutjo@gmail.com");

  async function onReset(event) {
    event.preventDefault();

    await resetUser(email);
    alert(`We sent an email to ${email}. Check you spam folder as well.`);
    resetForm();
  }
  function resetForm() {
    setEmail("");
  }

  return (
    <div>
      <NavigationStatic />
      <p>
        Please fill in the email which you used to create the account of the
        password you want to reset. Instructions to reset the password will be
        sent to that email.
      </p>
      <div className="form-content">
        <form onSubmit={onReset}>
          <InputField setup={form.email} state={[email, setEmail]} />
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
