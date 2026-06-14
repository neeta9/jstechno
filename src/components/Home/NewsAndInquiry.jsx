import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NewsAndInquiry() {
  const navigate = useNavigate();

  const news = [
    {
      title: "Workforce Mobilization Trends In Energy Projects",
      desc: "How rapid deployment and workforce readiness improve operational efficiency.",
    },
    {
      title: "Offshore Safety Standards & Compliance",
      desc: "Best practices and HSE frameworks driving safer offshore operations.",
    },
    {
      title: "Integrated Oilfield Solutions For Modern Operations",
      desc: "Combining manpower, equipment and technology for project success.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <div>

            <span
              data-aos="fade-up"
              className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold"
            >
              Latest Insights
            </span>

            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-5 text-5xl font-bold text-slate-900"
            >
              Industry News &
              <span className="text-red-500"> Updates</span>
            </h2>

            <div className="mt-10 space-y-6">

              {news.map((item, index) => (
                <div
                  key={item.title}
                  data-aos="fade-right"
                  data-aos-delay={index * 100}
                  className="
                  bg-white
                  rounded-[28px]
                  p-8
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  "
                >
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-600">
                    {item.desc}
                  </p>

                  <button
                    className="
                    flex
                    items-center
                    gap-2
                    text-red-500
                    font-semibold
                    mt-5
                    hover:gap-3
                    transition-all
                    "
                  >
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </div>
              ))}

            </div>

          </div>

          {/* Right Side */}

          <div
            data-aos="fade-left"
            className="
            bg-[#041E42]
            rounded-[32px]
            p-10
            text-white
            relative
            overflow-hidden
            "
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-red-500/10 blur-[100px]" />

            <div className="relative">

              <span className="uppercase tracking-[0.3em] text-red-400 text-sm font-semibold">
                Quick Inquiry
              </span>

              <h3 className="text-4xl font-bold mt-4">
                Let's Discuss
                Your Project
              </h3>

              <form className="mt-8 space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 outline-none"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 outline-none"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement"
                  className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 outline-none"
                />

                <button
                  type="button"
                  onClick={() => navigate("/contact")}
                  className="
                  group
                  relative
                  overflow-hidden
                  px-8
                  py-4
                  rounded-full
                  bg-red-600
                  text-white
                  font-semibold
                  hover:-translate-y-1
                  hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)]
                  transition-all
                  duration-300
                  "
                >
                  Request Callback
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default NewsAndInquiry;