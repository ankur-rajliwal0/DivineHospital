import FaculityHero from "../assets/images/faculityHero.jpg";

function HeroDoctors() {
  return (
    <section
      className="relative h-[80vh] min-h-[600px] bg-cover bg-center"
      style={{ backgroundImage: `url(${FaculityHero})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block rounded-full border border-white/20 bg-[#d6b05b] px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#111]">
            Our Medical Experts
          </span>

          {/* Heading */}
          <h1 className="mt-8 font-serif text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Meet Our
            <br />
            <span className="text-[#e7c77c]">Dedicated Medical Team</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-200">
            Our experienced doctors, surgeons, and healthcare professionals are
            committed to delivering compassionate, personalized, and
            evidence-based medical care. With advanced technology and years of
            expertise, we ensure the highest standards of treatment for every
            patient.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroDoctors;