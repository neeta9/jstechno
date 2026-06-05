import CountUp from "react-countup";
import {
  ShieldCheck,
  Globe,
  BriefcaseBusiness,
  Clock3,
  Award,
} from "lucide-react";

function AwardsSection() {
  const stats = [
    {
      icon: <BriefcaseBusiness size={28} />,
      number: 500,
      suffix: "+",
      label: "Projects Delivered",
    },
    {
      icon: <Globe size={28} />,
      number: 15,
      suffix: "+",
      label: "Countries Served",
    },
    {
      icon: <ShieldCheck size={28} />,
      number: 100,
      suffix: "%",
      label: "HSE Commitment",
    },
    {
      icon: <Clock3 size={28} />,
      number: 24,
      suffix: "/7",
      label: "Operational Support",
    },
  ];

  return (
    <section className="relative py-28 bg-[#041E42] overflow-hidden">

      {/* Background Effects */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-red-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-[140px]" />

      {/* Watermark */}

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-[180px] font-black text-white/[0.03]">
          AWARDS
        </h1>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center"
        >
          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Performance & Recognition
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Excellence Recognized
          </h2>
        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">

          {stats.map((item, index) => (
            <div
              key={item.label}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
              bg-white/5
              backdrop-blur-sm
              border
              border-white/10
              rounded-[28px]
              p-8
              text-center
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <div className="w-14 h-14 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white mt-6">
                <CountUp end={item.number} duration={3} />
                {item.suffix}
              </h3>

              <p className="text-slate-300 mt-3">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Floating Trophy */}

        <div
          data-aos="zoom-in"
          className="flex justify-center mt-20"
        >
          <div
            className="
            w-28
            h-28
            rounded-full
            bg-gradient-to-br
            from-red-500
            to-red-700
            flex
            items-center
            justify-center
            shadow-[0_20px_60px_rgba(239,68,68,0.35)]
            "
          >
            <Award size={42} className="text-white" />
          </div>
        </div>

        {/* Timeline */}

        <div className="max-w-4xl mx-auto mt-20 relative">

          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-red-500 -translate-x-1/2" />

          {/* Award 2022 */}

          <div
            data-aos="fade-right"
            className="relative flex justify-start mb-20"
          >
            <div
              className="
              bg-white
              rounded-[28px]
              p-8
              w-full
              md:w-[45%]
              shadow-xl
              "
            >
              <span className="text-red-500 font-bold">
                2022
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Best Performing Offshore Rig
              </h3>

              <p className="text-slate-600 mt-4">
                Our Offshore O&M Project of Rig Sagar Shakti
                was honored with the Best Performing Rig Award
                by the Chairman of ONGC at Goa.
              </p>
            </div>
          </div>

          {/* Award 2023 */}

          <div
            data-aos="fade-left"
            className="relative flex justify-end"
          >
            <div
              className="
              bg-white
              rounded-[28px]
              p-8
              w-full
              md:w-[45%]
              shadow-xl
              "
            >
              <span className="text-red-500 font-bold">
                2023
              </span>

              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Best Performing Drilling Rig
              </h3>

              <p className="text-slate-600 mt-4">
                O&M Project of Drilling Rig CW-IX
                (Cambay Asset) received the Best
                Performing Drilling Rig Award from
                the Chairman of ONGC at Dehradun.
              </p>
            </div>
          </div>

        </div>

        {/* Recognition Strip */}

        <div
          data-aos="fade-up"
          className="flex flex-wrap justify-center gap-4 mt-20"
        >
          {[
            "ONGC Recognized",
            "Best Rig 2022",
            "Best Rig 2023",
            "Industry Excellence",
          ].map((item) => (
            <div
              key={item}
              className="
              px-6
              py-3
              rounded-full
              bg-white/10
              border
              border-white/10
              text-white
              "
            >
              {item}
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default AwardsSection;