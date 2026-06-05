import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function IndustriesPreview() {
  const navigate = useNavigate();

  const industries = [
    {
      title: "Oil & Gas Exploration",
      image:
        "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200",
      slug: "oil-gas",
    },
    {
      title: "Offshore Platforms",
      image:
        "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1200",
      slug: "offshore",
    },
    {
      title: "Onshore Fields",
      image:
        "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=1200",
      slug: "onshore",
    },
    {
      title: "Energy Infrastructure",
      image:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1200",
      slug: "infrastructure",
    },
    {
      title: "Petrochemical Industry",
      image:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200",
      slug: "petrochemical",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <span
            data-aos="fade-up"
            className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold"
          >
            Industries We Serve
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-5 text-5xl font-bold text-slate-900"
          >
            Sector Expertise Across
            <span className="text-red-500"> Global Markets</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto"
          >
            Supporting exploration, production, infrastructure and
            industrial operations with specialized workforce and
            operational solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {industries.map((industry, index) => (
            <div
              key={industry.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-[32px] h-[340px] cursor-pointer"
              onClick={() =>
                navigate(`/industries/${industry.slug}`)
              }
            >
              <img
                src={industry.image}
                alt={industry.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#041E42] via-[#041E42]/60 to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">

                <h3 className="text-3xl font-bold text-white">
                  {industry.title}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-red-400 font-semibold group-hover:translate-x-2 transition">
                  Explore Industry
                  <ArrowRight size={18} />
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default IndustriesPreview;