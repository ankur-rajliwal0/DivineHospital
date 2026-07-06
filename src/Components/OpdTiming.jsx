import React from "react";

function OpdTiming() {
  const timings = [
    {
      doctor: "Dr. Rajesh Sharma",
      department: "General & Laparoscopic Surgeon",
      time: "09:00 AM - 01:00 PM",
    },
    {
      doctor: "Dr. Amit Verma",
      department: "Orthopedic & Joint Replacement",
      time: "10:00 AM - 02:00 PM",
    },
    {
      doctor: "Dr. Vivek Singh",
      department: "Orthopedic & Joint Replacement",
      time: "05:00 PM - 07:00 PM",
    },
    {
      doctor: "Dr. Neha Gupta",
      department: "General Physician",
      time: "09:00 AM - 12:00 PM",
    },
    {
      doctor: "Dr. Rahul Mehta",
      department: "Urologist",
      time: "04:00 PM - 06:00 PM",
    },
    {
      doctor: "Dr. Ankit Jain",
      department: "Anesthesiologist",
      time: "On Call",
    },
  ];

  return (
    <section className="bg-[#161f33] py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        {/* Left */}
        <div>
          <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
            OPD Timings
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-400">
            Consult our experienced specialists during OPD hours. For emergency
            services, our team is available 24×7.
          </p>

          <div className="mt-12">
            {timings.map((item, index) => (
              <div
                key={index}
                className="flex flex-col justify-between gap-3 border-b border-white/10 py-6 md:flex-row"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.doctor}
                  </h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {item.department}
                  </p>
                </div>

                <p className="font-medium text-[#d6b05b]">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="rounded-md bg-white p-8 shadow-2xl lg:p-10">
          <h3 className="font-serif text-3xl font-bold text-[#111]">
            Quick Appointment
          </h3>

          <form className="mt-8 space-y-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b border-gray-300 bg-transparent pb-3 outline-none"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="w-full border-b border-gray-300 bg-transparent pb-3 outline-none"
            />

            <select className="w-full border-b border-gray-300 bg-transparent pb-3 outline-none">
              <option>Select Doctor</option>
              <option>General & Laparoscopic Surgeon</option>
              <option>Orthopedic Surgeon</option>
              <option>General Physician</option>
              <option>Urologist</option>
              <option>Anesthesiologist</option>
            </select>

            <input
              type="date"
              className="w-full border-b border-gray-300 bg-transparent pb-3 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#8f6d1f] py-4 text-sm font-semibold uppercase tracking-[2px] text-white transition hover:bg-[#755818]"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default OpdTiming;