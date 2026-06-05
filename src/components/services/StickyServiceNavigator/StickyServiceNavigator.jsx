function StickyServiceNavigator() {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    ["drilling", "Drilling"],
    ["workover", "Workover"],
    ["om", "O&M"],
    ["equipment", "Equipment"],
    ["manpower", "Manpower"],
    ["training", "Training"],
  ];

  return (
    <section className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex gap-4 overflow-x-auto">

          {services.map(([id, label]) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-100 hover:bg-red-600 hover:text-white transition-all duration-300"
            >
              {label}
            </button>
          ))}

        </div>
      </div>
    </section>
  );
}

export default StickyServiceNavigator;