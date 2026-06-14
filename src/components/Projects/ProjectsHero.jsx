import { ArrowRight, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ProjectsHero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[450px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2000&auto=format&fit=crop')",
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
            PROJECTS & CASE STUDIES
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Proven Operations Across
            <span className="block text-red-500">
              Global Energy Markets
            </span>
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg lg:text-xl text-slate-300 max-w-3xl"
          >
            From offshore drilling rigs and workover campaigns to
            refinery shutdowns and production facilities, SAC delivers
            reliable workforce and operational excellence worldwide.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-4 mt-8"
          >
            <button
              onClick={() =>
                document
                  .getElementById("operational-footprint")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="
                group
                relative
                overflow-hidden
                px-8
                py-4
                rounded-full
                bg-red-600
                text-white
                font-semibold
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)]
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Projects
                <ArrowRight size={18} />
              </span>

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-transparent
                  via-white/20
                  to-transparent
                  group-hover:translate-x-full
                  transition-all
                  duration-700
                "
              ></span>
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="
                group
                relative
                overflow-hidden
                px-8
                py-4
                rounded-full
                border
                border-white/20
                text-white
                font-semibold
                hover:bg-white
                hover:text-slate-900
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-center
                gap-2
              "
            >
              <span className="relative z-10 flex items-center gap-2">
                <Play size={18} />
                Contact Team
              </span>

              <span
                className="
                  absolute
                  inset-0
                  scale-x-0
                  origin-left
                  bg-white
                  group-hover:scale-x-100
                  transition-transform
                  duration-500
                "
              ></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsHero;