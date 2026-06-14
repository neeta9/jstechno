function IndustriesHero() {
  return (
    <section className="relative h-[450px] overflow-hidden">

      <img
        src="/images/industries-hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <div data-aos="fade-right">

            <span className="uppercase tracking-[0.3em] text-red-500 font-semibold">
              Industries & Solutions
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mt-4">
              Delivering Workforce
              <span className="block text-red-500">
                Across Critical Industries
              </span>
            </h1>

            <p className="max-w-2xl mt-6 text-slate-300 text-lg">
              Supporting oil & gas, offshore operations,
              energy infrastructure, petrochemicals and
              industrial projects across global markets.
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}

export default IndustriesHero;