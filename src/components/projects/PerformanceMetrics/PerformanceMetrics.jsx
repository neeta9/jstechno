import CountUp from "react-countup";

function PerformanceMetrics() {
  const metrics = [
    {
      value: 42,
      suffix: "+",
      title: "Active Rigs",
      description:
        "Drilling, workover and jack-up rigs currently operating under O&M.",
    },
    {
      value: 350,
      suffix: "+",
      title: "Projects Delivered",
      description:
        "Successfully executed workforce and operational assignments.",
    },
    {
      value: 15,
      suffix: "+",
      title: "Countries",
      description:
        "Operational footprint spanning Asia, GCC and Africa.",
    },
    {
      value: 0,
      suffix: "",
      title: "LTI Record",
      description:
        "Strong HSE culture with zero Lost Time Injury incidents.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Performance Metrics
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
            Performance Backed By Results
          </h2>

          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            Delivering measurable operational success through
            workforce excellence, safety leadership and technical expertise.
          </p>
        </div>

        {/* Metrics */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {metrics.map((metric, index) => (
            <div
              key={metric.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              group
              relative
              bg-slate-800
              border
              border-slate-700
              rounded-[32px]
              p-8
              overflow-hidden
              hover:border-red-500
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >
              {/* Background Glow */}

              <div
                className="
                absolute
                -right-10
                -top-10
                w-32
                h-32
                bg-red-500/10
                rounded-full
                blur-3xl
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
              ></div>

              {/* Number */}

              <h3 className="text-5xl font-bold text-red-500 relative z-10">
                <CountUp
                  end={metric.value}
                  duration={2.5}
                />
                {metric.suffix}
              </h3>

              {/* Title */}

              <h4 className="text-white text-xl font-semibold mt-5 relative z-10">
                {metric.title}
              </h4>

              {/* Line */}

              <div
                className="
                mt-5
                h-[2px]
                bg-slate-700
                relative
                overflow-hidden
                "
              >
                <div
                  className="
                  h-full
                  w-0
                  bg-red-500
                  group-hover:w-full
                  transition-all
                  duration-700
                  "
                ></div>
              </div>

              {/* Description */}

              <p className="mt-5 text-slate-400 relative z-10">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}

        <div
          data-aos="fade-up"
          className="
          mt-16
          grid
          md:grid-cols-3
          gap-6
          "
        >
          <div className="bg-slate-800 rounded-3xl p-6 text-center">
            <h4 className="text-red-500 text-3xl font-bold">
              72 Hrs
            </h4>

            <p className="text-slate-400 mt-2">
              Rapid Mobilization Capability
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-6 text-center">
            <h4 className="text-red-500 text-3xl font-bold">
              ONGC
            </h4>

            <p className="text-slate-400 mt-2">
              Award Recognized Operations
            </p>
          </div>

          <div className="bg-slate-800 rounded-3xl p-6 text-center">
            <h4 className="text-red-500 text-3xl font-bold">
              HSE
            </h4>

            <p className="text-slate-400 mt-2">
              Safety First Culture
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PerformanceMetrics;