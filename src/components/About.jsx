import {
  FaCheckCircle,
  FaDumbbell,
  FaAppleAlt,
  FaHeartbeat
} from "react-icons/fa";

import coachImage from "../assets/coach.jpeg";

import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">

      {/* LEFT SIDE */}

      <div className="about-image">

        <img
          src={coachImage}
          alt="B7 Fitness and Nutrition Coach"
        />

        <div className="experience-badge">
          <strong>B7</strong>
          <span>Fitness & Nutrition</span>
        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="about-content">

        <p className="about-label">
          ABOUT B7 FITNESS NUTRITION
        </p>

        <h2>
          MEET YOUR
          <br />
          <span>COACH</span>
        </h2>

        <h3>
          Boopathi Senthilkumar
        </h3>

        <p className="coach-role">
          Fitness & Nutrition Coach
        </p>

        <p className="about-description">
          B7 Fitness Nutrition is focused on helping individuals
          build healthier lifestyles through personalised nutrition,
          fitness guidance and consistent support.
        </p>

        <p className="about-description">
          Every person's body, lifestyle and goal is different.
          That's why our approach focuses on practical plans,
          sustainable habits and guidance that fits your daily life.
        </p>


        {/* FEATURES */}

        <div className="about-features">

          <div>
            <FaCheckCircle />
            <span>Personalised Guidance</span>
          </div>

          <div>
            <FaAppleAlt />
            <span>Nutrition Support</span>
          </div>

          <div>
            <FaDumbbell />
            <span>Fitness Coaching</span>
          </div>

          <div>
            <FaHeartbeat />
            <span>Healthy Lifestyle</span>
          </div>

        </div>


        <a href="#contact" className="about-btn">
          Start Your Journey →
        </a>

      </div>

    </section>
  );
}

export default About;