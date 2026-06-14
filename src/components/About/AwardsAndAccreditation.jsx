import {
  Award,
  ShieldCheck,
  BadgeCheck,
  Trophy,
} from "lucide-react";

function AwardsAndAccreditation() {

  const items = [
    {
      icon: <Award size={40} />,
      title: "ISO 9001 Certified",
      text: "Quality management systems certification."
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "QHSE Compliance",
      text: "Strong quality, safety and environmental standards."
    },
    {
      icon: <BadgeCheck size={40} />,
      title: "IWCF Recognition",
      text: "Industry-recognized operational competence."
    },
    {
      icon: <Trophy size={40} />,
      title: "Operational Excellence",
      text: "Successful delivery of critical energy projects."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-600 uppercase tracking-[0.3em] font-semibold">
            Awards & Accreditation
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Industry Recognition & Certifications
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {items.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
                bg-white
                p-8
                rounded-3xl
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

              <h3 className="font-bold text-xl">
                {item.title}
              </h3>

              <p className="text-slate-600 mt-4">
                {item.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AwardsAndAccreditation;