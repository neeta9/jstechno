import trainingImg from "../../assets/serviceImages/training.png";

function TrainingSection() {
  return (
    <section
      id="training"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">
            <img
              src={trainingImg}
              alt="Training"
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div data-aos="fade-left">

            <span className="uppercase tracking-wider text-red-500 font-semibold">
              Training Programs
            </span>

            <h2 className="text-5xl font-bold mt-4">
              IWCF & IADC Safety Training
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              SAC supports workforce competency through
              internationally recognized well control,
              safety and operational training programs.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-10">

              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="font-semibold">
                  Well Control
                </h4>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="font-semibold">
                  HSE Programs
                </h4>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="font-semibold">
                  IWCF Standards
                </h4>
              </div>

              <div className="bg-white/10 rounded-2xl p-5">
                <h4 className="font-semibold">
                  IADC Programs
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TrainingSection;