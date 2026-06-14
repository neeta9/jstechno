function QHSESection() {
  const policies = [
    "Safety First Culture",
    "Environmental Responsibility",
    "Continuous Improvement",
    "Quality Assurance",
    "Regulatory Compliance",
    "Risk Management"
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Quality, Health, Safety & Environment
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
            SAC maintains a strong QHSE culture aligned
            with international industry standards.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {policies.map((policy, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                bg-white
                p-8
                rounded-2xl
                shadow-md
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
                text-center
              "
            >
              <h3 className="font-semibold text-lg text-slate-900">
                {policy}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default QHSESection;