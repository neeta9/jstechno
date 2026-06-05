function IndustryCoverage() {
  const industries = [
    {
      title: "Oil & Gas Exploration",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1600",
      description:
        "Supporting exploration, drilling and production operations with skilled workforce solutions.",
    },
    {
      title: "Offshore Operations",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1600",
      description:
        "Experienced manpower and operational support for offshore campaigns and jack-up rigs.",
    },
    {
      title: "Petrochemical Facilities",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1600",
      description:
        "Technical workforce support for refineries, petrochemical plants and processing facilities.",
    },
    {
      title: "Energy Infrastructure",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600",
      description:
        "Supporting infrastructure projects, maintenance campaigns and industrial operations.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[0.3em] text-[#0BB39C] text-sm font-semibold">
            Industry Coverage
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Industries We Support
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Delivering workforce and operational solutions across
            diverse energy and industrial sectors.
          </p>
        </div>

        {/* Industry Grid */}

        <div className="grid lg:grid-cols-2 gap-8">

          {industries.map((industry, index) => (
            <div
              key={industry.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              h-[420px]
              shadow-xl
              "
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition-all
                duration-700
                "
              />

              {/* Overlay */}

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-slate-950
                via-slate-900/50
                to-transparent
                "
              />

              {/* Content */}

              <div
                className="
                absolute
                bottom-0
                left-0
                right-0
                p-8
                "
              >
                <span
                  className="
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-[#0BB39C]
                  text-white
                  text-sm
                  font-semibold
                  "
                >
                  Industry Sector
                </span>

                <h3 className="mt-5 text-3xl font-bold text-white">
                  {industry.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-relaxed">
                  {industry.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustryCoverage;