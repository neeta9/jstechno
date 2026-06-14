import { useNavigate } from "react-router-dom";

function CareersCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
          Join Our Team
        </span>

        <h2
          data-aos="fade-up"
          className="mt-5 text-4xl lg:text-5xl font-bold text-white"
        >
          Ready To Build Your Future?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-xl text-slate-300"
        >
          Become part of a workforce supporting major energy projects
          across international markets.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap justify-center gap-4 mt-10"
        >

          <button
            onClick={() =>
              document
                .getElementById("open-positions")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
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
            "
          >
            <span className="relative z-10">
              View Open Positions
            </span>

            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-all duration-700"></span>
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            text-white
            hover:bg-white
            hover:text-slate-900
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            Contact Recruitment Team
          </button>

        </div>

      </div>

    </section>
  );
}

export default CareersCTA;