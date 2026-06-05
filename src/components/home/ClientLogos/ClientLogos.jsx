function ClientLogosMarquee() {
  const clients = [
    "ONGC",
    "Oil India",
    "Vedanta",
    "Cairn",
    "Selan",
    "Punj Lloyd",
    "JTI",
    "Stone Hill",
    "Neuvo",
    "Radial Drilling",
  ];

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">

      <div className="text-center mb-16">

        <span className="uppercase tracking-[0.3em] text-red-500 text-sm font-semibold">
          Trusted Partnerships
        </span>

        <h2 className="mt-5 text-5xl font-bold text-white">
          Trusted By Industry Leaders
        </h2>

      </div>

      <div className="relative">

        <div className="flex gap-10 animate-[scroll_25s_linear_infinite] whitespace-nowrap">

          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="bg-white min-w-[220px] rounded-[24px] p-10 text-center shadow-xl"
            >
              <h3 className="font-bold text-slate-900 text-xl">
                {client}
              </h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ClientLogosMarquee;