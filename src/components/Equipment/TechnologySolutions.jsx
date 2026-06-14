function TechnologySolutions() {
  const solutions = [
    {
      title: "Predictive Maintenance",
      result: "Reduced downtime and improved equipment availability.",
    },
    {
      title: "Digital KPI Dashboards",
      result: "Real-time monitoring and performance tracking.",
    },
    {
      title: "Vendor Managed Spares",
      result: "Faster equipment support and critical inventory control.",
    },
    {
      title: "Reliability Programs",
      result: "Long-term operational efficiency and lifecycle management.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Technology Solutions
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
            Technology Driven Operations
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {solutions.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              bg-slate-800
              rounded-[30px]
              p-8
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >
              <span className="text-red-500 font-semibold">
                Technology
              </span>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-5 text-slate-300">
                {item.result}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechnologySolutions;