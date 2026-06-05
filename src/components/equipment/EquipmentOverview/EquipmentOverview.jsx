function EquipmentOverview() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">

            <img
              src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1800"
              alt=""
              className="rounded-[32px] shadow-xl hover:scale-[1.02] transition duration-500"
            />

          </div>

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
              Capability Depth
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
              Equipment Aligned With Operational Performance
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC combines experienced manpower, equipment packages,
              maintenance systems and technology solutions to maximize
              productivity and operational reliability.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-10">

              <div className="bg-slate-50 rounded-3xl p-5">
                <h4 className="font-bold text-slate-900">
                  Rig Operations
                </h4>
              </div>

              <div className="bg-slate-50 rounded-3xl p-5">
                <h4 className="font-bold text-slate-900">
                  Equipment Packages
                </h4>
              </div>

              <div className="bg-slate-50 rounded-3xl p-5">
                <h4 className="font-bold text-slate-900">
                  Reliability Programs
                </h4>
              </div>

              <div className="bg-slate-50 rounded-3xl p-5">
                <h4 className="font-bold text-slate-900">
                  Technology Systems
                </h4>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default EquipmentOverview;