import heroImg from "../assets/images/servicesHero.jpg";

function ServicesHero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="max-w-3xl px-6 md:px-12 lg:px-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#D8B36A]">
            Excellence in Infrastructure
          </p>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
            World-Class Medical Facilities
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-gray-200">
            At Divine Hospital, we bridge the gap between cutting-edge medical
            science and premium hospitality. Our infrastructure is designed to
            provide a healing environment that meets international standards of
            safety and comfort.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ServicesHero;