import { Eye, Target } from "lucide-react";

function OurMission() {
  return (
    <section className="bg-[#171f34] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-white/10 lg:grid lg:grid-cols-2">
          {/* Mission */}
          <div className="border-b border-white/10 p-10 lg:border-b-0 lg:border-r">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#222b42]">
              <Target className="text-[#d6b05b]" size={24} />
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#e7c77c]">
              Our Mission
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-9 text-gray-400">
              To provide compassionate, ethical, and evidence-based healthcare
              through advanced medical technology and experienced specialists.
              We strive to deliver personalized treatment while maintaining the
              highest standards of patient safety, dignity, and clinical
              excellence.
            </p>
          </div>

          {/* Vision */}
          <div className="p-10">
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#222b42]">
              <Eye className="text-[#d6b05b]" size={24} />
            </div>

            <h2 className="font-serif text-4xl font-bold text-[#e7c77c]">
              Our Vision
            </h2>

            <p className="mt-8 max-w-lg text-lg leading-9 text-gray-400">
              To become the region's most trusted healthcare institution by
              combining medical excellence, innovation, and compassionate care.
              Our vision is to create a healthier community where every patient
              receives world-class treatment in a safe and welcoming
              environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;