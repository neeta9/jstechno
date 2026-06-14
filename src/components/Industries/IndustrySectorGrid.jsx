import { useNavigate } from "react-router-dom";

function IndustrySectorGrid() {

  const navigate = useNavigate();

  const sectors = [
    {
      title: "Oil & Gas Exploration",
      description:
        "Exploration support, drilling operations and technical manpower.",
      link: "/services"
    },
    {
      title: "Offshore Platforms",
      description:
        "Marine operations, offshore maintenance and platform staffing.",
      link: "/services"
    },
    {
      title: "Onshore Fields",
      description:
        "Field development, workover support and production operations.",
      link: "/services"
    },
    {
      title: "Energy Infrastructure",
      description:
        "Power generation, transmission and industrial facilities.",
      link: "/services"
    },
    {
      title: "Petrochemical Industry",
      description:
        "Refineries, shutdown projects and process industries.",
      link: "/contact"
    }
  ];

  return (
    <section className="pb-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {sectors.map((sector, index) => (

            <div
              key={index}
              onClick={() => navigate(sector.link)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                cursor-pointer
                bg-white
                p-8
                rounded-3xl
                border
                shadow-md
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {sector.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {sector.description}
              </p>

              <span
                className="
                  inline-flex
                  mt-6
                  text-red-600
                  font-semibold
                  group-hover:translate-x-2
                  transition-all
                "
              >
                Explore →
              </span>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustrySectorGrid;