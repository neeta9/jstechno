function LeadershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span className="text-red-600 font-semibold uppercase tracking-[0.3em]">
            Leadership
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Visionary Leadership Driving Growth
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div data-aos="fade-right">
            <img
              src="/images/leadership.jpg"
              alt=""
              className="rounded-3xl shadow-2xl"
            />
          </div>

          <div data-aos="fade-left">

            <h3 className="text-3xl font-bold text-slate-900">
              Mr. D. S. Rajput
            </h3>

            <p className="text-red-600 font-semibold mt-2">
              Founder & Managing Director
            </p>

            <p className="mt-6 text-slate-600 leading-relaxed">
              South Asia Consultancy was established in 2014
              under the leadership of Mr. D. S. Rajput with a
              vision of delivering world-class workforce and
              operational solutions to the energy sector.
            </p>

            <p className="mt-4 text-slate-600 leading-relaxed">
              His extensive industry experience has enabled SAC
              to successfully support drilling operations,
              production facilities, maintenance campaigns and
              large-scale workforce mobilizations across India
              and international markets.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LeadershipSection;