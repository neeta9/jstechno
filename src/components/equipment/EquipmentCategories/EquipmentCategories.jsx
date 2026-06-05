function EquipmentCategories() {
  const categories = [
    {
      title: "Drilling Rigs",
      description:
        "Onshore and offshore drilling assets for exploration and production.",
    },
    {
      title: "Jack-Up Units",
      description:
        "Offshore jack-up rig campaigns across global energy markets.",
    },
    {
      title: "Workover Packages",
      description:
        "High-performance workover equipment and support systems.",
    },
    {
      title: "Power Systems",
      description:
        "DG sets, dual-fuel systems and power generation packages.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Equipment Portfolio
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            Asset Categories
          </h2>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {categories.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              bg-white
              rounded-[30px]
              p-8
              shadow-lg
              border
              border-transparent
              hover:border-red-500
              hover:-translate-y-2
              hover:shadow-xl
              transition-all
              duration-500
              "
            >
              <h3 className="text-2xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default EquipmentCategories;