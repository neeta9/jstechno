// import React, { useState } from "react";

// const models = [
//   {
//     title: "Day Rate Model",
//     subtitle: "Client Managed Operations",
//     features: [
//       "Salary Management",
//       "Insurance Coverage",
//       "PPE Support",
//       "Travel Coordination",
//       "Client Handles Local Logistics",
//     ],
//   },
//   {
//     title: "Full Deployment Model",
//     subtitle: "Most Preferred",
//     featured: true,
//     features: [
//       "Salary & Insurance",
//       "Visa Processing",
//       "Compliance Documentation",
//       "Travel & Mobilization",
//       "End-to-End Deployment",
//     ],
//   },
//   {
//     title: "Recruitment Model",
//     subtitle: "Talent Acquisition",
//     features: [
//       "Candidate Sourcing",
//       "Technical Screening",
//       "Client Interviews",
//       "Shortlisting Support",
//       "Placement Assistance",
//     ],
//   },
// ];

// function EngagementModels() {
//   const [activeCard, setActiveCard] = useState(1);

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* Heading */}

//         <div className="text-center mb-14">

//           <span className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">
//             Engagement Models
//           </span>

//           <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
//             Flexible Workforce Partnership Options
//           </h2>

//           <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
//             Choose a workforce engagement model that aligns with your
//             operational and project requirements.
//           </p>

//         </div>

//         {/* Cards */}

//         <div className="grid lg:grid-cols-3 gap-8 items-center">

//           {models.map((model, index) => {

//             const isActive = activeCard === index;

//             return (
//               <div
//                 key={index}
//                 onMouseEnter={() => setActiveCard(index)}
//                 onMouseLeave={() => setActiveCard(1)}
//                 className={`
//                   relative rounded-[28px]
//                   overflow-visible
//                   transition-all duration-500
//                   cursor-pointer

//                   ${
//                     model.featured
//                       ? "lg:scale-105 bg-gradient-to-br from-slate-900 to-blue-950 text-white"
//                       : "bg-white"
//                   }

//                   ${
//                     isActive
//                       ? "border-2 border-red-500 shadow-[0_15px_40px_rgba(239,68,68,0.18)] -translate-y-3 scale-[1.02]"
//                       : "border-2 border-slate-200 shadow-lg"
//                   }
//                 `}
//               >

//                 {/* Recommended Badge */}

//                 {model.featured && (
//                   <div className="absolute left-1/2 -translate-x-1/2 -top-6 z-20">
//                     <div className="bg-red-600 text-white px-8 py-3 rounded-full shadow-xl font-semibold text-sm">
//                       Recommended
//                     </div>
//                   </div>
//                 )}

//                 <div className="p-8">

//                   <h3 className="text-3xl font-bold">
//                     {model.title}
//                   </h3>

//                   <p
//                     className={`mt-2 text-lg ${
//                       model.featured
//                         ? "text-slate-300"
//                         : "text-slate-500"
//                     }`}
//                   >
//                     {model.subtitle}
//                   </p>

//                   <div className="mt-8 space-y-5">

//                     {model.features.map((feature) => (
//                       <div
//                         key={feature}
//                         className="flex items-start gap-4"
//                       >
//                         <div className="w-3 h-3 rounded-full bg-red-500 mt-2"></div>

//                         <span
//                           className={`text-lg ${
//                             model.featured
//                               ? "text-slate-200"
//                               : "text-slate-700"
//                           }`}
//                         >
//                           {feature}
//                         </span>
//                       </div>
//                     ))}

//                   </div>

//                 </div>

//               </div>
//             );
//           })}

//         </div>

//       </div>
//     </section>
//   );
// }

// export default EngagementModels;

import React from "react";
import shutdownImage from "../../../assets/recruitment/shutdown-specialists.png";

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

          <div className="relative pr-8 pb-8">

            <img
              src={shutdownImage}
              alt="Shutdown Specialists"
              className="
                w-full
                rounded-[32px]
                shadow-xl
                object-cover
              "
            />

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

          <div>

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

              {specialists.map((item) => (
                <div
                  key={item}
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
                    transition-all
                    duration-300
                  "
                >
                  {item}
                </div>
              ))}

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="border border-slate-200 rounded-2xl p-5 bg-white hover:shadow-md transition">
                <h3 className="text-3xl font-bold text-red-600">
                  72h
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Mobilization
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white hover:shadow-md transition">
                <h3 className="text-3xl font-bold text-red-600">
                  40+
                </h3>

                <p className="text-sm text-slate-600 mt-1">
                  Active Projects
                </p>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white hover:shadow-md transition">
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