import {
  Search,
  Users,
  ClipboardCheck,
  MessageSquare,
  FileText,
  Plane,
} from "lucide-react";

function RecruitmentProcess() {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Requirement Analysis",
      desc: "Understanding project workforce requirements and technical specifications.",
    },
    {
      icon: <Users size={28} />,
      title: "Candidate Sourcing",
      desc: "Identifying qualified professionals through our talent network.",
    },
    {
      icon: <ClipboardCheck size={28} />,
      title: "Screening",
      desc: "Technical evaluation, documentation review and compliance checks.",
    },
    {
      icon: <MessageSquare size={28} />,
      title: "Client Interviews",
      desc: "Shortlisted candidates participate in client assessment rounds.",
    },
    {
      icon: <FileText size={28} />,
      title: "Documentation",
      desc: "Medical, visa, certifications and onboarding formalities.",
    },
    {
      icon: <Plane size={28} />,
      title: "Mobilization",
      desc: "Rapid deployment to project locations globally.",
    },
  ];

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="text-center mb-20"
          data-aos="fade-up"
        ><span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
          
            Recruitment Process
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-white">
            How We Hire
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-3xl mx-auto">
            A structured process designed to ensure the right people
            are matched with the right projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {steps.map((step, index) => (
            <div
              key={step.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
              relative
              bg-slate-800
              rounded-[28px]
              p-8
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >
              <div
                className="
                w-16
                h-16
                rounded-full
                bg-[#0BB39C]/10
                flex
                items-center
                justify-center
                text-[#0BB39C]
                "
              >
                {step.icon}
              </div>

              <span className="absolute top-6 right-6 text-red-500 text-3xl font-bold">
                0{index + 1}
              </span>

              <h3 className="mt-6 text-xl font-bold text-white">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default RecruitmentProcess;