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

        <div className="text-center mb-16">

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

        <div className="relative">

          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-slate-200"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8">

            {processSteps.map((step, index) => (
              <div
                key={step}
                className="relative text-center group"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-white border-2 border-slate-200 flex items-center justify-center text-2xl font-bold text-slate-700 shadow-md group-hover:border-red-500 group-hover:text-red-600 transition">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-slate-900">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default RecruitmentProcess;