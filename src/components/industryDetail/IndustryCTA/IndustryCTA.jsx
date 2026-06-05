import { useNavigate } from "react-router-dom";

function IndustryCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
          Workforce Partnership
        </span>

        <h2
          data-aos="fade-up"
          className="mt-5 text-4xl lg:text-5xl font-bold text-white"
        >
          Need Skilled Energy Professionals?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-xl text-slate-300"
        >
          Access technically screened and deployment-ready
          professionals for your next project.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap justify-center gap-4 mt-10"
        >

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
              Request Workforce
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-all duration-700"></span>
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            text-white
            hover:bg-white
            hover:text-slate-900
            transition-all
            duration-300
            "
          >
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}

export default IndustryCTA;