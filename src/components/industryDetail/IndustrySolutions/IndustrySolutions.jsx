function IndustrySolutions() {
  const solutions = [
    {
      challenge: "Workforce Shortages",
      solution: "Pre-qualified manpower pools across India, GCC and Africa",
    },
    {
      challenge: "Project Delays",
      solution: "72-hour rapid mobilization capability",
    },
    {
      challenge: "HSE Compliance",
      solution: "Technically screened and safety-trained professionals",
    },
    {
      challenge: "Remote Operations",
      solution: "Deployment support for offshore and isolated locations",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            SAC Solutions
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
            How We Solve Industry Challenges
          </h2>
        </div>

        <div className="space-y-8">

          {solutions.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="grid lg:grid-cols-2 gap-6 items-center"
            >
              <div className="bg-slate-800 rounded-[28px] p-8 border-l-4 border-red-500">
                <h3 className="text-red-500 text-xl font-bold">
                  Challenge
                </h3>

                <p className="mt-3 text-white text-lg">
                  {item.challenge}
                </p>
              </div>

              <div className="bg-white rounded-[28px] p-8 hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-slate-900 text-xl font-bold">
                  Solution
                </h3>

                <p className="mt-3 text-slate-600 text-lg">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default IndustrySolutions;