import "./AwardsSection.css";

function AwardsSection() {
  const awards = [
    {
      id: 1,
      icon: "🏆",
      title: "Best Performing Drilling Rig 2023",
      description: "Recognized for excellence in offshore drilling operations with outstanding safety record."
    },
    {
      id: 2,
      icon: "⭐",
      title: "Industry Excellence Award",
      description: "Honored for innovation and superior service delivery in oilfield operations."
    },
    {
      id: 3,
      icon: "🎖️",
      title: "Safety & Compliance Excellence",
      description: "Awarded for maintaining world-class safety standards and zero LTI achievements."
    },
    {
      id: 4,
      icon: "🌟",
      title: "Best Employer 2023",
      description: "Recognized for commitment to workforce development and employee satisfaction."
    },
  ];

  return (
    <section className="awards-section">
      <div className="container">
        <div className="section-header">
          <h2>Awards & Recognition</h2>
          <p>Recognized for excellence and innovation</p>
        </div>

        <div className="awards-grid">
          {awards.map((award) => (
            <div key={award.id} className="award-card">
              <div className="award-icon">{award.icon}</div>
              <h3>{award.title}</h3>
              <p>{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AwardsSection;
