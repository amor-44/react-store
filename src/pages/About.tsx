import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white px-4 py-12 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Hero */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            About React Store
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Simple Shopping.
            <span className="block text-indigo-600 dark:text-indigo-400">
              Better Experience.
            </span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
            React Store is a modern e-commerce experience built to make
            discovering products simple, fast, and enjoyable.
          </p>
        </div>

        {/* Who We Are */}
        <div className="mt-16 grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              Who We Are
            </h2>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              We believe online shopping should be simple and enjoyable.
              React Store provides a clean and modern experience where you
              can explore products, view detailed information, and manage
              your shopping cart with ease.
            </p>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              Our goal is to create a smooth shopping experience that feels
              fast, intuitive, and easy to use on every device.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-2xl font-bold">
              Built with Modern Technologies
            </h3>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              This store is built with modern front-end technologies
              focused on performance, reusable components, and a smooth
              user experience.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "TypeScript", "Tailwind CSS", "React Router"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Why Choose React Store?
            </h2>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Everything is designed to make your shopping experience better.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-4 font-bold">Fast Experience</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Enjoy a fast and smooth shopping experience.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="text-3xl">📦</div>
              <h3 className="mt-4 font-bold">Quality Products</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Explore a collection of products in one place.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="text-3xl">📱</div>
              <h3 className="mt-4 font-bold">Fully Responsive</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Shop comfortably from any device or screen size.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="text-3xl">💙</div>
              <h3 className="mt-4 font-bold">Simple & Easy</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                A clean interface designed with simplicity in mind.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl border border-gray-200 bg-white px-6 py-12 text-center text-gray-900 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 dark:text-white">
          <h2 className="text-3xl font-bold">
            Ready to Explore?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
            Discover our products and find something you love.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            Browse Products
          </Link>
        </div>

      </div>
    </section>
  );
};

export default About;