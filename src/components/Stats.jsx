import {
  FaUsers,
  FaDumbbell,
  FaAppleAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

import "./Stats.css";

function Stats() {
  return (
    <section className="stats-section">

      <div className="stat-item">
        <FaUsers className="stat-icon" />
        <div>
          <h3>Personalised</h3>
          <p>Guidance</p>
        </div>
      </div>

      <div className="stat-item">
        <FaDumbbell className="stat-icon" />
        <div>
          <h3>Fitness</h3>
          <p>Training</p>
        </div>
      </div>

      <div className="stat-item">
        <FaAppleAlt className="stat-icon" />
        <div>
          <h3>Nutrition</h3>
          <p>Plans</p>
        </div>
      </div>

      <div className="stat-item">
        <FaMapMarkerAlt className="stat-icon" />
        <div>
          <h3>Tiruppur</h3>
          <p>Based Coaching</p>
        </div>
      </div>

    </section>
  );
}

export default Stats;