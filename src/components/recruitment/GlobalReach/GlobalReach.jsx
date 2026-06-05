import React from "react";

function GlobalReach() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left */}

          <div>

            <span className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">
              Global Reach
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
              Connecting Talent Across Global Energy Markets
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC mobilizes skilled professionals across the Middle East,
              Africa, South Asia and Southeast Asia for energy,
              industrial and EPC projects.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              {[
                "Middle East",
                "Africa",
                "South Asia",
                "Southeast Asia",
              ].map((region) => (
                <div
                  key={region}
                  className="border border-slate-200 rounded-2xl px-5 py-4 hover:border-red-500 transition"
                >
                  {region}
                </div>
              ))}

            </div>

          </div>

          {/* Right */}

          <div className="relative">

            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200"
              alt="Global Reach"
              className="rounded-[32px] shadow-xl"
            />

            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white rounded-3xl px-8 py-6 shadow-xl">
              <div className="text-4xl font-bold">
                4
              </div>

              <div>
                Strategic Regions
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default GlobalReach;