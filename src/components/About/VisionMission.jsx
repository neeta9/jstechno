function VisionMission() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Vision & Mission
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div
            data-aos="fade-right"
            className="bg-slate-900 text-white p-10 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-5">
              Our Vision
            </h3>

            <p className="text-slate-300 leading-relaxed">
              To become a globally recognized workforce and
              operational solutions provider known for
              safety, reliability and innovation.
            </p>
          </div>

          <div
            data-aos="fade-left"
            className="bg-red-600 text-white p-10 rounded-3xl"
          >
            <h3 className="text-3xl font-bold mb-5">
              Our Mission
            </h3>

            <p className="leading-relaxed">
              Deliver skilled manpower and operational
              excellence while maintaining the highest
              standards of safety, quality and customer
              satisfaction.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VisionMission;