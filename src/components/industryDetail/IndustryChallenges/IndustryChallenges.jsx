function IndustryChallenges() {
  const challenges = [
    "Skilled manpower shortages",
    "Rapid mobilization requirements",
    "HSE compliance",
    "Remote project locations",
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-red-600 text-sm">
            Industry Challenges
          </span>

          <h2 className="mt-5 text-5xl font-bold">
            Challenges Energy Operators Face
          </h2>

        </div>

        <div className="space-y-10">

          {challenges.map((item, index) => (
            <div
              key={item}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                {index + 1}
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {item}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustryChallenges;