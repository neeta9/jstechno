import nitrogenImg from "../../../assets/serviceImages/nitrogen.png";
import pumpingImg from "../../../assets/serviceImages/pumping.png";
import compressorImg from "../../../assets/serviceImages/compressor.png";
import generatorImg from "../../../assets/serviceImages/generator.png";
import transportImg from "../../../assets/serviceImages/transport.png";
import trainingImg from "../../../assets/serviceImages/training.png";

const equipment = [
  {
    title: "Nitrogen Pumping Units",
    image: nitrogenImg,
    desc: "High-pressure nitrogen services supporting drilling and production operations.",
  },

  {
    title: "Mobile Pumping Units",
    image: pumpingImg,
    desc: "Reliable pumping systems for field operations and intervention campaigns.",
  },

  {
    title: "Air Compressors",
    image: compressorImg,
    desc: "Portable compressed air solutions for industrial and oilfield requirements.",
  },

  {
    title: "Generator Sets",
    image: generatorImg,
    desc: "Power generation packages for remote energy projects.",
  },

  {
    title: "Crude Transportation",
    image: transportImg,
    desc: "Safe and efficient transportation support for production operations.",
  },

  {
    title: "Dual Fuel & Training Solutions",
    image: trainingImg,
    desc: "Operational efficiency programs and workforce development services.",
  },
];

function SpecializedEquipmentGrid() {
  return (
    <section id="equipment" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div
          data-aos="fade-up"
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-red-600 uppercase tracking-wider font-semibold">
            Equipment Portfolio
          </span>

          <h2 className="text-4xl font-bold text-slate-900 mt-4">
            Specialized Equipment Services
          </h2>

          <p className="mt-6 text-slate-600">
            Advanced equipment solutions supporting drilling,
            intervention, production and logistics operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {equipment.map((item, index) => (
            <div
              key={item.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group bg-white rounded-3xl overflow-hidden border shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 mt-4">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SpecializedEquipmentGrid;