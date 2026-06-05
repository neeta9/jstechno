function ServicesOverview() {
  return (
    <section
      id="services-overview"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div
          data-aos="fade-up"
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-slate-900">
            Comprehensive Oilfield Solutions
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-5"></div>

          <p className="mt-8 text-lg text-slate-600 leading-relaxed">
            South Asia Consultancy Services Pvt. Ltd. (SACPL)
            provides integrated oilfield services,
            technical manpower and specialized equipment
            supporting exploration, production and
            maintenance operations worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-16">

          {[
            ["350+", "Projects"],
            ["42+", "Active Rigs"],
            ["15+", "Countries"],
            ["24/7", "Support"],
          ].map(([number, label], index) => (
            <div
              key={label}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="bg-white rounded-3xl border p-8 text-center shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-4xl font-bold text-red-600">
                {number}
              </h3>

              <p className="mt-3 text-slate-600">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ServicesOverview;