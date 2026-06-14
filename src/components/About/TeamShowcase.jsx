function TeamShowcase() {

  const team = [
    {
      name: "Operations Team",
      role: "Field Operations"
    },
    {
      name: "Recruitment Team",
      role: "Talent Acquisition"
    },
    {
      name: "Project Team",
      role: "Project Delivery"
    },
    {
      name: "Support Team",
      role: "Administration"
    }
  ];

  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-red-600 uppercase tracking-[0.3em] font-semibold">
            Our Team
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Professionals Behind Our Success
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {team.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
                bg-slate-50
                rounded-3xl
                overflow-hidden
                shadow-lg
                hover:-translate-y-3
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <img
                src="/images/team-placeholder.jpg"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="font-bold text-xl">
                  {member.name}
                </h3>

                <p className="text-red-600 mt-2">
                  {member.role}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default TeamShowcase;