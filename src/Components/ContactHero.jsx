function ContactHero() {
  return (
    <section className="bg-[#161E33] py-28 md:py-36">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        
        {/* Badge */}
        <span className="mb-8 rounded-full border border-[#B88A2F] px-5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#B88A2F]">
          Available 24/7
        </span>

        {/* Heading */}
        <h1
          className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Connect with Divine Excellence
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">
          Experience world-class medical support. Our dedicated team is
          available around the clock to assist with your medical inquiries and
          care coordination.
        </p>

      </div>
    </section>
  );
}

export default ContactHero;