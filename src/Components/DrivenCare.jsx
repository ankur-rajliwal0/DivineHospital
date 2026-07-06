import { Award, ClipboardCheck } from "lucide-react";
import pic1 from "../assets/images/drivenHeroPic1.webp";
import pic2 from "../assets/images/drivenHeroPic2.webp";

function DrivenCare() {
  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left Content */}
        <div>
          <h2 className="max-w-md font-serif text-4xl font-bold leading-tight text-black lg:text-5xl">
            A Legacy of Divine Care & Precision
          </h2>

          <p className="mt-8 max-w-lg text-[16px] leading-8 text-gray-600">
            At Divine Hospital, we believe healthcare should be compassionate,
            precise, and accessible. Our experienced specialists combine modern
            medical technology with personalized treatment to deliver the best
            care for every patient.
          </p>

          {/* Features */}
          <div className="mt-10 space-y-8">
            <div className="flex gap-4">
              <div className="mt-1">
                <Award
                  size={24}
                  className="text-[#c79a4a]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black">
                  Accredited Excellence
                </h3>

                <p className="mt-1 text-gray-600">
                  Maintaining the highest standards of patient safety and
                  clinical excellence.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <ClipboardCheck
                  size={24}
                  className="text-[#c79a4a]"
                  strokeWidth={1.8}
                />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black">
                  Personalized Treatment
                </h3>

                <p className="mt-1 text-gray-600">
                  Individual treatment plans tailored to every patient's health
                  journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex items-center justify-center">
          {/* Main Image */}
          <img
            src={pic1}
            alt="Medical Care"
            className="h-[500px] w-[440px] rounded object-cover shadow-xl"
          />

          {/* Floating Image */}
          <img
            src={pic2}
            alt="Hospital Room"
            className="absolute -bottom-10 right-0 h-[270px] w-[230px] rounded border-8 border-[#faf9f7] object-cover shadow-2xl lg:-right-10"
          />
        </div>
      </div>
    </section>
  );
}

export default DrivenCare;