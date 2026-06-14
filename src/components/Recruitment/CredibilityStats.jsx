function CredibilityStats() {
  const stats = [
    {
      number: "42+",
      title: "Active Rigs",
    },
    {
      number: "4",
      title: "Mobilization Corridors",
    },
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "72 Hrs",
      title: "Rapid Mobilization",
    },
    {
      number: "350+",
      title: "Deployments",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Credibility
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Operator Credibility at a Glance
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-slate-200 p-8 text-center hover:-translate-y-2 hover:shadow-xl transition duration-300"
            >
              <div className="absolute top-0 left-0 w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-500"></div>

              <h3 className="text-4xl font-black text-slate-900">
                {item.number}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CredibilityStats;