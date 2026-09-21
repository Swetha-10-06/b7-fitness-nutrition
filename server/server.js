const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Test email connection
transporter.verify((error, success) => {
  if (error) {
    console.log("❌ Email connection failed:");
    console.log(error.message);
  } else {
    console.log("✅ Email service is ready");
  }
});

// Enquiry API
app.post("/api/enquiries", async (req, res) => {
  try {
    const { name, phone, email, goal, message } = req.body;

    // Check required fields
    if (!name || !phone || !email || !goal || !message) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the fields.",
      });
    }

    // Email sent to owner
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.OWNER_EMAIL,
      replyTo: email,
      subject: `New Fitness Enquiry - ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          
          <h2 style="color: #68b43c;">
            🏋️ New B7 Fitness Nutrition Enquiry
          </h2>

          <hr />

          <h3>Customer Details</h3>

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Phone:</strong> ${phone}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Fitness Goal:</strong> ${goal}
          </p>

          <h3>Message</h3>

          <p>
            ${message}
          </p>

          <hr />

          <p style="color: #777;">
            This enquiry was submitted from the B7 Fitness Nutrition website.
          </p>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    console.log(`✅ Enquiry received from ${name}`);

    res.status(200).json({
      success: true,
      message: "Enquiry sent successfully!",
    });

  } catch (error) {
    console.log("❌ Error sending email:");
    console.log(error.message);

    res.status(500).json({
      success: false,
      message: "Failed to send enquiry.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});