const services = [
  {
    title: "Technical Manpower Supply",
    desc: "Engineers, supervisors, HSE officers, geologists and production personnel."
  },
  {
    title: "Complete Crew Deployment",
    desc: "Offshore and onshore drilling crews for energy operations."
  },
  {
    title: "Refinery Shutdown Workforce",
    desc: "Specialists for turnarounds, shutdowns and maintenance projects."
  },
  {
    title: "EPC Project Staffing",
    desc: "Project engineers, commissioning teams and construction workforce."
  },
  {
    title: "Mobilization & Compliance",
    desc: "Visa processing, documentation, medicals and deployment support."
  }
];

function WorkforceServices() {
  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Workforce Solutions We Deliver
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl transition duration-500 relative overflow-hidden"
            >

              {/* animated line */}

              <div className="absolute top-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-500"></div>

              <div className="text-5xl font-black text-slate-100 mb-4">
                0{index + 1}
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkforceServices;