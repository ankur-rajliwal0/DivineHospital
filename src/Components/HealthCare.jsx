import IntensiveCarePic from "../assets/images/ServicesIntensiveCare.png";
import EmergencyCare from "../assets/images/ServicesEmergencyCare.png";
import Radiology from "../assets/images/ServicesRadiology.png";
import Pathology from "../assets/images/ServicesPathology.png";
import Pharmacy from "../assets/images/ServicesPharmacy.png";
import Ambulance from "../assets/images/AmbulancePic.png";

import {
  HeartPulse,
  Activity,
  Pill,
  Ambulance as AmbulanceIcon,
  WalletCards,
  Microscope,
} from "lucide-react";

function HealthCare() {
  return (
    <section className="bg-[#f8f8f8] py-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-[#222]">
            Integrated Healthcare Ecosystem
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded bg-[#b68b43]" />
        </div>

        {/* Top Grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {/* ICU */}
          <div className="relative overflow-hidden lg:col-span-2">
            <img
              src={IntensiveCarePic}
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 p-8 text-white">
              <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#d8b36a]">
                <HeartPulse size={15} />
                Critical Care
              </div>

              <h3 className="mb-3 text-3xl font-semibold">
                Intensive Care Unit (ICU)
              </h3>

              <p className="max-w-xl text-gray-200">
                Focused on critical care with advanced hemodynamic monitoring,
                mechanical ventilation, and 24/7 dedicated intensivist presence
                for complex medical needs.
              </p>
            </div>
          </div>

          {/* Emergency */}
          <div className="bg-[#15213d] text-white">
            <img
              src={EmergencyCare}
              alt=""
              className="h-72 w-full object-cover"
            />

            <div className="p-8">
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-md border border-[#d8b36a] text-[#d8b36a]">
                <Activity size={18} />
              </div>

              <h3 className="mb-3 text-2xl font-semibold">
                Emergency Care
              </h3>

              <p className="text-gray-300">
                Rapid response trauma care and life-saving interventions
                available around the clock. Our Triage system ensures immediate
                attention to critical cases with zero wait time for emergencies.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Cards */}
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {/* Radiology */}
          <div className="border bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Radiology</h3>

              <Activity size={18} className="text-[#b68b43]" />
            </div>

            <p className="mb-6 text-gray-600">
              Cutting-edge diagnostic imaging including 3T MRI, 128-slice CT,
              and advanced digital X-ray technologies.
            </p>

            <img
              src={Radiology}
              alt=""
              className="h-28 w-full object-cover"
            />
          </div>

          {/* Pathology */}
          <div className="border bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Pathology</h3>

              <Microscope size={18} className="text-[#b68b43]" />
            </div>

            <p className="mb-6 text-gray-600">
              Precision laboratory services for comprehensive diagnostic testing
              and analysis using automated robotic systems.
            </p>

            <img
              src={Pathology}
              alt=""
              className="h-28 w-full object-cover"
            />
          </div>

          {/* Pharmacy */}
          <div className="border bg-white p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-semibold">Pharmacy</h3>

              <Pill size={18} className="text-[#b68b43]" />
            </div>

            <p className="mb-6 text-gray-600">
              Fully stocked 24/7 pharmaceutical services with professional
              consultation and home delivery options.
            </p>

            <img
              src={Pharmacy}
              alt=""
              className="h-28 w-full object-cover"
            />
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {/* Ambulance */}
          <div className="border bg-white lg:col-span-2">
            <div className="grid md:grid-cols-2">
              <div className="p-8">
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-500">
                  ULTRA-RESPONSIVE
                </span>

                <h3 className="mt-4 text-3xl font-semibold">
                  Ambulance Services
                </h3>

                <p className="mt-4 text-gray-600">
                  High-speed emergency transport fleet equipped with advanced
                  life-support systems (ACLS) and expert paramedics.
                </p>
              </div>

              <img
                src={Ambulance}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Cashless */}
          <div className="grid bg-[#f4d28c] md:grid-cols-2">
            <div className="p-8">
              <WalletCards className="mb-4 text-[#7a5b20]" size={28} />

              <h3 className="mb-4 text-3xl font-semibold">
                Cashless Facility
              </h3>

              <p className="text-gray-700">
                Seamless billing through all major TPA and insurance partners.
                We handle the paperwork so you can focus on recovery.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 p-8">
              {["Insurance A", "Insurance B", "Insurance C", "Insurance D"].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center bg-white p-4 text-center text-sm font-medium shadow-sm"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthCare;