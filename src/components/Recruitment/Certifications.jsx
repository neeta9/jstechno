function Certifications() {
  const certifications = [
    {
      title: "ISO 9001",
      description: "Quality Management System",
    },
    {
      title: "ISO 14001",
      description: "Environmental Management",
    },
    {
      title: "ISO 45001",
      description: "Occupational Health & Safety",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div
          className="text-center mb-14"
          data-aos="fade-up"
        >
          <span className="text-red-600 font-semibold uppercase tracking-wider">
            Certifications
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-3">
            Certified for Quality, Safety &
            Environmental Excellence
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {certifications.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 150}
              className="
                group
                bg-white
                rounded-2xl
                border
                border-slate-200
                p-8
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div
                className="
                  w-14
                  h-14
                  rounded-full
                  bg-red-50
                  text-red-600
                  flex
                  items-center
                  justify-center
                  font-bold
                  text-lg
                  mb-6
                  transition-all
                  duration-300
                  group-hover:bg-red-600
                  group-hover:text-white
                "
              >
                {index + 1}
              </div>

              <h3
                className="
                  text-xl
                  font-bold
                  text-slate-900
                  mb-3
                  transition-colors
                  duration-300
                  group-hover:text-red-600
                "
              >
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>

              <div
                className="
                  mt-6
                  h-[2px]
                  w-0
                  bg-red-600
                  group-hover:w-full
                  transition-all
                  duration-500
                "
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Certifications;