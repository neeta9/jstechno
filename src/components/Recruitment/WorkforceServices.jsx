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

        {/* Section Header */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Services
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Workforce Solutions We Deliver
          </h2>
        </div>

        {/* Service Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-500
                relative
                overflow-hidden
              "
            >
              {/* Animated Top Line */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  h-1
                  bg-red-600
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              ></div>

              {/* Number */}

              <div
                className="
                  text-5xl
                  font-black
                  text-slate-100
                  mb-4
                  transition-all
                  duration-300
                  group-hover:text-red-100
                  group-hover:scale-110
                "
              >
                0{index + 1}
              </div>

              {/* Title */}

              <h3
                className="
                  text-2xl
                  font-bold
                  text-slate-900
                  mb-4
                  transition-colors
                  duration-300
                  group-hover:text-red-600
                "
              >
                {service.title}
              </h3>

              {/* Description */}

              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom Accent */}

              <div
                className="
                  mt-6
                  h-[2px]
                  bg-red-600
                  w-0
                  group-hover:w-16
                  transition-all
                  duration-500
                "
              ></div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default WorkforceServices;