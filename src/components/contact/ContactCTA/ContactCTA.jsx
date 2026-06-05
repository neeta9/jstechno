import { useNavigate } from "react-router-dom";

function ContactCTA() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Ready To Build Your Team?
        </h2>

        <p className="mt-6 text-xl text-slate-300">
          Speak with our specialists and get the right workforce
          solution for your project.
        </p>

        <div className="flex justify-center gap-4 mt-10">

          <button
            onClick={() => navigate("/recruitment")}
            className="px-8 py-4 rounded-full bg-red-600 text-white font-semibold"
          >
            Workforce Solutions
          </button>

          <button
            onClick={() => navigate("/projects")}
            className="px-8 py-4 rounded-full border border-white/20 text-white"
          >
            View Projects
          </button>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;