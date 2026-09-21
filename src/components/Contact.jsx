import { useState } from "react";

import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

import axios from "axios";

import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // Handle input changes
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };


  // Handle form submission
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {

      const response = await axios.post(
        "http://localhost:5000/api/enquiries",
        formData
      );


      if (response.data.success) {

        setSuccessMessage(
          "Your enquiry has been sent successfully! We will contact you soon."
        );

        // Clear form
        setFormData({
          name: "",
          phone: "",
          email: "",
          goal: "",
          message: ""
        });

      }

    } catch (error) {

      console.log("Error sending enquiry:", error);

      setErrorMessage(
        "Unable to send enquiry. Please try again."
      );

    } finally {

      setLoading(false);

    }

  };


  return (

    <section className="contact-section" id="contact">


      {/* HEADING */}

      <div className="contact-heading">

        <p>GET IN TOUCH</p>

        <h2>
          START YOUR
          <br />
          <span>TRANSFORMATION</span>
        </h2>

        <p className="contact-intro">

          Have a fitness or nutrition goal?
          Talk to B7 and take the first step towards
          a healthier lifestyle.

        </p>

      </div>



      <div className="contact-container">


        {/* LEFT SIDE */}

        <div className="contact-info">


          {/* WHATSAPP */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaWhatsapp />
            </div>

            <div>

              <span>WHATSAPP</span>

              <h3>
                Chat With Us
              </h3>

              <a
                href="https://wa.me/919942635560"
                target="_blank"
                rel="noreferrer"
              >
                Send a WhatsApp Message
              </a>

            </div>

          </div>



          {/* PHONE */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaPhone />
            </div>

            <div>

              <span>PHONE</span>

              <h3>
                Call Us
              </h3>

              <a href="tel:+919942635560">
                +91 99426 35560
              </a>

            </div>

          </div>



          {/* EMAIL */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaEnvelope />
            </div>

            <div>

              <span>EMAIL</span>

              <h3>
                Email Us
              </h3>

              <a href="mailto:sboopathi25072001@gmail.com">
                sboopathi25072001@gmail.com
              </a>

            </div>

          </div>



          {/* LOCATION */}

          <div className="contact-card">

            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>

            <div>

              <span>LOCATION</span>

              <h3>
                Tiruppur
              </h3>

              <p>
                Tamil Nadu, India
              </p>

            </div>

          </div>


        </div>



        {/* RIGHT SIDE - FORM */}

        <div className="contact-form">


          <h3>
            Tell Us About Your Goal
          </h3>

          <p>
            Fill in your details and we'll get back to you.
          </p>



          <form onSubmit={handleSubmit}>


            {/* NAME + PHONE */}

            <div className="form-row">

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />


              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />

            </div>



            {/* EMAIL */}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />



            {/* GOAL */}

            <select
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
            >

              <option value="" disabled>
                Select Your Goal
              </option>

              <option value="Weight Loss">
                Weight Loss
              </option>

              <option value="Weight Gain">
                Weight Gain
              </option>

              <option value="Personalised Nutrition">
                Personalised Nutrition
              </option>

              <option value="Diet Plan">
                Diet Plan
              </option>

              <option value="Fitness Guidance">
                Fitness Guidance
              </option>

              <option value="Health Betterment">
                Health Betterment
              </option>

            </select>



            {/* MESSAGE */}

            <textarea
              name="message"
              rows="5"
              placeholder="Tell us about your fitness goal..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>



            {/* SUCCESS MESSAGE */}

            {successMessage && (

              <p className="success-message">
                ✅ {successMessage}
              </p>

            )}



            {/* ERROR MESSAGE */}

            {errorMessage && (

              <p className="error-message">
                ❌ {errorMessage}
              </p>

            )}



            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
            >

              {loading
                ? "Sending..."
                : "Send Enquiry →"
              }

            </button>


          </form>

        </div>


      </div>

    </section>

  );

}

export default Contact;