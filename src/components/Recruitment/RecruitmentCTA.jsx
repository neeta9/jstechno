import React from "react";

function RecruitmentCTA() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">

      {/* Background Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 opacity-95"></div>

      {/* Decorative Circles */}

      <div className="absolute -top-20 -right-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center">

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

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Request Workforce
            </button>

            <button className="border border-slate-600 hover:border-red-500 hover:text-red-400 text-white px-8 py-4 rounded-2xl font-semibold transition">
              Contact Our Team
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RecruitmentCTA;