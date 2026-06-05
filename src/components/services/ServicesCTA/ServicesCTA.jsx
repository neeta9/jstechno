import { useNavigate } from "react-router-dom";

function ServicesCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2
          data-aos="fade-up"
          className="text-4xl lg:text-5xl font-bold text-white"
        >
          Need Technical Support For Your Next Project?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-6 text-xl text-slate-300"
        >
          Speak with our specialists and discover
          the right workforce and equipment solution.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center gap-4 mt-10 flex-wrap"
        >

          <button
            onClick={() => navigate("/contact")}
            className="group relative overflow-hidden px-8 py-4 rounded-full bg-red-600 text-white font-semibold hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)] transition-all duration-300"
          >
            <span className="relative z-10">
              Request Support
            </span>
          </button>

          <button
            onClick={() => navigate("/recruitment")}
            className="px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
          >
            Workforce Solutions
          </button>

        </div>

      </div>
    </section>
  );
}

export default ServicesCTA;