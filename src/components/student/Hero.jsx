export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#eaffff] to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-20 md:py-28 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight max-w-3xl mx-auto">
          Empower your future with the
          <br />
          courses designed to
          <span className="text-[#0b79ff]"> fit your choice.</span>
        </h1>

        <p className="mt-6 text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
          We bring together world-class instructors, interactive content, and a
          supportive community to help you achieve your personal and
          professional goals.
        </p>

        <form className="mt-8 md:mt-10 max-w-2xl mx-auto flex items-center gap-3">
          <label htmlFor="hero-search" className="sr-only">
            Search for courses
          </label>
          <div className="flex-1 bg-white rounded-md shadow-sm border border-gray-200 h-12 flex items-center px-3">
            <img
              src="/src/assets/search_icon.svg"
              alt="Search Icon"
              className="h-5 w-5 opacity-50"
            />
            <input
              id="hero-search"
              type="search"
              placeholder="Search for courses"
              className="w-full outline-none text-sm md:text-base ml-3"
            />
          </div>

          <button
            type="submit"
            className="h-12 px-5 rounded-md bg-[#0b79ff] hover:bg-[#096fe6] text-white font-medium transition"
          >
            Search
          </button>
        </form>

        <div className="mt-12 md:mt-16">
          <p className="text-xs text-slate-400">Trusted by learners from</p>

          <div className="mt-6 flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            <img
              src="/src/assets/microsoft_logo.svg"
              alt="Microsoft"
              className="h-6 md:h-8"
            />
            <img
              src="/src/assets/walmart_logo.svg"
              alt="Walmart"
              className="h-6 md:h-8"
            />
            <img
              src="/src/assets/accenture_logo.svg"
              alt="Accenture"
              className="h-6 md:h-8"
            />
            <img
              src="/src/assets/adobe_logo.svg"
              alt="Adobe"
              className="h-6 md:h-8"
            />
            <img
              src="/src/assets/paypal_logo.svg"
              alt="PayPal"
              className="h-6 md:h-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
