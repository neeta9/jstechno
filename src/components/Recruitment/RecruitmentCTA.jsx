import React from "react";
import { useNavigate } from "react-router-dom";

function RecruitmentCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">

      {/* Background Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 opacity-95"></div>

      {/* Decorative Blur Effects */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div
          className="text-center"
          data-aos="fade-up"
        >

          <span className="text-red-500 uppercase tracking-[0.25em] text-sm font-semibold">
            Workforce Solutions
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
            Need Skilled Workforce For Your Next Project?
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            From offshore operations and refinery shutdowns to EPC projects
            and technical manpower supply, SAC delivers qualified,
            deployment-ready professionals worldwide.
          </p>

          <div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >

            {/* Primary CTA */}

            <button
              onClick={() => navigate("/contact")}
              className="
                group
                relative
                overflow-hidden
                bg-red-600
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                hover:-translate-y-1
                hover:bg-red-700
                hover:shadow-[0_15px_35px_rgba(220,38,38,0.35)]
                transition-all
                duration-300
              "
            >
              <span className="relative z-10">
                Request Workforce
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

            {/* Secondary CTA */}

            <button
              onClick={() => navigate("/contact")}
              className="
                group
                relative
                overflow-hidden
                border
                border-slate-600
                text-white
                px-8
                py-4
                rounded-2xl
                font-semibold
                hover:border-red-500
                hover:text-red-400
                hover:-translate-y-1
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <span className="relative z-10">
                Contact Our Team
              </span>

              <span
                className="
                  absolute
                  inset-0
                  scale-x-0
                  origin-left
                  bg-white/5
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

export default RecruitmentCTA;