export default function AboutSAC() {
  const highlights = [
    "Operator-driven recruitment expertise",
    "Real offshore & drilling project experience",
    "Strong HSE and compliance understanding",
    "Global workforce mobilization network",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div
            className="relative"
            data-aos="fade-right"
          >

            <div className="rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da"
                alt="Offshore Operations"
                className="
                  w-full
                  h-[500px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-8
                -right-8
                bg-red-600
                text-white
                p-6
                rounded-2xl
                shadow-xl
              "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-4xl font-bold">
                72h
              </h3>

              <p className="text-sm mt-1">
                Rapid Mobilization Support
              </p>
            </div>

          </div>

          {/* Right Side */}
          <div data-aos="fade-left">

            <span
              className="
                inline-block
                bg-red-100
                text-red-600
                px-4
                py-2
                rounded-full
                text-sm
                font-semibold
                tracking-wide
              "
            >
              WHO WE ARE
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              About SAC Recruitment
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Unlike conventional recruitment agencies, SAC is built on
              hands-on operational experience as an Oil Block Operator &
              Drilling Contractor (Onshore & Offshore).
            </p>

            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We understand not only the roles, but the real field
              conditions, HSE requirements, and operational pressures of
              oil & gas projects. This enables us to provide:
            </p>

            <div className="mt-10 space-y-4">

              {highlights.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
                    flex
                    items-center
                    gap-4
                    group
                  "
                >
                  <div
                    className="
                      w-3
                      h-3
                      rounded-full
                      bg-red-600
                      transition-all
                      duration-300
                      group-hover:scale-125
                    "
                  />

                  <p
                    className="
                      text-slate-700
                      font-medium
                      transition-all
                      duration-300
                      group-hover:text-red-600
                    "
                  >
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}