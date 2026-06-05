import { MapPin, Phone, Mail } from "lucide-react";

function ContactOffices() {
  const offices = [
    {
      title: "Registered Office",
      address:
        "402 Orange Mall, Ahmedabad, Gujarat",
      primary: true,
    },
    {
      title: "Regional Office",
      address:
        "Hubtown Viva Building, Mumbai",
    },
    {
      title: "Dubai Office",
      address:
        "SAIF Zone, Sharjah, UAE",
    },
    {
      title: "Operations Office",
      address:
        "Palladium Business Hub, Ahmedabad",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div
          data-aos="fade-up"
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          p-10
          border
          border-red-100
          "
        >
          <div className="flex items-center gap-4">

            <MapPin className="text-red-600" />

            <h2 className="text-3xl font-bold">
              Registered Office
            </h2>

          </div>

          <p className="mt-5 text-lg text-slate-600">
            402 Orange Mall, Mehsana Highway,
            Ahmedabad, Gujarat 382424
          </p>

          <div className="mt-6 flex flex-wrap gap-6">

            <a
              href="tel:+919316305258"
              className="text-red-600 font-semibold"
            >
              <Phone size={18} className="inline mr-2" />
              +91 9316305258
            </a>

            <a
              href="mailto:info@southasiaconsultancy.com"
              className="text-red-600 font-semibold"
            >
              <Mail size={18} className="inline mr-2" />
              Email Us
            </a>

          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          {offices.slice(1).map((office, index) => (
            <div
              key={office.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="
              bg-white
              rounded-[30px]
              p-8
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all
              duration-500
              "
            >
              <h3 className="text-2xl font-bold">
                {office.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {office.address}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ContactOffices;