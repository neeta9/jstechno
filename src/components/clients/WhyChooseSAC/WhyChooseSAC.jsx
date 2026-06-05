import {
  ShieldCheck,
  Globe2,
  Users,
  Clock3,
} from "lucide-react";

function WhyChooseSAC() {
  const features = [
    {
      icon: <Users size={22} />,
      title: "Specialized Workforce",
      description:
        "Access to experienced drilling, workover, offshore and shutdown professionals.",
    },
    {
      icon: <Clock3 size={22} />,
      title: "Rapid Mobilization",
      description:
        "Deployment-ready workforce with proven mobilization capability.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Safety Driven Culture",
      description:
        "Strong HSE focus supporting safe and compliant operations.",
    },
    {
      icon: <Globe2 size={22} />,
      title: "Global Reach",
      description:
        "Supporting projects across India, Middle East, Africa and international energy markets.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div data-aos="fade-right">

            <div className="relative">

              <img
                src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1800"
                alt="Energy Operations"
                className="
                rounded-[32px]
                shadow-2xl
                w-full
                h-[600px]
                object-cover
                "
              />

              <div
                className="
                absolute
                bottom-6
                left-6
                bg-white
                rounded-[24px]
                p-6
                shadow-xl
                "
              >
                <h3 className="text-4xl font-bold text-red-500">
                  350+
                </h3>

                <p className="text-slate-600 mt-2">
                  Successful Projects
                </p>
              </div>

            </div>

          </div>

          {/* Right Content */}

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.3em] text-[#0BB39C] text-sm font-semibold">
              Why Choose SAC
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Trusted Workforce &
              <span className="text-red-500">
                {" "}Operational Partner
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC has built long-term relationships with leading
              operators, contractors and service companies through
              reliable workforce deployment, operational excellence
              and strong project execution capabilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="
                  bg-white
                  rounded-[24px]
                  p-6
                  shadow-lg
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
                    bg-[#0BB39C]/10
                    flex
                    items-center
                    justify-center
                    text-[#0BB39C]
                    "
                  >
                    {item.icon}
                  </div>

                  <h3 className="mt-4 font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {item.description}
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

export default WhyChooseSAC;
