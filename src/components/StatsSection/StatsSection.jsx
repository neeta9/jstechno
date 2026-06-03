import "./StatsSection.css";

function StatsSection() {
  const stats = [
    { number: "20+", label: "Years of Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "2000+", label: "Skilled Professionals" },
    { number: "15+", label: "Countries Served" },
    { number: "100%", label: "Commitment to Safety" },
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon">
              {idx === 0 && "👥"}
              {idx === 1 && "📊"}
              {idx === 2 && "🏢"}
              {idx === 3 && "🌍"}
              {idx === 4 && "✓"}
            </div>
            <div className="stat-number">{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;
