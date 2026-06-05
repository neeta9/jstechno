function Certifications() {
  const certifications = [
    {
      title: "ISO 9001",
      description: "Quality Management System",
    },
    {
      title: "ISO 14001",
      description: "Environmental Management",
    },
    {
      title: "ISO 45001",
      description: "Occupational Health & Safety",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Certifications
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Certified for Quality, Safety &
            Environmental Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-lg mb-6">
                {index + 1}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {item.title}
              </h3>

              <p className="text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;