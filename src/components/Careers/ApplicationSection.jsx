import {
  Mail,
  Phone,
  MapPin,
  Upload,
} from "lucide-react";

function ApplicationSection() {
  return (
    <section
      id="application-section"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}

          <div data-aos="fade-right">

            <span className="uppercase tracking-[0.3em] text-red-600 text-sm font-semibold">
              Apply Today
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
              Ready To Join
              <span className="text-red-500">
                {" "}South Asia Consultancy?
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              SAC believes in professional growth, technical excellence,
              safety and teamwork. Submit your application and become
              part of our global workforce network.
            </p>

            <div className="space-y-6 mt-10">

              <div className="flex gap-4">
                <Mail className="text-[#0BB39C]" />
                <span className="text-slate-700">
                  info@southasiaconsultancy.com
                </span>
              </div>

              <div className="flex gap-4">
                <Phone className="text-[#0BB39C]" />
                <span className="text-slate-700">
                  +91 9316305258
                </span>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-[#0BB39C]" />
                <span className="text-slate-700">
                  Ahmedabad • Mumbai • Dubai
                </span>
              </div>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-white rounded-[24px] p-6 shadow-md">
                <h3 className="text-3xl font-bold text-red-500">
                  350+
                </h3>

                <p className="text-slate-600 mt-2">
                  Projects Delivered
                </p>
              </div>

              <div className="bg-white rounded-[24px] p-6 shadow-md">
                <h3 className="text-3xl font-bold text-red-500">
                  15+
                </h3>

                <p className="text-slate-600 mt-2">
                  Countries Served
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div
            data-aos="fade-left"
            className="
            bg-white
            rounded-[32px]
            p-8
            shadow-xl
            "
          >

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Position Applying For"
                className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                focus:outline-none
                focus:border-[#0BB39C]
                "
              />

              <input
                type="text"
                placeholder="Full Name"
                className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                focus:outline-none
                focus:border-[#0BB39C]
                "
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                focus:outline-none
                focus:border-[#0BB39C]
                "
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                focus:outline-none
                focus:border-[#0BB39C]
                "
              />

              <textarea
                rows="5"
                placeholder="Tell us about yourself..."
                className="
                w-full
                px-5
                py-4
                rounded-2xl
                border
                focus:outline-none
                focus:border-[#0BB39C]
                "
              />

              <label
                className="
                flex
                items-center
                gap-3
                border
                rounded-2xl
                p-4
                cursor-pointer
                "
              >
                <Upload size={18} />

                <span>
                  Upload Resume
                </span>

                <input
                  type="file"
                  className="hidden"
                />
              </label>

              <button
                type="submit"
                className="
                group
                relative
                overflow-hidden
                w-full
                px-8
                py-4
                rounded-full
                bg-red-600
                text-white
                font-semibold
                hover:-translate-y-1
                hover:shadow-[0_15px_35px_rgba(239,68,68,0.35)]
                transition-all
                duration-300
                "
              >
                <span className="relative z-10">
                  Submit Application
                </span>

                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-all duration-700"></span>
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ApplicationSection;