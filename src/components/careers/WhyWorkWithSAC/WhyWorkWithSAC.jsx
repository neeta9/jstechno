import {
  Globe2,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

function WhyWorkWithSAC() {
  const benefits = [
    {
      icon: <Globe2 size={22} />,
      title: "Global Opportunities",
      desc: "Work on projects across India, the Middle East and international energy markets.",
    },
    {
      icon: <TrendingUp size={22} />,
      title: "Career Growth",
      desc: "Develop your technical and leadership skills through diverse projects.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Safety First",
      desc: "Strong HSE culture supporting safe and compliant operations.",
    },
    {
      icon: <Users size={22} />,
      title: "Team Culture",
      desc: "Collaborative environment focused on professional excellence.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <div className="relative overflow-hidden rounded-[32px]">

              <img
                src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1800"
                alt="Energy Workforce"
                className="
                w-full
                h-[600px]
                object-cover
                hover:scale-105
                transition-all
                duration-700
                "
              />

              <div className="absolute bottom-6 left-6 bg-white rounded-[24px] p-6 shadow-xl">
                <h3 className="text-4xl font-bold text-red-500">
                  15+
                </h3>

                <p className="text-slate-600 mt-2">
                  Countries Served
                </p>
              </div>

            </div>

          </div>

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
              Why Work With SAC
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
              Build A Rewarding
              <span className="text-red-500">
                {" "}Energy Career
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC supports employees through professional development,
              international opportunities, strong teamwork and a safety-first culture.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {benefits.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                  bg-slate-50
                  rounded-[24px]
                  p-6
                  border
                  border-slate-100
                  hover:border-red-500
                  hover:-translate-y-2
                  hover:shadow-xl
                  transition-all
                  duration-300
                  "
                >
                  <div
                    className="
                    w-12
                    h-12
                    rounded-full
                    bg-red-50
                    flex
                    items-center
                    justify-center
                    text-red-500
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyWorkWithSAC;