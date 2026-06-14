import { useNavigate } from "react-router-dom";

function IndustriesCTA() {

  const navigate = useNavigate();

  return (
    <section className="py-24 bg-white">

      <div className="max-w-5xl mx-auto text-center px-6">

        <h2 className="text-5xl font-bold text-slate-900">
          Looking For Industry-Specific Solutions?
        </h2>

        <p className="text-slate-600 mt-6 text-xl">
          Connect with our experts to discuss your
          operational and workforce requirements.
        </p>

        <div className="flex justify-center gap-5 mt-10">

          <button
            onClick={() => navigate("/contact")}
            className="
              px-8 py-4 rounded-full
              bg-red-600 text-white font-semibold
              hover:-translate-y-1
              hover:shadow-xl
              transition-all duration-300
            "
          >
            Contact Us
          </button>

          <button
            onClick={() => navigate("/services")}
            className="
              px-8 py-4 rounded-full
              border border-slate-300
              hover:bg-slate-900
              hover:text-white
              transition-all duration-300
            "
          >
            View Services
          </button>

        </div>

      </div>

    </section>
  );
}

export default IndustriesCTA;