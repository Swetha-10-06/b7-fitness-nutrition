import {
  FaArrowRight,
  FaWeight,
  FaDumbbell,
  FaAppleAlt,
  FaHeartbeat,
  FaLeaf,
  FaUtensils
} from "react-icons/fa";

import s1 from "../assets/s-1.png";
import s2 from "../assets/s-2.png";
import s3 from "../assets/s-3.png";
import s4 from "../assets/s-4.png";
import s5 from "../assets/s-5.png";
import s6 from "../assets/s-6.png";

import "./Services.css";

const services = [
  {
    number: "01",
    title: "Weight Loss",
    description:
      "Healthy and sustainable fat-loss guidance designed around your lifestyle and goals.",
    image: s1,
    icon: <FaWeight />
  },
  {
    number: "02",
    title: "Weight Gain",
    description:
      "Build healthy body mass with the right nutrition, training and consistent habits.",
    image: s2,
    icon: <FaDumbbell />
  },
  {
    number: "03",
    title: "Personalised Nutrition",
    description:
      "Nutrition plans created around your body, routine, food preferences and goals.",
    image: s3,
    icon: <FaAppleAlt />
  },
  {
    number: "04",
    title: "Diet Plan",
    description:
      "Simple and practical meal guidance that fits naturally into your everyday life.",
    image: s4,
    icon: <FaUtensils />
  },
  {
    number: "05",
    title: "Fitness Guidance",
    description:
      "Structured workouts and expert guidance to help you become stronger and fitter.",
    image: s5,
    icon: <FaDumbbell />
  },
  {
    number: "06",
    title: "Health Betterment",
    description:
      "Build better habits for long-term wellness, energy and quality of life.",
    image: s6,
    icon: <FaHeartbeat />
  }
];

function Services() {
  return (
    <section className="services-section" id="services">

      {/* HEADER */}

      <div className="services-header">

        <div>

          <p className="section-label">
            WHAT WE DO
          </p>

          <h2>
            SERVICES THAT
            <br />
            <span>MOVE YOU FORWARD.</span>
          </h2>

        </div>

        <p className="services-intro">
          Your body and lifestyle are unique.
          Your approach should be too. Choose
          the guidance that matches your goals.
        </p>

      </div>


      {/* SERVICES GRID */}

      <div className="services-grid">

        {services.map((service) => (

          <article
            className="service-card"
            key={service.number}
          >

            <img
              src={service.image}
              alt={service.title}
            />

            <div className="service-overlay"></div>


            {/* NUMBER */}

            <span className="service-number">
              {service.number}
            </span>


            {/* ICON */}

            <div className="service-icon">
              {service.icon}
            </div>


            {/* CONTENT */}

            <div className="service-content">

              <h3>
                {service.title}
              </h3>

              <p>
                {service.description}
              </p>

              <a href="#contact">

                Explore Service

                <FaArrowRight />

              </a>

            </div>

          </article>

        ))}

      </div>


      {/* BOTTOM CTA */}

      <div className="services-bottom">

        <div>

          <span>
            NOT SURE WHERE TO START?
          </span>

          <strong>
            Let's find the right path for you.
          </strong>

        </div>

        <a href="#contact">
          Talk to B7
          <FaArrowRight />
        </a>

      </div>

    </section>
  );
}

export default Services;