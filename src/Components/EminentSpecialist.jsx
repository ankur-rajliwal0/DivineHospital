import doctor1 from "../assets/images/Dr.AnkitJaipal.jpeg";
import doctor2 from "../assets/images/DrIshaBizania.jpeg";

function EminentSpecialist() {
  const doctors = [
    {
      image: doctor1,
      specialty: "ORTHOPEDIC & JOINT REPLACEMENT",
      name: "Dr. Ankit Jaipal",
      qualification: "MS (ORTHOPEDIC)",
    },
    {
      image: doctor2,
      specialty: "Anesthesiology",
      name: "Dr. Isha bijarnia",
      qualification: "MBBS MD ",
    },
  ];

  return (
    <section className="bg-[#faf9f7] py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-[#111] md:text-5xl">
            Eminent Specialists
          </h2>

          <p className="mt-3 text-gray-600">
            The minds behind our medical excellence.
          </p>
        </div>

        {/* Doctors */}
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {doctors.map((doctor, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-lg">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[500px] w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="mt-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[2px] text-[#9a7a3d]">
                  {doctor.specialty}
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-[#111]">
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