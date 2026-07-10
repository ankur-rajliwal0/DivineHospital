import React from "react";
import { Award, GraduationCap, Stethoscope } from "lucide-react";
import { useNavigate } from "react-router-dom";
import doctor from "../assets/images/DrIshaBizania.jpeg";

function DrIshaBizania() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        {/* Doctor Image */}
        <div className="relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-2xl border-2 border-[#d7bc83]"></div>

          <img
            src={doctor}
            alt="Dr. Isha Bizania"
            className="relative z-10 h-[620px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>

        {/* Doctor Details */}
        <div>
          <span className="inline-block border border-[#b5965a] px-4 py-1 text-xs font-semibold uppercase tracking-[3px] text-[#8b6a2d]">
            Anesthesiologist
          </span>

          <h2 className="mt-6 font-serif text-5xl font-bold text-[#111]">
            Dr. Isha Bizania
          </h2>

          <p className="mt-2 text-lg font-medium text-[#8b6a2d]">
            MBBS, MD (Anesthesiology)
          </p>

          <p className="mt-8 leading-8 text-gray-600">
            Dr. Isha Bizania is serving as an Assistant Professor at Mahatma
            Gandhi Medical College and has an extensive clinical experience of
            over 12 years in the field of Anesthesiology. She has special
            interests in Pediatric Anesthesia, Obstetric & Gynecological
            Anesthesia, Pain Management, Orthopedic Anesthesia, and
            perioperative patient care. Known for her excellent clinical skills,
            dedication, and patient-centered approach, she ensures safe and
            effective anesthesia management for every patient.
          </p>

          {/* Highlights */}
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <Award className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  12+ Years of Clinical Experience
                </h4>

                <p className="mt-1 text-gray-600">
                  Serving as Assistant Professor at Mahatma Gandhi Medical
                  College with extensive experience in anesthesiology and
                  perioperative patient care.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  Professional Experience
                </h4>

                <p className="mt-1 text-gray-600">
                  Consultant at Seva Yatan Hospital (2014–2017), Senior Resident
                  at SMS Hospital (2017–2020), Sevayatan Hospital (2020–2022),
                  and Assistant Professor at MGUMST (2022–Present).
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
                  Pediatric Anesthesia, Obstetric & Gynecological Anesthesia,
                  Pain Management, Orthopedic Anesthesia, Nerve Blocks and
                  Comprehensive Perioperative Care.
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
      </div>
    </section>
  );
}

export default DrIshaBizania;