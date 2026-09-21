import {
  FaUsers,
  FaUserCheck,
  FaArrowRight
} from "react-icons/fa";

import f1 from "../assets/f-1.jpeg";
import f2 from "../assets/f-2.jpeg";
import "./Programs.css";

function Programs() {
  return (
    <section className="programs-section" id="programs">

      <div className="programs-heading">

        <p>OUR PROGRAMS</p>

        <h2>
          FIND THE RIGHT
          <br />
          <span>WAY TO GET FIT</span>
        </h2>

        <div className="heading-line"></div>

        <p className="programs-description">
          Whether you enjoy training with others or prefer
          one-to-one attention, B7 has a coaching approach
          to support your goals.
        </p>

      </div>

      <div className="programs-grid">

        {/* GROUP FITNESS */}

        <div
          className="program-card group-program"
          style={{ backgroundImage: `url(${f1})` }}
        >

          <div className="program-overlay"></div>

          <div className="program-content">

            <div className="program-icon">
              <FaUsers />
            </div>

            <span className="program-number">
              01
            </span>

            <h3>
              GROUP
              <br />
              FITNESS
            </h3>

            <p>
              Train together, stay motivated and build
              consistency with a supportive fitness community.
            </p>

            <a href="#contact">
              Explore Program
              <FaArrowRight />
            </a>

          </div>

        </div>


        {/* PERSONAL COACHING */}

        <div
          className="program-card personal-program"
          style={{ backgroundImage: `url(${f2})` }}
        >

          <div className="program-overlay"></div>

          <div className="program-content">

            <div className="program-icon">
              <FaUserCheck />
            </div>

            <span className="program-number">
              02
            </span>

            <h3>
              PERSONAL
              <br />
              COACHING
            </h3>

            <p>
              Get one-to-one fitness and nutrition guidance
              designed around your personal goals.
            </p>

            <a href="#contact">
              Start Coaching
              <FaArrowRight />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Programs;