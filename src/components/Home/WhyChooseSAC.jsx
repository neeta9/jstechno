import { ShieldCheck, BriefcaseBusiness, Wrench, Users } from "lucide-react";

function WhyChooseSAC() {
  const features = [
    {
      icon: <BriefcaseBusiness size={26} />,
      title: "Industry Expertise",
      desc: "Decades of operational experience supporting energy and industrial projects.",
    },
    {
      icon: <Wrench size={26} />,
      title: "Advanced Equipment",
      desc: "Reliable equipment solutions and technical support for critical operations.",
    },
    {
      icon: <ShieldCheck size={26} />,
      title: "Strong HSE Culture",
      desc: "Safety-driven execution aligned with international standards and best practices.",
    },
    {
      icon: <Users size={26} />,
      title: "Client-First Approach",
      desc: "Long-term partnerships built on responsiveness, quality and trust.",
    },
  ];

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE SIDE */}

          <div
            data-aos="fade-right"
            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1800"
              alt="Oil & Gas Operations"
              className="
              rounded-[36px]
              h-[550px]
              w-full
              object-cover
              shadow-2xl
              "
            />

            {/* Floating Experience Card */}

            <div
              className="
              absolute
              -bottom-8
              -left-8
              bg-red-600
              text-white
              p-8
              rounded-[28px]
              shadow-2xl
              "
            >
              <h3 className="text-5xl font-bold">
                20+
              </h3>

              <p className="mt-2">
                Years Of Industry Experience
              </p>
            </div>

            {/* Floating Badge */}

            <div
              className="
              absolute
              top-8
              right-8
              bg-white
              rounded-full
              px-6
              py-4
              shadow-xl
              "
            >
              <span className="font-semibold text-slate-900">
                500+ Projects Delivered
              </span>
            </div>

          </div>

          {/* CONTENT SIDE */}

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.35em] text-red-600 text-sm font-semibold">
              About Us
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900 leading-tight">
              A Trusted Partner In
              <span className="block text-red-500">
                Energy And Beyond
              </span>
            </h2>

            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              South Asia Consultancy Services Pvt. Ltd. delivers
              integrated workforce solutions, equipment support
              and operational expertise for energy projects
              worldwide.
            </p>

            {/* Feature Cards */}

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="
                  group
                  bg-slate-50
                  p-6
                  rounded-[24px]
                  hover:bg-[#041E42]
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  "
                >
                  <div className="text-red-500">
                    {feature.icon}
                  </div>

                  <h3 className="mt-4 font-bold text-lg text-slate-900 group-hover:text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 group-hover:text-slate-300">
                    {feature.desc}
                  </p>
                </div>
              ))}

            </div>

            {/* Bottom Metrics */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-red-500">
                  20+
                </h3>
                <p className="text-slate-600 text-sm">
                  Years Experience
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-500">
                  15+
                </h3>
                <p className="text-slate-600 text-sm">
                  Countries Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-red-500">
                  500+
                </h3>
                <p className="text-slate-600 text-sm">
                  Projects
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default WhyChooseSAC;