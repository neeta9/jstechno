function FeaturedProjects() {
  const projects = [
    {
      title: "Offshore Drilling Operations",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200",
    },
    {
      title: "Well Workover & Completion",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200",
    },
    {
      title: "O&M Support Services",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200",
    },
  ];

  return (
    <section className="py-28 bg-[#071A2F]">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <span className="uppercase tracking-[0.3em] text-red-500">
            Featured Projects
          </span>

          <h2 className="text-5xl font-bold text-white mt-4">
            Proven Track Record
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-3xl overflow-hidden"
            >
              <img
                src={project.image}
                alt=""
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              <div className="absolute bottom-6 left-6">
                <h3 className="text-white text-2xl font-bold">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProjects;