function CredibilityStats() {
  const stats = [
    {
      number: "42+",
      title: "Active Rigs",
    },
    {
      number: "4",
      title: "Mobilization Corridors",
    },
    {
      number: "15+",
      title: "Years Experience",
    },
    {
      number: "72 Hrs",
      title: "Rapid Mobilization",
    },
    {
      number: "350+",
      title: "Deployments",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Credibility
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Operator Credibility at a Glance
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-6">

          {stats.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                group
                relative
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-8
                text-center
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              {/* Top Red Line */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-0
                  h-1
                  bg-red-600
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              ></div>

              {/* Number */}
              <h3
                className="
                  text-4xl
                  font-black
                  text-slate-900
                  transition-colors
                  duration-300
                  group-hover:text-red-600
                "
              >
                {item.number}
              </h3>

              {/* Label */}
              <p
                className="
                  mt-3
                  text-slate-600
                  transition-colors
                  duration-300
                  group-hover:text-slate-800
                "
              >
                {item.title}
              </p>

              {/* Bottom Accent */}
              <div
                className="
                  mx-auto
                  mt-5
                  h-[2px]
                  w-0
                  bg-red-600
                  group-hover:w-12
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

export default CredibilityStats;