import React from "react";

const industries = [
  "Oil & Gas",
  "Refineries",
  "Petrochemicals",
  "Offshore Operations",
  "EPC Projects",
  "Industrial Maintenance",
];

function IndustriesServed() {
  return (
    <section className="py-16 bg-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div
          className="text-center"
          data-aos="fade-up"
        >
          <span className="text-red-500 uppercase tracking-[0.25em] text-sm font-semibold">
            Industries Served
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold">
            Workforce Solutions Across Critical Industries
          </h2>
        </div>

        {/* Industry Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">

          {industries.map((industry, index) => (
            <div
              key={industry}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                border
                border-slate-700
                rounded-3xl
                p-8
                hover:border-red-500
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
                cursor-pointer
              "
            >
              {/* Number */}
              <div
                className="
                  text-red-500
                  text-4xl
                  font-bold
                  transition-all
                  duration-300
                  group-hover:scale-110
                "
              >
                0{index + 1}
              </div>

              {/* Title */}
              <h3
                className="
                  mt-4
                  text-2xl
                  font-semibold
                  transition-colors
                  duration-300
                  group-hover:text-red-400
                "
              >
                {industry}
              </h3>

              {/* Animated Line */}
              <div
                className="
                  w-0
                  group-hover:w-full
                  h-[2px]
                  bg-red-500
                  mt-5
                  transition-all
                  duration-500
                "
              ></div>

              {/* Small Description Accent */}
              <p
                className="
                  mt-4
                  text-slate-400
                  text-sm
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                  duration-300
                "
              >
                Delivering specialized workforce and operational support.
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default IndustriesServed;