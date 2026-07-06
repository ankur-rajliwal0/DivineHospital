function HeroDoctors() {
  return (
    <section className="bg-[#faf9f7] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Badge */}
        <span className="inline-block rounded bg-[#f3d492] px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#7d5b12]">
          Our Medical Experts
        </span>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl font-serif text-5xl font-bold leading-tight text-[#111] md:text-6xl lg:text-7xl">
          Leading Specialists Committed to
          <br />
          <span>Your Long-Term Wellness</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600">
          Meet our team of experienced doctors dedicated to providing
          compassionate, evidence-based healthcare. From routine consultations
          to specialized treatments, our experts are committed to delivering
          exceptional medical care for every patient.
        </p>
      </div>
    </section>
  );
}

export default HeroDoctors;