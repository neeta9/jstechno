import "./PageBanner.css";

function PageBanner({ title, subtitle }) {
  return (
    <section className="page-banner">
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}

export default PageBanner;