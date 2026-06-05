import { ArrowRight, Play } from "lucide-react";

function ProjectsHero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2070&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/75"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">

          <span
            data-aos="fade-up"
            className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold"
          >
            Projects & Case Studies
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-5xl md:text-7xl font-bold text-white leading-tight"
          >
            Proven Operations Across
            <span className="block text-red-500">
              Global Energy Markets
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 text-xl text-slate-300 max-w-3xl"
          >
            From offshore drilling rigs and workover campaigns to
            refinery shutdowns and production facilities, SAC delivers
            reliable workforce and operational excellence worldwide.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-4 mt-10"
          >
            <button className="px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              Explore Projects
              <ArrowRight size={18} />
            </button>

            <button className="px-8 py-4 rounded-full border border-white/40 text-white font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 flex items-center gap-2">
              <Play size={18} />
              Watch Overview
            </button>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14"
          >
            {[
              ["42+", "Active Rigs"],
              ["350+", "Projects"],
              ["15+", "Countries"],
              ["72 Hrs", "Mobilization"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-5"
              >
                <h3 className="text-3xl font-bold text-red-500">
                  {number}
                </h3>

                <p className="text-slate-300 mt-2">
                  {label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;