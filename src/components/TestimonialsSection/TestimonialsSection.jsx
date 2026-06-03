import "./TestimonialsSection.css";

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      quote: "South Asia Consultancy delivered exceptional drilling services that exceeded our expectations. Their expertise and professionalism are unmatched.",
      author: "Rajesh Kumar",
      position: "Operations Manager",
      company: "Gulf Energy Ltd",
      rating: 5
    },
    {
      id: 2,
      quote: "Reliable, efficient, and safety-focused. Working with South Asia Consultancy has significantly improved our operational efficiency.",
      author: "Ahmed Al Mazrouei",
      position: "Project Director",
      company: "Middle East Petroleum",
      rating: 5
    },
    {
      id: 3,
      quote: "The manpower supply and training programs provided by SAC have been instrumental in building a skilled and competent workforce.",
      author: "Priya Sharma",
      position: "HR Director",
      company: "Offshore Solutions Inc",
      rating: 5
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What our clients say about our services</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author-info">
                <h4>{testimonial.author}</h4>
                <p className="position">{testimonial.position}</p>
                <p className="company">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
