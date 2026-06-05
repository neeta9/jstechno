function GlobalDeployment() {
  const regions = [
    "India",
    "UAE",
    "Oman",
    "Kuwait",
    "Bahrain",
    "Nigeria",
    "Kazakhstan",
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
              Global Deployment
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
              Supporting Energy Operations Worldwide
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              SAC has deployed equipment, manpower and operational
              support services across major energy markets.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">

              {regions.map((region) => (
                <span
                  key={region}
                  className="
                  px-5
                  py-3
                  rounded-full
                  bg-slate-100
                  hover:bg-red-600
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >
                  {region}
                </span>
              ))}

            </div>

          </div>

          <div data-aos="fade-left">

            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1800"
              alt=""
              className="rounded-[32px] shadow-xl"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default GlobalDeployment;