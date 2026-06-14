import { useNavigate } from "react-router-dom";

function HomeCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-[#041E42] overflow-hidden">

      <div className="absolute left-0 top-0 w-96 h-96 bg-red-500/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-red-500/10 blur-[140px]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <span
          data-aos="fade-up"
          className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold"
        >
          Ready To Get Started?
        </span>

        <h2
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-5xl lg:text-6xl font-bold text-white"
        >
          Ready To Power
          <span className="block text-red-500">
            Your Next Project?
          </span>
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-8 text-xl text-slate-300"
        >
          Partner with SAC for drilling, workover,
          O&M, manpower and equipment solutions
          delivered with speed, safety and reliability.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-5 mt-12"
        >

          <button
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
            Request Proposal
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="
            px-8
            py-4
            rounded-full
            border
            border-white/20
            text-white
            hover:bg-white
            hover:text-slate-900
            hover:-translate-y-1
            transition-all
            duration-300
            "
          >
            Contact Team
          </button>

        </div>

      </div>

    </section>
  );
}

export default HomeCTA;