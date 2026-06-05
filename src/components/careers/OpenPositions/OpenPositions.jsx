import { useState } from "react";
import { ChevronDown } from "lucide-react";

function OpenPositions() {
  const [active, setActive] = useState(null);

  const jobs = [
    "Instrumentation Technician",
    "Mechanical Maintenance Engineer",
    "Mechanical Technician",
    "Electrical Technician / Electrician",
    "Welder",
  ];

  return (
    <section
      id="open-positions"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-6">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Career Opportunities
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Open Positions
          </h2>
        </div>

        <div className="space-y-4">

          {jobs.map((job, index) => (
            <div
              key={job}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              bg-white
              rounded-[24px]
              shadow-sm
              overflow-hidden
              "
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="
                w-full
                px-8
                py-6
                flex
                justify-between
                items-center
                text-left
                font-semibold
                text-lg
                "
              >
                {job}

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {active === index && (
                <div className="px-8 pb-8">

                  <p className="text-slate-600">
                    Join our workforce and contribute to
                    drilling, maintenance and energy operations.
                  </p>

                  <button
                    onClick={() =>
                      document
                        .getElementById("application-section")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        })
                    }
                    className="
                    mt-6
                    px-6
                    py-3
                    rounded-full
                    bg-red-600
                    text-white
                    font-semibold
                    hover:-translate-y-1
                    transition-all
                    duration-300
                    "
                  >
                    Apply For This Role
                  </button>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default OpenPositions;