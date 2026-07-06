import { Search } from "lucide-react";

function DoctorFilter({
  activeFilter,
  setActiveFilter,
  search,
  setSearch,
}) {
  const filters = [
    "All Specialists",
    "Surgery",
    "Orthopedics",
    "General Medicine",
    "Urology",
    "Anesthesiology",
  ];

  return (
    <section className="border-y bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Filter Buttons */}

        <div className="flex flex-wrap gap-3">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`rounded-full px-6 py-3 text-sm font-medium transition-all
              ${
                activeFilter === item
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-[#c69d4d] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Search */}

        <div className="relative w-full lg:w-72">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Find a physician..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg bg-gray-100 py-3 pl-11 pr-4 outline-none focus:ring-2 focus:ring-[#c69d4d]"
          />
        </div>
      </div>
    </section>
  );
}

export default DoctorFilter;