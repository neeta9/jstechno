function EquipmentStats() {
  const stats = [
    ["42+", "Active Assets"],
    ["99%", "Reliability"],
    ["350+", "Deployments"],
    ["72 Hrs", "Mobilization"],
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {stats.map(([number, label], index) => (
            <div
              key={label}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="
              bg-white
              rounded-[30px]
              p-10
              shadow-lg
              text-center
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >
              <h3 className="text-5xl font-bold text-red-500">
                {number}
              </h3>

              <p className="mt-4 text-slate-600">
                {label}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default EquipmentStats;