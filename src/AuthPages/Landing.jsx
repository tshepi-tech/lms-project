//NPM packages
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <h1>This is an awesome LMS system</h1>
      <Link to="/signup">
        <button>Create account</button>
      </Link>
      <br></br>
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <br></br>
      <Link to="/resetpassword">
        <button>Reset password</button>
      </Link>
    </div>
  );
}
