function ContactMapForm() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-10">

          <div
            data-aos="fade-right"
            className="
            rounded-[32px]
            overflow-hidden
            shadow-xl
            min-h-[500px]
            "
          >
            <iframe
              title="map"
              src="https://maps.google.com/maps?q=Ahmedabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
            />
          </div>

          <div
            data-aos="fade-left"
            className="
            bg-slate-50
            rounded-[32px]
            p-10
            shadow-xl
            "
          >
            <h2 className="text-4xl font-bold">
              Get In Touch
            </h2>

            <form className="mt-8 space-y-5">

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="First Name"
                  className="p-4 rounded-2xl border"
                />

                <input
                  placeholder="Last Name"
                  className="p-4 rounded-2xl border"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <input
                  placeholder="Phone"
                  className="p-4 rounded-2xl border"
                />

                <input
                  placeholder="Email"
                  className="p-4 rounded-2xl border"
                />

              </div>

              <textarea
                rows="5"
                placeholder="Project Requirements"
                className="w-full p-4 rounded-2xl border"
              />

              <button
                type="submit"
                className="
                group
                relative
                overflow-hidden
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
                <span className="relative z-10">
                  Submit Inquiry
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

export default ContactMapForm;