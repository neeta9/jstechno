import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Equipment.css";

function Equipment() {
  const equipmentList = [
    { name: "Drilling Rigs", count: "15+" },
    { name: "Workover Units", count: "12+" },
    { name: "Support Vessels", count: "8+" },
    { name: "Cranes & Lifting", count: "25+" },
    { name: "Accommodation Units", count: "10+" },
    { name: "Safety Equipment", count: "100%" },
  ];

  return (
    <MainLayout>
      <PageBanner title="Equipment & Resources" />
      
      <section className="equipment-section">
        <div className="container">
          <p className="intro-text">
            We maintain a comprehensive fleet of modern, well-maintained equipment and resources to support our operations worldwide.
          </p>

          <div className="equipment-grid">
            {equipmentList.map((item, idx) => (
              <div key={idx} className="equipment-card">
                <div className="equipment-count">{item.count}</div>
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Equipment;
