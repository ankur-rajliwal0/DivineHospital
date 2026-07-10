import heropic from "../assets/images/HeroMain.png";

function Hero() {
  return (
    <section className="w-full">
      <img
        src={heropic}
        alt="Divine Hospital"
        className="w-full h-50vh block bg-cover"
      />
    </section>
  );
}

export default Hero;

// import { useNavigate } from "react-router-dom";
// import heropic from "../assets/images/HomeHero1.jpg";

// function Hero() {
//   const navigate = useNavigate();

//   return (
//     <section
//       className="relative h-[90vh] min-h-[650px] bg-cover bg-center"
//       style={{ backgroundImage: `url(${heropic})` }}
//     >
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15"></div>

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:px-10">
//         <div className="max-w-xl rounded-2xl bg-black/10 p-8 backdrop-blur-[2px]">
//           {/* Badge */}
//           <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1 text-[11px] font-semibold uppercase tracking-[3px] text-white backdrop-blur-md">
//             Private Medical Institute
//           </span>

//           {/* Heading */}
//           <h1
//             className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl"
//             style={{
//               textShadow: "0 4px 20px rgba(0,0,0,0.6)",
//             }}
//           >
//             Excellence in
//             <br />
//             <span className="font-serif italic font-semibold">
//               Every Heartbeat
//             </span>
//           </h1>

//           {/* Description */}
//           <p
//             className="mt-6 max-w-md text-base leading-8 text-gray-200"
//             style={{
//               textShadow: "0 2px 10px rgba(0,0,0,0.5)",
//             }}
//           >
//             Where advanced healthcare meets compassionate care. Our
//             experienced doctors and modern facilities are dedicated to
//             providing exceptional treatment for every patient.
//           </p>

//           {/* Buttons */}
//           <div className="mt-10 flex flex-col gap-4 sm:flex-row">
//             <button
//               onClick={() => navigate("/contact")}
//               className="rounded-md bg-white px-8 py-4 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-gray-100"
//             >
//               Book Appointment →
//             </button>

//             <button
//               onClick={() => navigate("/facilities")}
//               className="rounded-md border border-white/40 bg-white/10 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition duration-300 hover:bg-white hover:text-black"
//             >
//               View Facilities
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Hero;