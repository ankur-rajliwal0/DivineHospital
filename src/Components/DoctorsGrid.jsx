import { CalendarDays, Clock } from "lucide-react";

function DoctorsGrid({ doctors }) {
  return (
    <section className="bg-[#faf9f7] py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
                />

                <span className="absolute bottom-4 left-4 bg-black px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
                  {doctor.speciality}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-2xl font-semibold text-[#111]">
                  {doctor.name}
                </h3>

                <p className="mt-2 text-sm font-medium uppercase tracking-wide text-[#9b7b39]">
                  {doctor.category}
                </p>

                <div className="mt-6 space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={17} className="text-[#9b7b39]" />
                    <span>{doctor.experience} Experience</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={17} className="text-[#9b7b39]" />
                    <span>{doctor.opd}</span>
                  </div>
                </div>

                <button className="mt-8 w-full border border-gray-300 py-3 text-sm font-semibold transition hover:bg-[#9b7b39] hover:text-white">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        {doctors.length === 0 && (
          <div className="py-20 text-center">
            <h3 className="text-2xl font-semibold">No Doctor Found</h3>
            <p className="mt-2 text-gray-500">
              Try another specialty or search term.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default DoctorsGrid;