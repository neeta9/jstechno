import { useNavigate } from "react-router-dom";

function EquipmentHero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[450px] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,12,27,.80),rgba(2,12,27,.80)),url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=2000')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div
          className="max-w-4xl"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[0.35em] text-red-500 text-sm font-semibold">
            EQUIPMENT & TECHNOLOGY
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold text-white leading-tight">
            Operational Assets &
            <span className="block text-red-500">
              Technology Solutions
            </span>
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-slate-300 max-w-3xl">
            Integrated rig assets, workover equipment, power systems and
            technology solutions supporting global energy operations.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            {/* Primary Button */}

            <button
              onClick={() => navigate("/contact")}
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
              "
            >
              <span className="relative z-10">
                Request Equipment Support
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
              />
            </button>

            {/* Secondary Button */}

            <button
              onClick={() => navigate("/projects")}
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
              "
            >
              <span className="relative z-10">
                View Projects
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
              />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

export default EquipmentHero;