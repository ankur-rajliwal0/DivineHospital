import React from "react";
import { Award, GraduationCap, Stethoscope } from "lucide-react";
import AnkitJaipal from "../assets/images/Dr.AnkitJaipal.jpeg";
import { useNavigate } from "react-router-dom";

function DrAnkitJaipalCard() {
  const navigate = useNavigate();
  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Doctor Details */}
        <div>
          <span className="inline-block border border-[#b5965a] px-4 py-1 text-xs font-semibold uppercase tracking-[3px] text-[#8b6a2d]">
            Orthopedic & Joint Replacement
          </span>

          <h2 className="mt-6 font-serif text-5xl font-bold text-[#111]">
            Dr. Ankit Jaipal
          </h2>

          <p className="mt-2 text-lg font-medium text-[#8b6a2d]">
            MS (Orthopedic)
          </p>

          <p className="mt-8 leading-8 text-gray-600">
            Dr. Ankit Jaipal is a dedicated Orthopedic & Joint Replacement
            Surgeon committed to providing advanced orthopedic care with a
            patient-first approach. His expertise includes fracture management,
            trauma care, arthritis treatment, sports injuries, and joint
            replacement procedures, helping patients regain mobility and improve
            their quality of life.
          </p>

          {/* Highlights */}
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <Award className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  Specialized Orthopedic Care
                </h4>

                <p className="mt-1 text-gray-600">
                  Comprehensive treatment for fractures, trauma, arthritis, and
                  bone & joint disorders.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  Qualification
                </h4>

                <p className="mt-1 text-gray-600">
                  MBBS, MS (Orthopedic) with specialized training in Joint
                  Replacement and Trauma Surgery.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Stethoscope className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  Areas of Expertise
                </h4>

                <p className="mt-1 text-gray-600">
                  Knee Replacement, Hip Replacement, Fracture Care, Trauma
                  Surgery, Sports Injuries, Arthritis Treatment and Joint Pain
                  Management.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/contact")}
            className="mt-10 rounded bg-black px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white transition hover:bg-[#8b6a2d]"
          >
            Book Appointment
          </button>
        </div>

        {/* Doctor Image */}
        <div className="relative">
          {/* Gold Border */}
          <div className="absolute -right-5 -top-5 h-full w-full rounded-2xl border-2 border-[#d7bc83]"></div>

          {/* Image */}
          <img
            src={AnkitJaipal}
            alt="Dr. Ankit Jaipal"
            className="relative z-10 h-[620px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default DrAnkitJaipalCard;