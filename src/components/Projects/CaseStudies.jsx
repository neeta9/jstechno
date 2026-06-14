function CaseStudies() {
  const studies = [
    {
      title: "Rig Crew Surge Mobilization",
      subtitle: "Offshore Campaign Support",
      problem:
        "An offshore campaign required immediate deployment of qualified rig personnel within a tight operational window.",
      strategy:
        "Activated SAC's pre-qualified offshore manpower pool and expedited compliance workflows.",
      mobilization:
        "Rapid crew deployment coordinated through dedicated mobilization corridors and field operations teams.",
      result:
        "Zero LTI incidents, on-time spud and uninterrupted operational performance.",
    },
    {
      title: "Workover Campaign Recovery",
      subtitle: "Specialist Workforce Shortage",
      problem:
        "A remote workover campaign faced specialist shortages causing increased NPT and schedule delays.",
      strategy:
        "Identified critical positions and launched targeted recruitment and workforce allocation plans.",
      mobilization:
        "Fast-tracked deployment of experienced specialists with complete documentation and logistics support.",
      result:
        "Reduced downtime, restored operational schedules and improved campaign efficiency.",
    },
  ];

  return (
    <section
      id="case-studies"
      className="py-24 bg-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Case Studies
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Proven Results In The Field
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Real examples demonstrating SAC's ability to solve
            workforce challenges, mobilize resources rapidly
            and maintain operational excellence.
          </p>
        </div>

        {/* Studies */}

        <div className="space-y-20">

          {studies.map((study, index) => (
            <div
              key={study.title}
              data-aos="fade-up"
              className="
              bg-white
              rounded-[36px]
              shadow-lg
              overflow-hidden
              "
            >
              <div className="grid lg:grid-cols-3">

                {/* Left Panel */}

                <div
                  className="
                  bg-slate-900
                  text-white
                  p-10
                  flex
                  flex-col
                  justify-center
                  "
                >
                  <span className="text-red-500 font-semibold uppercase tracking-wider">
                    {study.subtitle}
                  </span>

                  <h3 className="text-3xl font-bold mt-4">
                    {study.title}
                  </h3>

                  <div className="mt-8">

                    <div className="text-5xl font-bold text-red-500">
                      72h
                    </div>

                    <p className="text-slate-300 mt-2">
                      Rapid Mobilization Capability
                    </p>

                  </div>
                </div>

                {/* Timeline */}

                <div className="lg:col-span-2 p-10">

                  <div className="relative">

                    {/* Vertical Line */}

                    <div
                      className="
                      absolute
                      left-[15px]
                      top-5
                      bottom-5
                      w-[2px]
                      bg-red-200
                      "
                    ></div>

                    {/* Step 1 */}

                    <div className="relative pl-14 mb-10">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600"></div>

                      <h4 className="font-bold text-slate-900 text-xl">
                        Problem
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {study.problem}
                      </p>
                    </div>

                    {/* Step 2 */}

                    <div className="relative pl-14 mb-10">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600"></div>

                      <h4 className="font-bold text-slate-900 text-xl">
                        Strategy
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {study.strategy}
                      </p>
                    </div>

                    {/* Step 3 */}

                    <div className="relative pl-14 mb-10">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-red-600"></div>

                      <h4 className="font-bold text-slate-900 text-xl">
                        Mobilization
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {study.mobilization}
                      </p>
                    </div>

                    {/* Step 4 */}

                    <div className="relative pl-14">
                      <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-green-500"></div>

                      <h4 className="font-bold text-slate-900 text-xl">
                        Result
                      </h4>

                      <p className="mt-2 text-slate-600">
                        {study.result}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CaseStudies;