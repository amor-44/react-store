import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="min-h-[calc(100vh-8rem)] bg-white px-4 py-12 text-gray-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            Get In Touch
          </p>

          <h1 className="mt-3 text-4xl font-bold sm:text-5xl">
            Let's Talk
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-400">
            Have a question, feedback, or just want to say hello?
            We'd love to hear from you.
          </p>
        </div>

        {/* Main Content */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Left Side */}
          <div className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">
            <div>
              <span className="inline-flex rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400">
                🟢 Available for opportunities
              </span>

              <h2 className="mt-8 text-3xl font-bold">
                Let's build something great together.
              </h2>

              <p className="mt-5 max-w-lg leading-7 text-gray-600 dark:text-gray-400">
                Whether you have a question about our products, want to
                share feedback, or simply want to connect, feel free to
                reach out.
              </p>
            </div>

            <div className="mt-12 space-y-5">

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <a
                  href="mailto:hamr6653@gmail.com"
                  className="mt-1 block font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
                >
                  hamr6653@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p className="mt-1 font-medium">
                  Mansoura, Egypt
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Social
                </p>

                <div className="mt-2 flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/amr-hesham-10082a276/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://github.com/amor-44"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
                  >
                    GitHub
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-10">

            <h2 className="text-2xl font-bold">
              Send a Message
            </h2>

            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Fill out the form and let us know how we can help.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  placeholder="Your name"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  placeholder="Write your message..."
                  required
                  rows={6}
                  className="w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none transition-colors focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-indigo-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-indigo-700"
              >
                Send Message 
              </button>

              {submitted && (
                <p className="rounded-lg bg-green-50 p-3 text-center text-sm font-medium text-green-700 dark:bg-green-500/10 dark:text-green-400">
                  Thanks! Your message has been submitted successfully.
                </p>
              )}

            </form>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            Want to explore the store first?
          </p>

          <Link
            to="/products"
            className="mt-3 inline-block font-semibold text-indigo-600 transition-colors hover:text-indigo-700 dark:text-indigo-400"
          >
            Browse our products →
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Contact;