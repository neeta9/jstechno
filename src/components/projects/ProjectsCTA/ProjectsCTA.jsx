import { useNavigate } from "react-router-dom";

function ProjectsCTA() {
  const navigate = useNavigate();

  return (
    <section
      id="contact-projects"
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(2,12,27,.88), rgba(2,12,27,.88)), url('https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1800')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-red-600/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-600/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        <div data-aos="fade-up">
          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Let's Build Together
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Need Support For Your
            <span className="block text-red-500">
              Next Energy Project?
            </span>
          </h2>

          <p className="mt-8 text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Whether it's offshore drilling, workover operations,
            refinery shutdowns, workforce deployment or EPC support,
            SAC delivers experienced personnel and operational
            excellence wherever your project takes you.
          </p>
        </div>

        {/* Stats Row */}

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid md:grid-cols-3 gap-6 mt-14"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
            <h3 className="text-3xl font-bold text-red-500">
              42+
            </h3>
            <p className="text-slate-300 mt-2">
              Active Rigs
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
            <h3 className="text-3xl font-bold text-red-500">
              350+
            </h3>
            <p className="text-slate-300 mt-2">
              Projects Delivered
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6">
            <h3 className="text-3xl font-bold text-red-500">
              15+
            </h3>
            <p className="text-slate-300 mt-2">
              Countries Served
            </p>
          </div>
        </div>

        {/* Buttons */}

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-5 mt-14"
        >
          <button
            onClick={() => navigate("/contact")}
            className="
              px-8
              py-4
              rounded-full
              bg-red-600
              text-white
              font-semibold
              hover:-translate-y-1
              hover:shadow-xl
              transition-all
              duration-300
            "
          >
            Request Proposal
          </button>

          <button
            onClick={() => navigate("/recruitment")}
            className="
              px-8
              py-4
              rounded-full
              border
              border-white/20
              text-white
              font-semibold
              hover:bg-white
              hover:text-slate-900
              transition-all
              duration-300
            "
          >
            Workforce Solutions
          </button>
        </div>

        {/* Bottom Text */}

        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-14"
        >
          <p className="text-slate-400">
            Trusted by energy operators, drilling contractors and
            project teams across India, GCC, Africa and international markets.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProjectsCTA;