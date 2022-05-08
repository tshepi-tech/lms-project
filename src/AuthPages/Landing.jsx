//NPM packages
import { Link } from "react-router-dom";

//Project files
import NavigationStatic from "../components/NavigationStatic";
import MainImage from "../assets/images/MainImage.png";

export default function Landing() {
  return (
    <div>
      <NavigationStatic />
      <div className="landing_content">
        <div className="landing_text">
          <h1>The learning platform for the Web3 curious</h1>
          <p>
            The future of the internet is here. This learning platform is the
            perfect place to gain the neccessary knowledge and skills to be part
            of the future.
          </p>
          <p>
            Do you have the curiosity to know more, to learn with other Web3
            beginners? Create your account and get started
          </p>
          <Link to="/signup">
            <button className="create_acc">Create account</button>
          </Link>
        </div>
        <img
          className="main_image"
          src={MainImage}
          alt="A woman sells her work for a cryptocurrency to a guy"
        />
      </div>
    </div>
  );
}
