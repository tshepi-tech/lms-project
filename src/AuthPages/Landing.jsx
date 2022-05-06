//NPM packages
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>This is an awesome LMS system</h1>
      <Link to="/signup">Create account</Link>
      <br></br>
      <Link to="/login">Log In</Link>
      <br></br>
      <Link to="/resetpassword">Reset password</Link>
    </div>
  );
}
