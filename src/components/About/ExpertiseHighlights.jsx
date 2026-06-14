import {
  Briefcase,
  HardHat,
  Users
} from "lucide-react";

function ExpertiseHighlights() {

  const expertise = [
    {
      icon: <Users size={40} />,
      title: "Global Workforce Solutions",
      text: "Specialized manpower deployment for energy projects."
    },
    {
      icon: <HardHat size={40} />,
      title: "Drilling & Operations",
      text: "Support for drilling, workover and field operations."
    },
    {
      icon: <Briefcase size={40} />,
      title: "Project Execution",
      text: "Reliable project staffing and operational delivery."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            Our Expertise
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {expertise.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                group
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="text-red-600 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ExpertiseHighlights;