import { useNavigate } from "react-router-dom";

function IndustryHero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[80vh] flex items-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,12,27,.82),rgba(2,12,27,.82)),url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">

        <div data-aos="fade-up" className="max-w-4xl">

          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Oil & Gas Industry
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold text-white">
            Workforce Solutions For
            <span className="block text-red-500">
              Energy Operations
            </span>
          </h1>

          <p className="mt-8 text-xl text-slate-300">
            Supporting offshore, refinery, EPC and drilling
            projects with experienced technical manpower.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <button
              onClick={() => navigate("/contact")}
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10">
                Request Workforce
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-all duration-700"></span>
            </button>

            <button
              onClick={() => navigate("/projects")}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              View Projects
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default IndustryHero;