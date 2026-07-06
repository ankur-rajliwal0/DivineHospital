import { CalendarDays } from "lucide-react";

function BegunYourJournewHero() {
  return (
    <section className="bg-[#faf9f7] py-24">
      <div className="mx-auto max-w-5xl px-5 text-center">
        {/* Heading */}
        <h2 className="font-serif text-4xl font-bold leading-tight text-[#111] md:text-6xl">
          Begin Your Journey to{" "}
          <span className="text-[#9a7628]">Optimal Health</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
          Our experienced medical team is here to guide you with compassionate
          care, advanced treatment, and personalized healthcare solutions for
          you and your family.
        </p>

        {/* Button */}
        <div className="mt-12">
          <button className="group inline-flex items-center gap-3 rounded-md bg-[#8b6a1f] px-10 py-5 text-sm font-semibold uppercase tracking-[2px] text-white shadow-lg transition-all duration-300 hover:bg-[#735618] hover:shadow-2xl">
            Schedule an Appointment

            <CalendarDays
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default BegunYourJournewHero;