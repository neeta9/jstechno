function GroupCompanies() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <span className="text-red-500 uppercase tracking-[0.3em] font-semibold">
          Group Companies
        </span>

        <h2 className="text-4xl font-bold text-white mt-4">
          Expanding Our Global Presence
        </h2>

        <div
          data-aos="zoom-in"
          className="
            mt-16
            bg-white
            rounded-3xl
            p-10
            shadow-2xl
          "
        >

          <img
            src="/images/group-company-logo.png"
            alt=""
            className="h-20 mx-auto"
          />

          <h3 className="text-2xl font-bold mt-6">
            South Asia Consultancy FZE
          </h3>

          <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
            Supporting international operations and workforce
            deployment across the Middle East and global
            energy markets.
          </p>

        </div>

      </div>

    </section>
  );
}

export default GroupCompanies;