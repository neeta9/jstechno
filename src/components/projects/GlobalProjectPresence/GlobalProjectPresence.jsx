function GlobalProjectPresence() {
  const regions = [
    {
      name: "India",
      projects: "Drilling, Workover & E&P Operations",
    },
    {
      name: "Persian Gulf",
      projects: "Jack-Up Rig Operations",
    },
    {
      name: "Kazakhstan",
      projects: "Offshore Campaign Support",
    },
    {
      name: "Nigeria",
      projects: "Operational Workforce Solutions",
    },
    {
      name: "Oman",
      projects: "Offshore Energy Projects",
    },
    {
      name: "Kuwait",
      projects: "Technical Manpower Deployment",
    },
    {
      name: "Bahrain",
      projects: "Onshore Drilling Operations",
    },
  ];

  return (
    <section
      id="global-presence"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Global Project Presence
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Supporting Energy Projects Across International Markets
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            From India and the GCC to Africa and Central Asia,
            SAC has supported drilling, offshore and workforce
            operations across diverse energy environments.
          </p>
        </div>

        {/* Main Layout */}

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div data-aos="fade-right">

            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1600"
              alt="Global Operations"
              className="
              rounded-[36px]
              shadow-xl
              w-full
              h-[500px]
              object-cover
              "
            />

            {/* Floating Stats */}

            <div
              className="
              grid
              grid-cols-2
              gap-4
              mt-6
              "
            >
              <div className="bg-slate-50 rounded-3xl p-6 text-center">
                <h3 className="text-4xl font-bold text-red-600">
                  15+
                </h3>

                <p className="text-slate-600 mt-2">
                  Countries Served
                </p>
              </div>

              <div className="bg-slate-50 rounded-3xl p-6 text-center">
                <h3 className="text-4xl font-bold text-red-600">
                  350+
                </h3>

                <p className="text-slate-600 mt-2">
                  Projects Completed
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}

          <div className="space-y-5">

            {regions.map((region, index) => (
              <div
                key={region.name}
                data-aos="fade-left"
                data-aos-delay={index * 100}
                className="
                group
                border
                border-slate-200
                rounded-3xl
                p-6
                hover:border-red-500
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >
                <div className="flex justify-between items-center">

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {region.name}
                    </h3>

                    <p className="mt-2 text-slate-600">
                      {region.projects}
                    </p>
                  </div>

                  <div
                    className="
                    w-4
                    h-4
                    rounded-full
                    bg-red-500
                    animate-pulse
                    "
                  ></div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Bottom Banner */}

        <div
          data-aos="fade-up"
          className="
          mt-16
          bg-slate-900
          rounded-[36px]
          p-10
          text-center
          "
        >
          <h3 className="text-3xl font-bold text-white">
            Proven International Energy Experience
          </h3>

          <p className="mt-4 text-slate-300 max-w-3xl mx-auto">
            SAC has supported offshore, onshore, drilling,
            workover and workforce deployment projects across
            multiple energy-producing regions worldwide.
          </p>

          <div className="flex justify-center mt-8">
            <button
              className="
              px-8
              py-4
              rounded-full
              bg-red-600
              text-white
              font-semibold
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
              "
            >
              Explore Global Projects
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default GlobalProjectPresence;