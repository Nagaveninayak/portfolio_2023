import { Link } from "react-router-dom";
import "./index.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import About from "../About";

const Navbar = () => {
  return (
    <div className="sidenav">
      <Link to="/">
        <i className="bi bi-houses-fill myDIV"></i>
        <span className="hide">Home</span>
      </Link>
      {/* <div class="myDIV">
        <i class="bi bi-houses-fill"></i>
        <p class="hide">About</p>
        <Link to="/about">About</Link>
      </div> */}
      <Link to="/about">
        <i className="bi bi-houses-fill myDIV"></i>
        <span className="hide">About</span>
      </Link>
      {/* <a href="#">Skills</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a> */}
    </div>
  );
};

export default Navbar;
