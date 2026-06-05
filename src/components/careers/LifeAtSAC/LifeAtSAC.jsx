function LifeAtSAC() {
  const cards = [
    {
      title: "Professional Growth",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1800",
      desc:
        "Develop technical expertise and leadership skills through challenging projects.",
    },
    {
      title: "Global Opportunities",
      image:
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1800",
      desc:
        "Support energy projects across India, the Middle East and international markets.",
    },
    {
      title: "Collaborative Culture",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1800",
      desc:
        "Work alongside experienced professionals in a supportive environment.",
    },
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="text-center mb-16"
          data-aos="fade-up"
        ><span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
          
            Life At SAC
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            More Than Just A Job
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {cards.map((card, index) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              group
              overflow-hidden
              rounded-[32px]
              bg-white
              shadow-xl
              "
            >
              <div className="overflow-hidden">

                <img
                  src={card.image}
                  alt={card.title}
                  className="
                  w-full
                  h-[280px]
                  object-cover
                  group-hover:scale-110
                  transition-all
                  duration-700
                  "
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {card.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LifeAtSAC;