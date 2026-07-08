import { ArrowRight } from "lucide-react";
import AboutHeroPic from "../assets/images/DivineHositalAboutimg.jpeg";

function AboutHero() {
  const scrollToMission = () => {
    const section = document.getElementById("mission-vision");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="overflow-hidden bg-[#faf9f7] py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <span className="text-xs font-semibold uppercase tracking-[4px] text-[#9b7b39]">
            Our Heritage
          </span>

          <h1 className="mt-5 font-serif text-5xl font-bold leading-tight text-[#111] md:text-6xl">
            A Legacy of
            <br />
            <span className="italic text-[#9b7b39]">Divine Care</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Divine Hospital has served the community with compassionate,
            patient-centered healthcare for decades. Our commitment to clinical
            excellence, advanced medical technology, and experienced specialists
            has made us a trusted destination for quality treatment.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              onClick={scrollToMission}
              className="flex items-center gap-2 rounded bg-[#182238] px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#0f172a]"
            >
              Our Mission
              <ArrowRight size={18} />
            </button>

            <button
              onClick={scrollToMission}
              className="rounded border border-gray-300 bg-white px-7 py-4 text-sm font-semibold text-[#111] transition duration-300 hover:bg-gray-100"
            >
              Our Vision
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative mx-auto w-full max-w-[500px]">
          <img
            src={AboutHeroPic}
            alt="Divine Hospital"
            className="h-[650px] w-full rounded-lg object-cover shadow-2xl"
          />

          {/* Floating Card */}
          <div className="absolute -bottom-8 -left-8 w-56 rounded-xl bg-white p-6 shadow-2xl">
            <h3 className="text-4xl font-bold text-[#9b7b39]">50+</h3>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Years of providing trusted healthcare with compassion,
              excellence, and patient-centered medical services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;