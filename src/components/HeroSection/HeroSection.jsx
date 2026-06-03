import { useState } from "react";
import "./HeroSection.css";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      subtitle: "INTEGRATED OILFIELD SOLUTIONS",
      title: "Delivering Integrated Oilfield Services",
      highlight: "Across the Globe",
      description:
        "South Asia Consultancy provides innovative and reliable drilling, workover, O&M and manpower solutions with a commitment to safety, quality and excellence.",
      ctaButtons: [
        { text: "Our Services", link: "/services" },
        { text: "Contact Us", link: "/contact" },
      ],
    },
  ];

  const slide = slides[currentSlide];

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-image-overlay"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-subtitle">{slide.subtitle}</p>
          <h1 className="hero-title">
            {slide.title}
            <span className="highlight"> {slide.highlight}</span>
          </h1>
          <p className="hero-description">{slide.description}</p>

          <div className="hero-cta-buttons">
            {slide.ctaButtons.map((btn, idx) => (
              <a
                key={idx}
                href={btn.link}
                className={`cta-btn ${idx === 0 ? "primary" : "secondary"}`}
              >
                {btn.text}
              </a>
            ))}
          </div>

          <div className="hero-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(idx)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;