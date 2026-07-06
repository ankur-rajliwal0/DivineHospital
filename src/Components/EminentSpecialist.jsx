import { ArrowRight } from "lucide-react";

import doctor1 from "../assets/images/docter1.png";
import doctor2 from "../assets/images/docter2.png";
import doctor3 from "../assets/images/docter3.png";

function EminentSpecialist() {
  const doctors = [
    {
      image: doctor1,
      specialty: "GENERAL & LAPAROSCOPIC SURGEON",
      name: "Dr. Akash Sharma",
      qualification: "MS (General Surgery)",
    },
    {
      image: doctor2,
      specialty: "ORTHOPEDIC & JOINT REPLACEMENT",
      name: "Dr. Rajesh Verma",
      qualification: "MS Orthopedics",
    },
    {
      image: doctor3,
      specialty: "GENERAL PHYSICIAN",
      name: "Dr. Aman Gupta",
      qualification: "MD (Medicine)",
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-14 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-4xl font-bold text-[#111] md:text-5xl">
              Eminent Specialists
            </h2>

            <p className="mt-3 text-gray-600">
              The minds behind our medical excellence.
            </p>
          </div>

          <button className="group flex items-center gap-2 text-sm font-medium text-[#8c6b2f] transition hover:gap-3">
            View All Doctors
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Doctors */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[470px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="mt-5">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#9a7a3d]">
                  {doctor.specialty}
                </p>

                <h3 className="mt-2 text-xl font-semibold text-[#111]">
                  {doctor.name}
                </h3>

                <p className="mt-1 text-gray-600">
                  {doctor.qualification}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EminentSpecialist;