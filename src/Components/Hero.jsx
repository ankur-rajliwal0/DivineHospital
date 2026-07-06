import { useNavigate } from "react-router-dom";
import heropic from "../assets/images/heropic.webp";

function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="relative h-[90vh] min-h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heropic})` }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/70"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
        <div className="max-w-xl">
          {/* Badge */}
          <span className="inline-block border border-[#b5965a] px-4 py-1 text-[11px] font-semibold uppercase tracking-[3px] text-[#7d6840]">
            Private Medical Institute
          </span>

          {/* Heading */}
          <h1 className="mt-6 text-5xl font-bold leading-tight text-black md:text-6xl">
            Excellence in
            <br />
            <span className="font-serif italic font-semibold">
              Every Heartbeat
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-md text-base leading-8 text-gray-700">
            Where advanced healthcare meets compassionate care. Our experienced
            doctors and modern facilities are dedicated to providing exceptional
            treatment for every patient.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/contact")}
              className="bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-gray-800"
            >
              Book Appointment →
            </button>

            <button
              onClick={() => navigate("/facilities")}
              className="border border-gray-400 bg-white/70 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-black hover:text-white"
            >
              View Facilities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;