import { FaArrowRight, FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import heroImage from "../assets/images/project1.jpg";

const blogs = [
  {
    title: "Top Construction Trends Shaping Nigeria in 2026",
    category: "Construction",
    author: "Nomik Ltd",
    date: "August 5, 2026",
    image: heroImage,
    excerpt:
      "Discover the latest innovations, sustainable practices, and technologies transforming Nigeria's construction industry.",
  },
  {
    title: "5 Interior Design Tips for Luxury Homes",
    category: "Interior Design",
    author: "Nomik Ltd",
    date: "July 28, 2026",
    image: heroImage,
    excerpt:
      "Learn how thoughtful layouts, lighting, and material selection can elevate your home's interior.",
  },
  {
    title: "Project Management Strategies That Deliver Results",
    category: "Project Management",
    author: "Nomik Ltd",
    date: "July 15, 2026",
    image: heroImage,
    excerpt:
      "Explore proven planning and execution strategies that keep projects on schedule and within budget.",
  },
  {
    title: "Real Estate Investment Opportunities in Lagos",
    category: "Real Estate",
    author: "Nomik Ltd",
    date: "July 2, 2026",
    image: heroImage,
    excerpt:
      "A guide to identifying high-growth investment opportunities across Lagos and surrounding markets.",
  },
];

function Blog() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Blog
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Insights, Ideas & Industry Updates
          </h1>

          <div className="mx-auto mt-5 h-1 w-24 rounded bg-blue-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Stay informed with expert articles on construction, architecture,
            project management, interior design, and real estate.
          </p>

          {/* Search */}

          <div className="mx-auto mt-12 max-w-xl">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-full border border-gray-300 px-6 py-4 outline-none transition focus:border-blue-500"
            />
          </div>
        </div>

        {/* Featured */}

        <div className="mt-24 overflow-hidden rounded-[32px] bg-white shadow-xl lg:grid lg:grid-cols-2">
          <img
            src={heroImage}
            alt="Featured"
            className="h-full w-full object-cover"
          />

          <div className="flex flex-col justify-center p-12">
            <span className="w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Featured Article
            </span>

            <h2 className="mt-6 text-4xl font-bold">
              Building Sustainable Spaces for Tomorrow
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Sustainability is redefining the construction industry. Discover
              how innovative building materials, smart technologies, and
              environmentally responsible design practices are shaping the
              future.
            </p>

            <button className="mt-8 flex w-fit items-center gap-3 rounded-xl bg-blue-500 px-7 py-4 font-semibold text-white transition hover:bg-blue-600">
              Read Article
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Latest Articles */}

        <div className="mt-24">
          <div className="mb-14 flex items-center justify-between">
            <h2 className="text-4xl font-bold">Latest Articles</h2>

            <button className="font-semibold text-blue-500 hover:text-blue-600">
              View All
            </button>
          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-7">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                    {blog.category}
                  </span>

                  <h3 className="mt-5 text-2xl font-bold leading-snug">
                    {blog.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt />
                      {blog.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <FaUserAlt />
                      {blog.author}
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-gray-600">{blog.excerpt}</p>

                  <button className="mt-8 flex items-center gap-3 font-semibold text-blue-500 transition hover:gap-5">
                    Read More
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}

        <div className="mt-28 rounded-[32px] bg-blue-600 px-10 py-16 text-center text-white">
          <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Get the latest insights on construction, architecture, interior
            design and real estate delivered directly to your inbox.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-xl px-5 py-4 text-gray-800 outline-none"
            />

            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
