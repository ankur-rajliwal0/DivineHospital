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
            alt="Doctor"
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
            MS (Anesthesiology)
          </p>

          <p className="mt-8 leading-8 text-gray-600">
            Dr. Isha Bizania is an experienced Orthopedic Surgeon with expertise
            in trauma care, fracture management, joint replacement surgery, and
            sports injuries. He is dedicated to providing evidence-based,
            compassionate care while helping patients regain mobility and lead
            pain-free lives.
          </p>

          {/* Highlights */}
          <div className="mt-10 space-y-6">
            <div className="flex items-start gap-4">
              <Award className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  12+ Years of Experience
                </h4>

                <p className="mt-1 text-gray-600">
                  Successfully treated thousands of orthopedic and trauma cases.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <GraduationCap className="mt-1 text-[#b5965a]" size={24} />

              <div>
                <h4 className="font-semibold text-[#111]">
                  Education & Training
                </h4>

                <p className="mt-1 text-gray-600">
                  MBBS, MS (Orthopedics) with advanced training in Joint
                  Replacement Surgery.
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
                  Knee Replacement, Hip Replacement, Fracture Surgery, Sports
                  Injuries, Arthritis Treatment and Trauma Care.
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