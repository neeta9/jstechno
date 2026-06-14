import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/hero_bg.jpg";

function HomeHero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          `url('${heroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#071A2F]/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">

        <div className="max-w-4xl">

          <span
            data-aos="fade-up"
            className="uppercase tracking-[0.35em] text-red-500 text-sm font-semibold"
          >
            Integrated Oilfield Solutions
          </span>

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-6 text-5xl lg:text-7xl font-bold text-white leading-tight"
          >
            Delivering Integrated
            <span className="block text-red-500">
              Oilfield Services
            </span>
            Across The Globe
          </h1>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 text-xl text-slate-300 max-w-3xl"
          >
            South Asia Consultancy provides innovative and reliable
            drilling, workover, O&M and manpower solutions with a
            commitment to safety, quality and operational excellence.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex flex-wrap gap-4 mt-10"
          >
            <button
              onClick={() => navigate("/services")}
              className="px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:-translate-y-1 transition-all"
            >
              Our Services
            </button>

            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white hover:text-slate-900 transition-all"
            >
              Contact Us
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HomeHero;