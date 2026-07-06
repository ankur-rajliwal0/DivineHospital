import { HeartHandshake, ShieldCheck, Microscope } from "lucide-react";

function Values() {
  const values = [
    {
      icon: ShieldCheck,
      title: "Clinical Excellence",
      description:
        "Delivering exceptional healthcare through experienced specialists, evidence-based treatments, and a commitment to patient safety.",
    },
    {
      icon: HeartHandshake,
      title: "Compassionate Care",
      description:
        "Treating every patient with empathy, dignity, and personalized attention to ensure comfort throughout their healthcare journey.",
    },
    {
      icon: Microscope,
      title: "Advanced Technology",
      description:
        "Utilizing modern diagnostic equipment and medical innovations to provide accurate diagnoses and effective treatment.",
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[4px] text-[#a37a2a]">
            Our Values
          </span>

          <h2 className="mt-4 font-serif text-4xl font-bold text-[#111] md:text-5xl">
            The Pillars of Divine Excellence
          </h2>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <div
                key={index}
                className="group rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a55b] hover:shadow-xl"
              >
                {/* Icon */}
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-[#f8f3e8] transition group-hover:bg-[#c9a55b]">
                  <Icon
                    size={28}
                    className="text-[#a37a2a] transition group-hover:text-white"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-3xl font-semibold text-[#111]">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="mt-5 leading-8 text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Values;