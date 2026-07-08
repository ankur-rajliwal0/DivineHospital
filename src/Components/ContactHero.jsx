import ContactHeropic from "../assets/images/ContactHero.jpg";

function ContactHero() {
  return (
    <section
      className="relative h-[75vh] min-h-[550px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${ContactHeropic})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#161E33]/90 via-[#161E33]/70 to-[#161E33]/40"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <span className="inline-block rounded-full border border-[#B88A2F]/70 bg-[#B88A2F]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#E7C77C] backdrop-blur-sm">
            Available 24/7
          </span>

          {/* Heading */}
          <h1
            className="mt-8 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Connect with
            <br />
            <span className="text-[#E7C77C]">Divine Hospital</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-200">
            Experience world-class healthcare with compassionate support. Our
            dedicated team is available around the clock to answer your
            questions, schedule appointments, and ensure you receive the care
            you deserve.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;