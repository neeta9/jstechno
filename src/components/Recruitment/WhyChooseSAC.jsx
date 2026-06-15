import React, { useState } from "react";

const reasons = [
  {
    number: "01",
    title: "Operator Driven Expertise",
    description:
      "Built on real operational experience as an oil block operator and drilling contractor, not just a traditional recruiter.",
  },
  {
    number: "02",
    title: "72 Hour Mobilization",
    description:
      "Rapid workforce deployment capability for urgent shutdowns, drilling campaigns and EPC projects.",
  },
  {
    number: "03",
    title: "Global Talent Network",
    description:
      "Access to skilled professionals across India, GCC, Southeast Asia and Africa.",
  },
  {
    number: "04",
    title: "Compliance & Documentation",
    description:
      "Visa processing, medicals, travel coordination and workforce compliance handled end-to-end.",
  },
];

function WhyChooseSAC() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Side */}

          <div
            className="relative"
            data-aos="fade-right"
          >

            <div className="overflow-hidden rounded-[32px] shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200"
                alt="Workforce Solutions"
                className="
                  w-full
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-105
                "
              />
            </div>

            <div
              className="
                absolute
                -bottom-6
                -right-6
                bg-red-600
                text-white
                px-8
                py-6
                rounded-3xl
                shadow-xl
              "
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="text-4xl font-bold">
                72h
              </h3>

              <p className="text-sm mt-1">
                Rapid Mobilization
              </p>
            </div>

          </div>

          {/* Right Side */}

          <div data-aos="fade-left">

            <span className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">
              Why Choose SAC
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Trusted Workforce Partner For Energy Projects
            </h2>

            <div className="mt-10 space-y-5">

              {reasons.map((reason, index) => {
                const isActive = active === index;

                return (
                  <div
                    key={reason.number}
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                    onMouseEnter={() => setActive(index)}
                    className={`
                      pl-6
                      border-l-4
                      cursor-pointer
                      transition-all
                      duration-300
                      rounded-r-xl
                      py-2

                      ${
                        isActive
                          ? "border-red-600 translate-x-2 bg-red-50/40"
                          : "border-slate-200 hover:border-red-300"
                      }
                    `}
                  >
                    <div
                      className={`
                        text-3xl
                        font-bold
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "text-red-600 scale-110"
                            : "text-slate-300"
                        }
                      `}
                    >
                      {reason.number}
                    </div>

                    <h3
                      className={`
                        mt-2
                        text-xl
                        font-semibold
                        transition-colors
                        duration-300

                        ${
                          isActive
                            ? "text-red-600"
                            : "text-slate-900"
                        }
                      `}
                    >
                      {reason.title}
                    </h3>

                    <p className="mt-2 text-slate-600 leading-relaxed">
                      {reason.description}
                    </p>

                    <div
                      className={`
                        h-[2px]
                        bg-red-600
                        mt-4
                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "w-16"
                            : "w-0"
                        }
                      `}
                    ></div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseSAC;