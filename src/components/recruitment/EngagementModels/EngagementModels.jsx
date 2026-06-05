export default function EngagementModels() {
  const models = [
    {
      title: "Day Rate Model",
      subtitle: "Client Managed Operations",
      features: [
        "Salary Management",
        "Insurance Coverage",
        "PPE Support",
        "Travel Coordination",
        "Client Handles Local Logistics",
      ],
      featured: false,
    },
    {
      title: "Full Deployment Model",
      subtitle: "Most Preferred",
      features: [
        "Salary & Insurance",
        "Visa Processing",
        "Compliance Documentation",
        "Travel & Mobilization",
        "End-to-End Deployment",
      ],
      featured: true,
    },
    {
      title: "Recruitment Model",
      subtitle: "Talent Acquisition",
      features: [
        "Candidate Sourcing",
        "Technical Screening",
        "Client Interviews",
        "Shortlisting Support",
        "Placement Assistance",
      ],
      featured: false,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="text-red-600 uppercase tracking-widest font-semibold">
            Engagement Models
          </span>

          <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
            Flexible Workforce Partnership Options
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Choose a workforce engagement model that aligns
            with your operational and project requirements.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {models.map((model, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                model.featured
                  ? "bg-slate-900 text-white border-red-500 shadow-2xl scale-105"
                  : "bg-white border-slate-200 shadow-lg hover:shadow-xl"
              }`}
            >
              {model.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-semibold">
                  Recommended
                </div>
              )}

              <h3 className="text-2xl font-bold">
                {model.title}
              </h3>

              <p
                className={`mt-2 ${
                  model.featured
                    ? "text-slate-300"
                    : "text-slate-500"
                }`}
              >
                {model.subtitle}
              </p>

              <div className="mt-8 space-y-4">

                {model.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />

                    <span
                      className={
                        model.featured
                          ? "text-slate-200"
                          : "text-slate-700"
                      }
                    >
                      {feature}
                    </span>
                  </div>
                ))}

              </div>

              <button
                className={`w-full mt-10 py-3 rounded-xl font-semibold transition ${
                  model.featured
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                }`}
              >
                Learn More
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}