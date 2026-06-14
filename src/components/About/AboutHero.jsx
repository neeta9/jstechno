function AboutHero() {
  return (
    <section className="relative h-[450px] overflow-hidden">
      <img
        src="/images/about-hero.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div data-aos="fade-right">
            <span className="text-red-500 uppercase tracking-[0.3em] font-semibold">
              About South Asia Consultancy
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mt-4">
              Building Workforce
              <span className="block text-red-500">
                Excellence Since 2014
              </span>
            </h1>

            <p className="text-slate-300 mt-6 max-w-2xl text-lg">
              Operator-driven manpower, drilling support,
              O&M services and integrated workforce solutions
              for global energy projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;