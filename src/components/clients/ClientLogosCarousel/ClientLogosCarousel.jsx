function ClientLogosCarousel() {
  const clients = [
    "ONGC",
    "Oil India",
    "Vedanta",
    "Cairn",
    "Selan",
    "JTI",
    "Neuvo",
    "Stone Hill",
    "Radial Drilling",
    "Oilex",
    "Strata",
    "Key Energy",
    "AlMansoori",
    "3Core",
    "KS Drilling",
    "Punj Lloyd",
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Trusted Worldwide
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Industry Leaders We've Worked With
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Building long-term partnerships through workforce excellence,
            operational reliability and project delivery.
          </p>
        </div>

      </div>

      {/* Row 1 */}

      <div className="relative flex overflow-hidden py-4">

        <div className="flex animate-[scroll_30s_linear_infinite] gap-6 min-w-max">

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="
              flex
              items-center
              justify-center
              min-w-[220px]
              h-[110px]
              bg-slate-50
              rounded-[24px]
              border
              border-slate-200
              hover:border-red-500
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <h3 className="text-xl font-bold text-slate-500">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>

      {/* Row 2 */}

      <div className="relative flex overflow-hidden py-4 mt-4">

        <div className="flex animate-[scrollReverse_35s_linear_infinite] gap-6 min-w-max">

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="
              flex
              items-center
              justify-center
              min-w-[220px]
              h-[110px]
              bg-slate-50
              rounded-[24px]
              border
              border-slate-200
              hover:border-[#0BB39C]
              hover:-translate-y-1
              transition-all
              duration-300
              "
            >
              <h3 className="text-xl font-bold text-slate-500">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ClientLogosCarousel;