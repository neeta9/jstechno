import CountUp from "react-countup";

function StatsBar() {
  const stats = [
    ["20", "Years Experience"],
    ["500", "Projects Completed"],
    ["2000", "Skilled Professionals"],
    ["15", "Countries Served"],
    ["100", "Commitment to Safety"],
  ];

  return (
    <section className="relative z-20 -mt-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl grid md:grid-cols-5">

          {stats.map(([number, label]) => (
            <div
              key={label}
              className="p-6 text-center border-r last:border-r-0"
            >
              <h3 className="text-4xl font-bold text-red-600">
                <CountUp
                  end={parseInt(number)}
                  duration={3}
                />
                +
              </h3>

              <p className="mt-2 text-slate-600">
                {label}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default StatsBar;