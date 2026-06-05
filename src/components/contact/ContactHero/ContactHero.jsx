function ContactHero() {
  return (
    <section
      className="relative min-h-[65vh] flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,12,27,.82),rgba(2,12,27,.82)),url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div data-aos="fade-up" className="max-w-3xl">

          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Contact SAC
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight">
            Let's Build Your
            <span className="block text-red-500">
              Next Energy Project
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300">
            Workforce solutions, offshore operations,
            shutdown manpower and EPC support.
          </p>

        </div>

      </div>
    </section>
  );
}

export default ContactHero;