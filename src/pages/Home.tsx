import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white px-6 text-gray-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
          Welcome to React Store
        </p>

        <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
          Everything You Need,
          <span className="block text-indigo-600 dark:text-indigo-400">
            All in One Place.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
          Discover a collection of quality products with a simple,
          modern, and enjoyable shopping experience.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/products"
            className="rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white transition-all duration-200 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-500/20"
          >
            Shop Now
          </Link>

          <Link
            to="/about"
            className="rounded-lg border border-gray-300 bg-white px-7 py-3 font-semibold text-gray-900 transition-all duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;