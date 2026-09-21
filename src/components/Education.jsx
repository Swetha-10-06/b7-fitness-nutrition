import {
  FaAppleAlt,
  FaDumbbell,
  FaHeartbeat,
  FaArrowRight
} from "react-icons/fa";

import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.png";


import "./Education.css";

function Education() {

  const topics = [
    {
      image: p1,
      icon: <FaAppleAlt />,
      category: "NUTRITION",
      title: "Build Better Eating Habits",
      description:
        "Learn simple and practical nutrition habits that can support a healthier lifestyle."
    },

    {
      image:p2,
      icon: <FaDumbbell />,
      category: "FITNESS",
      title: "Train With Purpose",
      description:
        "Understand the basics of effective exercise, consistency and proper training."
    },

    {
      image: p3,
      icon: <FaHeartbeat />,
      category: "HEALTH",
      title: "Create A Healthier Lifestyle",
      description:
        "Small daily habits can make a big difference. Learn how to build sustainable routines."
    }
  ];

  return (
    <section className="education-section" id="education">

      <div className="education-heading">

        <p className="education-label">
          LEARN • IMPROVE • TRANSFORM
        </p>

        <h2>
          FITNESS & NUTRITION
          <br />
          <span>EDUCATION</span>
        </h2>

        <p>
          Knowledge helps you make better choices.
          Explore useful fitness, nutrition and lifestyle
          information from B7.
        </p>

      </div>

      <div className="education-grid">

        {topics.map((topic, index) => (

          <article className="education-card" key={index}>

            <div className="education-image">

              <img
                src={topic.image}
                alt={topic.title}
              />

              <div className="education-icon">
                {topic.icon}
              </div>

            </div>

            <div className="education-content">

              <span className="education-category">
                {topic.category}
              </span>

              <h3>
                {topic.title}
              </h3>

              <p>
                {topic.description}
              </p>

              <a href="#contact">
                Read More
                <FaArrowRight />
              </a>

            </div>

          </article>

        ))}

      </div>

      <div className="education-bottom">

        <div>
          <span>WANT TO LEARN MORE?</span>

          <h3>
            Follow B7 for more fitness & nutrition tips.
          </h3>
        </div>

        <a href="#contact">
          Get In Touch →
        </a>

      </div>

    </section>
  );
}

export default Education;