import {
  Wrench,
  Drill,
  HardHat,
  Cog,
  Users,
} from "lucide-react";

function ServicesPreview() {

  const services = [
    {
      title: "Drilling",
      icon: Drill,
    },
    {
      title: "Workover",
      icon: Wrench,
    },
    {
      title: "O&M",
      icon: Cog,
    },
    {
      title: "Equipment",
      icon: HardHat,
    },
    {
      title: "Manpower",
      icon: Users,
    },
  ];

  return (
    <section className="py-28 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-red-600 font-semibold">
            Our Services
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Comprehensive Oilfield Solutions
          </h2>

        </div>

        <div className="grid lg:grid-cols-5 gap-6 mt-16">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:-translate-y-4
                hover:shadow-2xl
                transition-all
                duration-500
                "
              >
                <Icon
                  size={42}
                  className="text-red-600"
                />

                <h3 className="text-xl font-bold mt-6">
                  {service.title}
                </h3>

                <p className="text-slate-500 mt-3">
                  Explore SAC capabilities.
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default ServicesPreview;