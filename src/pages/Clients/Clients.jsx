import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Clients.css";

function Clients() {
  const clients = [
    { name: "ADNOC", sector: "Upstream" },
    { name: "Saudi Aramco", sector: "Integrated" },
    { name: "ExxonMobil", sector: "Upstream" },
    { name: "Qatar Petroleum", sector: "Integrated" },
    { name: "Petronas", sector: "Integrated" },
    { name: "Schlumberger", sector: "Service" },
    { name: "Baker Hughes", sector: "Service" },
    { name: "Halliburton", sector: "Service" },
  ];

  return (
    <MainLayout>
      <PageBanner title="Our Clients" />
      
      <section className="clients-section">
        <div className="container">
          <p className="intro-text">
            We are proud to serve some of the world's leading oil & gas companies and oilfield service providers.
          </p>

          <div className="clients-grid">
            {clients.map((client, idx) => (
              <div key={idx} className="client-item">
                <div className="client-logo-box">{client.name}</div>
                <p className="client-sector">{client.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Clients;
