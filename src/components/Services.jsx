import services from "../data/services";

function Services() {
  return (
    <section
      id="services"

      className="relative overflow-hidden bg-linear-to-br from-slate-50 via-white to-blue-50 py-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-100 blur-3xl opacity-40"></div>
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-blue-500">
            Our Services
          </p>

          <h2 className="mt-4 text-5xl font-bold">What We Do</h2>

          <div className="mx-auto mt-4 h-1 w-40 rounded bg-blue-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-10 shadow-sm transition duration-300 hover:-translate-y-3 hover:shadow-xl"
              >
                <Icon className="mb-8 text-5xl text-blue-500 transition group-hover:scale-110" />

                <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>

                <p className="leading-7 text-gray-600">{service.text}</p>

                <button className="mt-8 text-3xl text-blue-500 transition group-hover:translate-x-2">
                  →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
