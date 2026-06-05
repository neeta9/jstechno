import drillingImg from "../../../assets/serviceImages/drilling.png";
import workoverImg from "../../../assets/serviceImages/workover.png";
import omImg from "../../../assets/serviceImages/om.png";

const services = [
  {
    id: "drilling",
    title: "Drilling Services",
    image: drillingImg,
    points: [
      "Offshore & Onshore Support",
      "Integrated Rig Services",
      "Specialist Crews",
    ],
    description:
      "Comprehensive drilling support solutions including experienced manpower, technical specialists and operational services.",
  },

  {
    id: "workover",
    title: "Workover & Completion",
    image: workoverImg,
    points: [
      "Well Intervention",
      "Completion Spreads",
      "Workover Rigs",
    ],
    description:
      "Well intervention and completion solutions focused on production optimization and operational efficiency.",
  },

  {
    id: "om",
    title: "Operation & Maintenance",
    image: omImg,
    points: [
      "Rig Maintenance",
      "Rotating Equipment",
      "Production Support",
    ],
    description:
      "Maintenance programs and operational support ensuring maximum uptime and reliability.",
  },
];

function CoreServicesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {services.map((service, index) => (
          <div
            id={service.id}
            key={service.title}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-24 ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              data-aos={
                index % 2 === 0
                  ? "fade-right"
                  : "fade-left"
              }
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-3xl shadow-xl w-full"
              />
            </div>

            <div
              data-aos={
                index % 2 === 0
                  ? "fade-left"
                  : "fade-right"
              }
            >
              <span className="text-red-600 font-semibold uppercase tracking-wider">
                Core Service
              </span>

              <h2 className="text-4xl font-bold text-slate-900 mt-4">
                {service.title}
              </h2>

              <p className="text-slate-600 mt-6">
                {service.description}
              </p>

              <ul className="mt-8 space-y-4">
                {service.points.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default CoreServicesSection;