import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowUp
} from "react-icons/fa";

import logo from "../assets/logo-2.jpeg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* BRAND */}

        <div className="footer-brand">

          <img
            src={logo}
            alt="B7 Fitness Nutrition"
          />

          <p>
            Helping you build a healthier, stronger and
            more confident lifestyle through personalised
            fitness and nutrition guidance.
          </p>

          <div className="footer-socials">

            {/* WHATSAPP */}

            <a
              href="https://wa.me/919942635560"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>


            {/* INSTAGRAM */}

            <a
              href="#"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            {/* EMAIL */}

            <a
              href="mailto:sboopathi25072001@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>
            QUICK LINKS
          </h3>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#education">
            Education
          </a>

          <a href="#programs">
            Programs
          </a>

          <a href="#results">
            Results
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* SERVICES */}

        <div className="footer-column">

          <h3>
            SERVICES
          </h3>

          <a href="#services">
            Weight Loss
          </a>

          <a href="#services">
            Weight Gain
          </a>

          <a href="#services">
            Personalised Nutrition
          </a>

          <a href="#services">
            Diet Plan
          </a>

          <a href="#services">
            Fitness Guidance
          </a>

          <a href="#services">
            Health Betterment
          </a>

        </div>


        {/* CONTACT */}

        <div className="footer-column footer-contact">

          <h3>
            CONTACT
          </h3>


          {/* LOCATION */}

          <p>
            <FaMapMarkerAlt />

            <span>
              Tiruppur, Tamil Nadu
            </span>
          </p>


          {/* PHONE */}

          <a href="tel:+919942635560">

            <FaPhone />

            <span>
              +91 99426 35560
            </span>

          </a>


          {/* EMAIL */}

          <a href="mailto:sboopathi25072001@gmail.com">

            <FaEnvelope />

            <span>
              sboopathi25072001@gmail.com
            </span>

          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/919942635560"
            target="_blank"
            rel="noreferrer"
          >

            <FaWhatsapp />

            <span>
              WhatsApp Us
            </span>

          </a>

        </div>

      </div>


      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} B7 Fitness Nutrosion.
          All rights reserved.
        </p>


        {/* BACK TO TOP */}

        <a
          href="#home"
          className="back-top"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </a>

      </div>

    </footer>
  );
}

export default Footer;