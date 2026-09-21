import { FaArrowRight } from "react-icons/fa";

import r1 from "../assets/r-1 (2).jpeg";
import r2 from "../assets/r-2.jpeg";
import r3 from "../assets/r-3.jpeg";

import "./Results.css";

function Results() {

  const results = [
    {
      image: r1,
      name: "Client Transformation",
      //type: "Weight Loss Journey",
      result: "Healthy Lifestyle"
    },
    {
      image: r2,
      name: "Client Transformation",
      //type: "Fitness Journey",
      result: "Improved Fitness"
    },
    {
      image: r3,
      name: "Client Transformation",
      //type: "Nutrition Journey",
      result: "Better Habits"
    }
  ];

  return (
    <section className="results-section" id="results">

      <div className="results-heading">

        <p className="results-label">
          CLIENT RESULTS
        </p>

        <h2>
          REAL PEOPLE.
          <br />
          <span>REAL PROGRESS.</span>
        </h2>

        <p>
          Every transformation starts with one decision.
          See how personalised fitness and nutrition guidance
          can help create lasting lifestyle changes.
        </p>

      </div>

      <div className="results-grid">

        {results.map((result, index) => (

          <div className="result-card" key={index}>

            <div className="result-image">

              <img
                src={result.image}
                alt={result.name}
              />

              <div className="result-tag">
                {result.type}
              </div>

            </div>

            <div className="result-content">

              <h3>
                {result.name}
              </h3>

              <p>
                {result.result}
              </p>

              <a href="#contact">
                Know More
                <FaArrowRight />
              </a>

            </div>

          </div>

        ))}

      </div>

      <div className="results-cta">

        <p>
          Ready to start your own transformation?
        </p>

        <a href="#contact">
          Start Your Journey →
        </a>

      </div>

    </section>
  );
}

export default Results;