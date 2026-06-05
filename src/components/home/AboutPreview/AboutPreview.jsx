import aboutImg from "../../../assets/images/about-preview.jpg";

function AboutPreview() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        <div
          data-aos="fade-right"
          className="relative"
        >
          <img
            src={aboutImg}
            alt=""
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute -bottom-8 -left-8 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
            <h3 className="text-3xl font-bold">
              10+
            </h3>
            <p>Years Of Growth</p>
          </div>
        </div>

        <div data-aos="fade-left">

          <span className="uppercase text-red-600 font-semibold tracking-[0.3em]">
            About Us
          </span>

          <h2 className="text-5xl font-bold text-slate-900 mt-4">
            A Trusted Partner In
            <span className="block text-red-600">
              Energy And Beyond
            </span>
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed">
            South Asia Consultancy Services Pvt. Ltd.
            delivers integrated workforce solutions,
            equipment support and operational expertise
            for energy projects worldwide.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">

            {[
              "Industry Expertise",
              "Advanced Equipment",
              "Strong HSE Culture",
              "Client-First Approach",
            ].map((item) => (
              <div
                key={item}
                className="bg-slate-100 rounded-xl p-4 font-medium"
              >
                {item}
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutPreview;