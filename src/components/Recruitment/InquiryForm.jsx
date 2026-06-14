import React from "react";

function InquiryForm() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left Side */}

          <div>

            <span className="text-red-600 uppercase tracking-[0.25em] text-sm font-semibold">
              Contact Us
            </span>

            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900">
              Discuss Your Workforce Requirements
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Share your manpower requirements and our recruitment
              specialists will connect with you to discuss suitable
              workforce solutions.
            </p>

            <div className="mt-10 space-y-6">

              <div>
                <h4 className="font-semibold text-slate-900">
                  Ahmedabad Office
                </h4>

                <p className="text-slate-600 mt-2">
                  SAC Recruitment & Workforce Solutions
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Phone
                </h4>

                <p className="text-slate-600 mt-2">
                  +91 9316305258
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Email
                </h4>

                <p className="text-slate-600 mt-2">
                  info@southasiaconsultancy.com
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="bg-white rounded-[32px] shadow-xl p-8">

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="email"
                  placeholder="Email Address"
                  className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-500"
                />

              </div>

              <input
                type="text"
                placeholder="Workforce Requirement"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-500"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your workforce needs..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-red-500 resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition"
              >
                Submit Inquiry
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default InquiryForm;