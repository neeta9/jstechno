import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <MainLayout>
      <PageBanner title="Contact Us" />
      
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <div className="info-items">
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Office 125, Business Bay, Dubai, UAE</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+971 4 323 4567</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>info@southasiaconsultancy.com</p>
                </div>
              </div>
              <div className="info-item">
                <span className="icon">⏰</span>
                <div>
                  <h4>Working Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Send us a Message</h2>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </MainLayout>
  );
}

export default Contact;