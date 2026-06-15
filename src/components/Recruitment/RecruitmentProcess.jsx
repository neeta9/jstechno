import React from "react";

const processSteps = [
  "Requirement Analysis",
  "Candidate Sourcing",
  "Technical Screening",
  "Client Interviews",
  "Documentation",
  "Deployment",
];

function RecruitmentProcess() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">
            Recruitment Process
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            From Requirement To Deployment
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            A structured recruitment workflow designed to deliver
            technically qualified and deployment-ready professionals.
          </p>
        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Desktop Line */}

          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-slate-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">

            {processSteps.map((step, index) => (
              <div
                key={step}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="relative text-center group"
              >
                {/* Step Circle */}

                <div
                  className="
                    w-20
                    h-20
                    mx-auto
                    rounded-full
                    bg-white
                    border-2
                    border-slate-200
                    flex
                    items-center
                    justify-center
                    text-2xl
                    font-bold
                    text-slate-700
                    shadow-md
                    group-hover:border-red-500
                    group-hover:text-red-600
                    group-hover:shadow-xl
                    group-hover:-translate-y-1
                    transition-all
                    duration-300
                    relative
                    z-10
                  "
                >
                  {index + 1}
                </div>

                {/* Step Title */}

                <h3
                  className="
                    mt-5
                    font-semibold
                    text-slate-900
                    transition-colors
                    duration-300
                    group-hover:text-red-600
                  "
                >
                  {step}
                </h3>

                {/* Hover Underline */}

                <div
                  className="
                    mx-auto
                    mt-3
                    h-[2px]
                    w-0
                    bg-red-600
                    group-hover:w-12
                    transition-all
                    duration-500
                  "
                ></div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default RecruitmentProcess;