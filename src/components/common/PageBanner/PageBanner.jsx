import "./PageBanner.css";

function PageBanner({ title }) {
  return (
    <section className="page-banner">
      <h1>{title}</h1>
    </section>
  );
}

export default PageBanner;