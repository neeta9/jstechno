function OperationalFootprint() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div data-aos="fade-right">
            <img
              src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="rounded-[32px] shadow-xl"
            />
          </div>

          <div data-aos="fade-left">

            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
              Operational Footprint
            </span>

            <h2 className="text-5xl font-bold text-slate-900 mt-5">
              Operations Backed By Field Experience
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              SAC manages drilling, workover and offshore assets across
              India while maintaining strong safety and performance standards.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-red-600 text-4xl font-bold">
                  42+
                </h3>
                <p>Active Rigs Under O&M</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-red-600 text-4xl font-bold">
                  Zero
                </h3>
                <p>Lost Time Injury Culture</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-red-600 text-4xl font-bold">
                  ONGC
                </h3>
                <p>Award Recognition</p>
              </div>

              <div className="rounded-3xl bg-slate-50 p-6">
                <h3 className="text-red-600 text-4xl font-bold">
                  15+
                </h3>
                <p>Years Experience</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default OperationalFootprint;