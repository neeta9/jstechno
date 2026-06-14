function CompanyOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div data-aos="fade-right">
          <img
            src="/images/about-company.jpg"
            alt=""
            className="rounded-3xl shadow-2xl"
          />
        </div>

        <div data-aos="fade-left">

          <span className="text-red-600 font-semibold uppercase tracking-[0.3em]">
            Company Overview
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Trusted Workforce Partner For Energy Operations
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            South Asia Consultancy (SAC) is an ISO 9001 certified
            workforce and operational solutions provider
            headquartered in Ahmedabad, India.
          </p>

          <p className="mt-4 text-slate-600 leading-relaxed">
            Established in 2014, SAC delivers manpower,
            drilling support, maintenance services and
            operational expertise across upstream,
            downstream and infrastructure sectors.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-4xl font-bold text-red-600">
                10+
              </h3>
              <p>Years Experience</p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl">
              <h3 className="text-4xl font-bold text-red-600">
                350+
              </h3>
              <p>Projects Supported</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default CompanyOverview;