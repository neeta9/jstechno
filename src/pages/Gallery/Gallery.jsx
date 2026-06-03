import MainLayout from "../../components/layout/MainLayout/MainLayout";
import PageBanner from "../../components/common/PageBanner/PageBanner";
import "./Gallery.css";

function Gallery() {
  const images = [
    { title: "Offshore Platform" },
    { title: "Drilling Operations" },
    { title: "Team at Work" },
    { title: "Equipment Fleet" },
    { title: "Safety Training" },
    { title: "Project Site" },
    { title: "Control Room" },
    { title: "Vessel Operations" },
  ];

  return (
    <MainLayout>
      <PageBanner title="Gallery" />
      
      <section className="gallery-section">
        <div className="container">
          <p className="intro-text">
            Explore our operations, projects, and team through our photo gallery.
          </p>

          <div className="gallery-grid">
            {images.map((image, idx) => (
              <div key={idx} className="gallery-item">
                <div className="gallery-image">
                  <div className="image-placeholder">📸</div>
                  <div className="overlay">
                    <p>{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default Gallery;
