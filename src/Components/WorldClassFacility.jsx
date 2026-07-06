import {
  HeartPulse,
  Microscope,
  Ambulance,
  Pill,
  ShieldCheck,
  BadgePlus,
} from "lucide-react";

import AdvanceIcuPIC from "../assets/images/AdvancedicuPic.webp";
import EmergencyAmbulacePic from "../assets/images/Emergency&AmbulacePic.webp";

function WorldClassFacility() {
  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-serif text-4xl font-bold text-[#111] md:text-5xl">
            World-Class Facilities
          </h2>

          <p className="mt-4 text-gray-600">
            Advanced infrastructure designed to deliver exceptional patient
            care, safety, and comfort.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-5 lg:grid-cols-12">
          {/* ICU */}
          <div className="relative overflow-hidden rounded-lg lg:col-span-6 lg:row-span-2 h-[520px] group">
            <img
              src={AdvanceIcuPIC}
              alt="ICU"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-serif text-3xl font-semibold">
                Advanced ICU
              </h3>

              <p className="mt-3 max-w-sm text-gray-200">
                24×7 intensive care supported with modern monitoring systems and
                experienced critical care specialists.
              </p>
            </div>
          </div>

          {/* Radiology */}
          <div className="rounded-lg bg-[#f6d185] p-8 lg:col-span-3 h-[250px] transition hover:-translate-y-1">
            <BadgePlus className="mb-10 text-[#6b4d00]" size={28} />

            <h3 className="font-serif text-2xl font-semibold">
              Radiology
            </h3>

            <p className="mt-3 text-gray-700">
              Digital imaging services with modern diagnostic equipment.
            </p>
          </div>

          {/* Pathology */}
          <div className="rounded-lg border bg-white p-8 lg:col-span-3 h-[250px] transition hover:-translate-y-1">
            <Microscope className="mb-10 text-[#8b6a2d]" size={28} />

            <h3 className="font-serif text-2xl font-semibold">
              Pathology
            </h3>

            <p className="mt-3 text-gray-600">
              Accurate laboratory investigations with timely reports.
            </p>
          </div>

          {/* Emergency */}
          <div className="relative overflow-hidden rounded-lg lg:col-span-6 h-[250px] group">
            <img
              src={EmergencyAmbulacePic}
              alt="Emergency"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-serif text-3xl font-semibold">
                Emergency & Ambulance
              </h3>

              <p className="mt-2 text-gray-200">
                24×7 emergency response with ambulance support.
              </p>
            </div>

            <button className="absolute bottom-8 right-8 rounded bg-[#f6d185] px-4 py-2 text-sm font-semibold text-black transition hover:bg-white">
              Call Now
            </button>
          </div>

          {/* Bottom Cards */}
          <div className="rounded-lg border bg-white p-6 lg:col-span-4 transition hover:shadow-lg">
            <div className="flex items-center gap-4">
              <Pill className="text-[#b38728]" />
              <div>
                <h4 className="font-semibold">24×7 Pharmacy</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Medicines available round the clock.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 lg:col-span-4 transition hover:shadow-lg">
            <div className="flex items-center gap-4">
              <ShieldCheck className="text-[#b38728]" />
              <div>
                <h4 className="font-semibold">Cashless Services</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Hassle-free treatment with insurance support.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg border bg-white p-6 lg:col-span-4 transition hover:shadow-lg">
            <div className="flex items-center gap-4">
              <HeartPulse className="text-[#b38728]" />
              <div>
                <h4 className="font-semibold">Insurance Desk</h4>
                <p className="mt-1 text-sm text-gray-600">
                  Dedicated assistance for cashless claims and TPAs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorldClassFacility;