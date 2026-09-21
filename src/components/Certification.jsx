import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";

import "./Certification.css";

function Certification() {
  return (
    <section className="certification-section" id="certifications">

      <div className="certification-heading">

        <p className="certification-label">
          QUALIFIED & CERTIFIED
        </p>

        <h2>
          OUR <span>CERTIFICATIONS</span>
        </h2>

        <p className="certification-intro">
          Professional knowledge and certified expertise
          to guide you towards a healthier and fitter lifestyle.
        </p>

      </div>


      <div className="certification-container">

        {/* CERTIFICATION 1 */}

        <div className="certification-card">

          <div className="certificate-image">

            <img
              src={c1}
              alt="B7 Fitness Nutrition Certification 1"
            />

            <div className="certificate-overlay">
              <span>VIEW CERTIFICATE</span>
            </div>

          </div>

          <div className="certificate-content">
            <h3>Professional Certification</h3>
            <p>
              Certified expertise in fitness and nutrition.
            </p>
          </div>

        </div>


        {/* CERTIFICATION 2 */}

        <div className="certification-card">

          <div className="certificate-image">

            <img
              src={c2}
              alt="B7 Fitness Nutrition Certification 2"
            />

            <div className="certificate-overlay">
              <span>VIEW CERTIFICATE</span>
            </div>

          </div>

          <div className="certificate-content">
            <h3>Personalised Training Certification</h3>
            <p>
              Professional knowledge in personalised training.
            </p>
          </div>

        </div>


        {/* CERTIFICATION 3 */}

        <div className="certification-card">

          <div className="certificate-image">

            <img
              src={c3}
              alt="B7 Fitness Nutrition Certification 3"
            />

            <div className="certificate-overlay">
              <span>VIEW CERTIFICATE</span>
            </div>

          </div>

          <div className="certificate-content">
            <h3>Effective Training Certification</h3>
            <p>
              Certified guidance for effective training.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Certification;