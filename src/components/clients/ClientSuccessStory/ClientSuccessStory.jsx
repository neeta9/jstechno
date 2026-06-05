import { useNavigate } from "react-router-dom";

function ClientSuccessStory() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content Side */}

          <div data-aos="fade-right">

           ppercase tracking <span className="u-[0.3em] text-[#0BB39C] text-sm font-semibold">
              Success Story
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Supporting A Major
              <span className="text-red-500">
                {" "}Offshore Campaign
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC rapidly mobilized experienced offshore personnel for a
              high-priority drilling campaign, helping maintain schedules,
              operational efficiency and safety compliance throughout the
              project lifecycle.
            </p>

            {/* Results */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-50 rounded-[24px] p-5">
                <h3 className="text-3xl font-bold text-red-500">
                  72 Hrs
                </h3>

                <p className="text-slate-600 mt-2">
                  Workforce Mobilization
                </p>
              </div>

              <div className="bg-slate-50 rounded-[24px] p-5">
                <h3 className="text-3xl font-bold text-red-500">
                  0 LTI
                </h3>

                <p className="text-slate-600 mt-2">
                  Safety Record
                </p>
              </div>

              <div className="bg-slate-50 rounded-[24px] p-5">
                <h3 className="text-3xl font-bold text-red-500">
                  100%
                </h3>

                <p className="text-slate-600 mt-2">
                  Schedule Achievement
                </p>
              </div>

              <div className="bg-slate-50 rounded-[24px] p-5">
                <h3 className="text-3xl font-bold text-red-500">
                  Global
                </h3>

                <p className="text-slate-600 mt-2">
                  Workforce Network
                </p>
              </div>

            </div>

            <button
              onClick={() => navigate("/projects")}
              className="
              group
              relative
              overflow-hidden
              mt-10
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
                View Project Portfolio
              </span>

              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-all duration-700"></span>
            </button>

          </div>

          {/* Image Side */}

          <div data-aos="fade-left">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1800"
                alt="Offshore Operations"
                className="
                rounded-[32px]
                shadow-2xl
                w-full
                h-[650px]
                object-cover
                "
              />

              {/* Floating Card */}

              <div
                className="
                absolute
                bottom-6
                right-6
                bg-white
                rounded-[24px]
                p-6
                shadow-xl
                max-w-[240px]
                "
              >
                <span className="text-[#0BB39C] font-semibold">
                  Featured Campaign
                </span>

                <h4 className="mt-3 font-bold text-slate-900">
                  Offshore Workforce Deployment
                </h4>

                <p className="text-sm text-slate-600 mt-2">
                  Rapid mobilization with strong HSE performance and
                  operational support.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ClientSuccessStory;