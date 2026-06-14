import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ServicesHero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[450px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-slate-950/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">

          <span
            data-aos="fade-up"
            className="uppercase tracking-[0.35em] text-red-500 text-sm font-semibold"
          >
            SERVICES & SOLUTIONS
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Integrated Oilfield
            <span className="block text-red-500">
              Services Worldwide
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg text-slate-300 max-w-3xl"
          >
            Delivering drilling, workover, maintenance,
            manpower and specialized equipment solutions
            for global energy operations.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex gap-4 mt-8 flex-wrap"
          >
            <button
              onClick={() =>
                document
                  .getElementById("services-overview")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative overflow-hidden px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
            >
              Contact Team
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ServicesHero;