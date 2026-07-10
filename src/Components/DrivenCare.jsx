import {
  Bone,
  Activity,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import Orthopic from "../assets/images/orthopaedicCard.jpg";
import kneereplacement from "../assets/images/kneereplacement.jpg";
import spinesurgery from "../assets/images/spinesurgery.jpg";
import Shoulderreplcement from "../assets/images/Shoulder Replacement.webp";
import HipReplcement from "../assets/images/HipReplacement.jpg";

function DrivenCare() {
  const services = [
    {
      title: "Knee Replacement",
      desc: "Advanced total and partial knee replacement procedures for pain-free movement and improved mobility.",
      img: kneereplacement,
    },
    {
      title: "Spine Surgery",
      desc: "Expert treatment for slipped disc, spinal stenosis, fractures, deformities, and minimally invasive spine procedures.",
      img: spinesurgery,
    },
    {
      title: "Shoulder Replacement",
      desc: "Comprehensive shoulder replacement and reconstruction surgeries to restore strength and flexibility.",
      img: Shoulderreplcement,
    },
    {
      title: "Hip Replacement",
      desc: "Modern hip replacement procedures for arthritis, fractures, and long-term joint pain relief.",
      img: HipReplcement,
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="rounded-full bg-[#c79a4a]/10 px-4 py-2 text-sm font-semibold text-[#c79a4a]">
              Orthopaedic Excellence
            </span>

            <h2 className="mt-6 font-serif text-4xl font-bold leading-tight text-black lg:text-5xl">
              Comprehensive Orthopaedic Care for Every Stage of Life
            </h2>

            <p className="mt-8 text-[16px] leading-8 text-gray-600">
              Our Orthopaedic Department provides advanced diagnosis, surgical
              expertise, and rehabilitation for bone, joint, and spine
              conditions. From joint replacement to complex spine procedures,
              our specialists ensure personalized treatment with the latest
              technology for faster recovery and better outcomes.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex gap-3">
                <Bone className="text-[#c79a4a]" />
                <div>
                  <h4 className="font-semibold">
                    Joint Replacement
                  </h4>
                  <p className="text-sm text-gray-600">
                    Knee, Hip & Shoulder
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Activity className="text-[#c79a4a]" />
                <div>
                  <h4 className="font-semibold">
                    Spine Surgery
                  </h4>
                  <p className="text-sm text-gray-600">
                    Advanced Spine Procedures
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck className="text-[#c79a4a]" />
                <div>
                  <h4 className="font-semibold">
                    Trauma Care
                  </h4>
                  <p className="text-sm text-gray-600">
                    Fracture & Injury Management
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Stethoscope className="text-[#c79a4a]" />
                <div>
                  <h4 className="font-semibold">
                    Expert Specialists
                  </h4>
                  <p className="text-sm text-gray-600">
                    Personalized Treatment Plans
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="relative">
            <img
              src={Orthopic}
              alt="Orthopaedic Department"
              className="h-[520px] w-full rounded-2xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-10 left-1/2 grid w-[92%] -translate-x-1/2 grid-cols-2 gap-4 rounded-2xl bg-white p-4 shadow-2xl">
              {services.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-xl border bg-white"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-32 w-full object-cover"
                  />

                  <div className="p-3">
                    <h3 className="font-semibold text-sm">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrivenCare;