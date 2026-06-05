function IndustryOverview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1600"
              alt=""
              className="rounded-[32px] shadow-xl"
            />

          </div>

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
              Industry Overview
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
              Built Around Operational Excellence
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC supports oil & gas operators, drilling
              contractors, EPC firms and refinery projects
              through workforce deployment and technical support.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default IndustryOverview;