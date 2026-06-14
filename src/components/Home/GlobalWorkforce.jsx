function GlobalWorkforce() {
  const regions = [
    "India",
    "UAE",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Kazakhstan",
    "Nigeria",
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600"
              alt=""
              className="rounded-[32px] shadow-2xl"
            />

          </div>

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
              Global Workforce
            </span>

            <h2 className="mt-5 text-5xl font-bold text-slate-900">
              Skilled Personnel
              <span className="text-red-500">
                {" "}Ready To Deploy
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              SAC supports energy operators with certified manpower,
              rapid mobilization and project-ready teams across
              international markets.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {regions.map((region) => (
                <span
                  key={region}
                  className="px-5 py-3 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white transition"
                >
                  {region}
                </span>
              ))}

            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">

              <div>
                <h3 className="text-4xl font-bold text-red-500">
                  2000+
                </h3>
                <p className="text-slate-600">
                  Skilled Professionals
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-red-500">
                  72 Hrs
                </h3>
                <p className="text-slate-600">
                  Mobilization
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-red-500">
                  24/7
                </h3>
                <p className="text-slate-600">
                  Support
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default GlobalWorkforce;