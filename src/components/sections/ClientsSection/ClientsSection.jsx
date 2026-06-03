import "./ClientsSection.css";

function ClientsSection() {
  const clients = [
    { name: "ADNOC", logo: "ADNOC" },
    { name: "Aramco", logo: "Aramco" },
    { name: "ExxonMobil", logo: "ExxonMobil" },
    { name: "Saudi Energies", logo: "Saudi Energies" },
    { name: "Petronas", logo: "Petronas" },
    { name: "Schlumberger", logo: "Schlumberger" },
    { name: "Baker Hughes", logo: "Baker Hughes" },
    { name: "Halliburton", logo: "Halliburton" },
  ];

  return (
    <section className="clients-section">
      <div className="clients-container">
        <div className="section-header">
          <p className="section-label">OUR CLIENTS</p>
          <h2 className="section-title">Trusted by Industry Leaders</h2>
        </div>

        <div className="clients-grid">
          {clients.map((client, idx) => (
            <div key={idx} className="client-card">
              <div className="client-logo">{client.logo}</div>
              <p className="client-name">{client.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
