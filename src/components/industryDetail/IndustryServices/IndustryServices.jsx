function IndustryServices() {
  const services = [
    "Offshore Crews",
    "Shutdown Workforce",
    "Refinery Specialists",
    "Drilling Crews",
    "Workover Operations",
    "Rig Maintenance",
    "EPC Staffing",
    "HSE Personnel",
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Services
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Services Delivered To This Industry
          </h2>

        </div>

        <div className="flex flex-wrap justify-center gap-5">

          {services.map((service, index) => (
            <div
              key={service}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="
              px-8
              py-5
              rounded-full
              bg-slate-100
              hover:bg-red-600
              hover:text-white
              hover:-translate-y-1
              transition-all
              duration-300
              font-semibold
              cursor-pointer
              "
            >
              {service}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustryServices;