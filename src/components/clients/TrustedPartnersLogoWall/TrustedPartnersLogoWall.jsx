function TrustedPartnersLogoWall() {
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
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >

          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Trusted Partnerships
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Companies That Trust SAC
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            Long-term relationships built through operational excellence,
            technical expertise and workforce reliability.
          </p>

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

          {clients.map((client, index) => (
            <div
              key={client}
              data-aos="zoom-in"
              data-aos-delay={index * 50}
              className="
              group
              bg-white
              rounded-[28px]
              border
              border-slate-200
              h-[140px]
              flex
              items-center
              justify-center
              shadow-sm
              hover:border-red-500
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-500
              "
            >
              <h3
                className="
                text-xl
                font-bold
                text-slate-500
                group-hover:text-slate-900
                transition-all
                "
              >
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TrustedPartnersLogoWall;