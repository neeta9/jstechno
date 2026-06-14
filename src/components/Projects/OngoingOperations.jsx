function OngoingOperations() {
  const operations = [
    {
      location: "Mumbai Offshore",
      project: "Jack-Up Rig Sagar Shakti",
      status: "Active",
    },
    {
      location: "Cambay Asset",
      project: "Land Rig Operations",
      status: "Active",
    },
    {
      location: "Ahmedabad Asset",
      project: "Workover Programs",
      status: "Active",
    },
    {
      location: "Karaikal",
      project: "2 Workover Rigs",
      status: "Active",
    },
    {
      location: "Assam",
      project: "Oil India Operations",
      status: "Active",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div
          data-aos="fade-up"
          className="text-center mb-16"
        >
          <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
            Ongoing Operations
          </span>

          <h2 className="mt-5 text-5xl font-bold text-white">
            Active Energy Assets Across India
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
            SAC continues to support drilling, workover and offshore
            operations across strategic energy locations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}

          <div
            data-aos="fade-right"
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="rounded-[32px] shadow-2xl"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-3xl p-5 shadow-xl">
              <h3 className="text-3xl font-bold text-red-600">
                42+
              </h3>

              <p className="text-slate-600">
                Active Operational Assets
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div
            data-aos="fade-left"
            className="space-y-5"
          >
            {operations.map((item, index) => (
              <div
                key={index}
                className="
                group
                bg-slate-800
                border
                border-slate-700
                rounded-3xl
                p-6
                hover:border-red-500
                hover:-translate-y-2
                transition-all
                duration-500
                "
              >
                <div className="flex justify-between items-start">

                  <div>
                    <p className="text-red-500 font-semibold">
                      {item.location}
                    </p>

                    <h3 className="text-2xl text-white font-bold mt-2">
                      {item.project}
                    </h3>
                  </div>

                  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold">
                    {item.status}
                  </span>

                </div>

                <div className="mt-5 h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div className="w-4/5 h-full bg-red-500 rounded-full group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default OngoingOperations;