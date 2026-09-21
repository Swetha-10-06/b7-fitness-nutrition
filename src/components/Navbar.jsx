import { FaWhatsapp } from "react-icons/fa";
import logo from "../assets/logo-2.jpeg";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <a href="#home" className="logo">
        <img
          src={logo}
          alt="B7 Fitness Nutrition"
        />
      </a>

      <div className="nav-links">

        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#education">Education</a>
        <a href="#programs">Programs</a>
        <a href="#results">Results</a>
        <a href="#contact">Contact</a>

      </div>

      <a
        href="https://wa.me/919942635560"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-btn"
      >
        <FaWhatsapp />
        WhatsApp Now
      </a>

    </nav>
  );
}

export default Navbar;