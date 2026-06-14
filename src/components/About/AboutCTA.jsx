import { useNavigate } from "react-router-dom";

function AboutCTA() {

  const navigate = useNavigate();

  return (
    <section className="py-24 bg-gradient-to-r from-slate-950 to-slate-900">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2
          data-aos="fade-up"
          className="text-5xl font-bold text-white"
        >
          Ready To Work With SAC?
        </h2>

        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-slate-300 mt-6 text-xl"
        >
          Partner with a trusted workforce and operational
          solutions provider serving global energy projects.
        </p>

        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex flex-wrap justify-center gap-5 mt-10"
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
            Contact Us
          </button>

          <button
            onClick={() => navigate("/projects")}
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
              hover:-translate-y-1
              transition-all
              duration-300
            "
          >
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}

export default AboutCTA;