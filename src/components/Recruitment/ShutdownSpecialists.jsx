import React from "react";
import shutdownImage from "../../assets/recruitment/shutdown-specialists.png";

const specialists = [
  "Welders",
  "Pipe Fitters",
  "Fabricators",
  "Scaffolders",
  "QA/QC Engineers",
  "Mechanical Technicians",
  "Safety Officers",
  "Supervisors",
];

function ShutdownSpecialists() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image Side */}

          <div
            className="relative pr-8 pb-8"
            data-aos="fade-right"
          >

            <div className="overflow-hidden rounded-[32px] shadow-xl group">
              <img
                src={shutdownImage}
                alt="Shutdown Specialists"
                className="
                  w-full
                  rounded-[32px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            {/* Floating Stats Card */}

            <div
              className="
                absolute
                -bottom-4
                -right-4
                bg-red-600
                text-white
                px-8
                py-6
                rounded-3xl
                shadow-2xl
              "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-4xl font-bold">
                350+
              </h3>

              <p className="text-sm mt-1">
                Workforce Deployments
              </p>
            </div>

          </div>

          {/* Content Side */}

          <div data-aos="fade-left">

            <span className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">
              Refinery Shutdown Workforce
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Turnaround & Shutdown Specialists
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC supplies highly skilled turnaround and shutdown
              professionals for refinery maintenance, plant upgrades,
              emergency shutdowns, EPC projects and operational support
              requirements across global energy markets.
            </p>

            {/* Workforce Chips */}

            <div className="mt-8 flex flex-wrap gap-3">

              {specialists.map((item, index) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={index * 75}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    text-slate-700
                    hover:border-red-500
                    hover:text-red-600
                    hover:-translate-y-1
                    hover:shadow-md
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  {item}
                </div>
              ))}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                  bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  text-center
                "
              >
                <h3 className="text-3xl font-bold text-red-600">
                  72h
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Mobilization
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                  bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  text-center
                "
              >
                <h3 className="text-3xl font-bold text-red-600">
                  40+
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Active Projects
                </p>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="
                  border
                  border-slate-200
                  rounded-2xl
                  p-5
                  bg-white
                  hover:shadow-xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  text-center
                "
              >
                <h3 className="text-3xl font-bold text-red-600">
                  15+
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Years Experience
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ShutdownSpecialists;