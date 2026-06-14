function OperationalCapabilities() {
  const steps = [
    "Equipment Planning",
    "Mobilization",
    "Deployment",
    "Maintenance",
    "Performance Monitoring",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Operational Workflow
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            End-To-End Equipment Support
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6">

          {steps.map((step, index) => (
            <div
              key={step}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-red-600 text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>

              <h3 className="mt-5 font-bold text-slate-900">
                {step}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OperationalCapabilities;