import {
  FaArrowRight,
  FaPlay,
  FaDumbbell,
  FaAppleAlt,
  FaHeartbeat
} from "react-icons/fa";

import logo from "../assets/logo-2.jpeg";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* =========================
          BACKGROUND
      ========================== */}
      <div className="hero-background"></div>

      {/* DARK OVERLAY */}
      <div className="hero-overlay"></div>


      {/* =========================
          LARGE HERO LOGO
          TOP LEFT CORNER
      ========================== */}
      <div className="hero-logo">
        <img
          src={logo}
          alt="B7 Fitness Nutrition"
        />
      </div>


      {/* =========================
          HERO CONTAINER
      ========================== */}
      <div className="hero-container">

        {/* =========================
            MAIN HERO CONTENT
        ========================== */}
        <div className="hero-content">

          {/* EYEBROW */}
          <p className="hero-eyebrow">
            FITNESS
            <span>•</span>
            NUTRITION
            <span>•</span>
            LIFESTYLE
          </p>


          {/* MAIN HEADING */}
          <h1>
            DISCIPLINE
            <br />

            <span>TODAY.</span>

            <br />

            <strong>A BETTER YOU</strong>

            <br />

            <span>TOMORROW.</span>
          </h1>


          {/* DESCRIPTION */}
          <p className="hero-description">
            Personalised nutrition, effective training and real guidance
            to help you build a healthier, stronger and more confident
            lifestyle.
          </p>


          {/* =========================
              BUTTONS
          ========================== */}
          <div className="hero-buttons">

            <a
              href="#contact"
              className="hero-primary-btn"
            >
              Start Your Journey
              <FaArrowRight />
            </a>


            <a
              href="#programs"
              className="hero-secondary-btn"
            >
              <FaPlay />
              Explore Programs
            </a>

          </div>


          {/* =========================
              FEATURES
          ========================== */}
          <div className="hero-features">

            {/* TRAIN */}
            <div className="hero-feature">

              <div className="feature-icon">
                <FaDumbbell />
              </div>

              <div>
                <strong>
                  Train Smarter
                </strong>

                <span>
                  Effective workouts
                </span>
              </div>

            </div>


            {/* NUTRITION */}
            <div className="hero-feature">

              <div className="feature-icon">
                <FaAppleAlt />
              </div>

              <div>
                <strong>
                  Eat Better
                </strong>

                <span>
                  Personalised nutrition
                </span>
              </div>

            </div>


            {/* HEALTH */}
            <div className="hero-feature">

              <div className="feature-icon">
                <FaHeartbeat />
              </div>

              <div>
                <strong>
                  Live Healthier
                </strong>

                <span>
                  Sustainable lifestyle
                </span>
              </div>

            </div>

          </div>

        </div>


        {/* =========================
            RIGHT SIDE QUOTE
        ========================== */}
        <div className="hero-quote">

          <span className="quote-line"></span>

          <p>
            "Your body can do it.
            <br />
            It's your mind
            <br />
            you need to convince."
          </p>

          <small>
            — B7 FITNESS NUTRITION
          </small>

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================== */}
      <div className="hero-scroll">

        <span></span>

        Scroll to explore

      </div>

    </section>
  );
}

export default Hero;