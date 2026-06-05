function CompletedProjects() {
  const projects = [
    {
      title: "Seaboss & Offshore Jack-Up Operations",
      location: "Persian Gulf",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600",
      description:
        "Managed offshore jack-up rig operations across multiple assets while maintaining operational efficiency, workforce safety and high-performance standards.",
      tags: ["Offshore", "Jack-Up Rig", "O&M"],
    },
    {
      title: "Onshore Drilling Operations",
      location: "Bahrain",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1600",
      description:
        "Delivered drilling support, technical manpower deployment and operational services for strategic onshore energy assets.",
      tags: ["Drilling", "Manpower", "Operations"],
    },
    {
      title: "International Offshore Campaigns",
      location: "Kazakhstan • Nigeria • Oman • Kuwait",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600",
      description:
        "Provided technical specialists, offshore crews and maintenance support across multiple international offshore campaigns.",
      tags: ["International", "Offshore", "Maintenance"],
    },
  ];

  return (
    <section
      id="completed-projects"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          data-aos="fade-up"
          className="text-center mb-20"
        >
          <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
            Completed Projects
          </span>

          <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
            International Project Portfolio
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            A proven track record of delivering workforce,
            drilling and offshore operational solutions across
            major energy markets.
          </p>
        </div>

        {/* Projects */}

        <div className="space-y-28">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 !== 0
                  ? "lg:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              {/* Image */}

              <div
                data-aos={
                  index % 2 === 0
                    ? "fade-right"
                    : "fade-left"
                }
                className="relative group"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  rounded-[32px]
                  shadow-xl
                  w-full
                  h-[420px]
                  object-cover
                  transition-all
                  duration-700
                  group-hover:scale-[1.03]
                  "
                />

                {/* Overlay Badge */}

                <div
                  className="
                  absolute
                  bottom-6
                  left-6
                  bg-white
                  rounded-2xl
                  px-5
                  py-3
                  shadow-lg
                  "
                >
                  <span className="text-red-600 font-semibold">
                    {project.location}
                  </span>
                </div>
              </div>

              {/* Content */}

              <div
                data-aos={
                  index % 2 === 0
                    ? "fade-left"
                    : "fade-right"
                }
              >
                <span
                  className="
                  inline-flex
                  items-center
                  px-5
                  py-2
                  rounded-full
                  bg-red-100
                  text-red-600
                  font-semibold
                  "
                >
                  {project.location}
                </span>

                <h3
                  className="
                  text-3xl
                  lg:text-4xl
                  font-bold
                  text-slate-900
                  mt-6
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                  mt-6
                  text-lg
                  text-slate-600
                  leading-relaxed
                  "
                >
                  {project.description}
                </p>

                {/* Tags */}

                <div className="flex flex-wrap gap-3 mt-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                      px-4
                      py-2
                      rounded-full
                      bg-slate-100
                      text-slate-700
                      text-sm
                      font-medium
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}

                <button
                  className="
                  mt-8
                  px-8
                  py-4
                  rounded-full
                  bg-red-600
                  text-white
                  font-semibold
                  hover:-translate-y-1
                  hover:shadow-xl
                  transition-all
                  duration-300
                  "
                >
                  View Project Details
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default CompletedProjects;