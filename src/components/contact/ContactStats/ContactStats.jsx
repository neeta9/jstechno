function ContactStats() {
  const stats = [
    ["24/7", "Support"],
    ["4", "Global Offices"],
    ["350+", "Projects"],
    ["72 Hrs", "Mobilization"],
  ];

  return (
    <section className="py-20 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map(([num, text], index) => (
            <div
              key={text}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
              bg-slate-800
              rounded-[28px]
              p-8
              text-center
              hover:-translate-y-2
              transition-all
              "
            >
              <h3 className="text-5xl font-bold text-red-500">
                {num}
              </h3>

              <p className="mt-3 text-slate-300">
                {text}
              </p>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default ContactStats;