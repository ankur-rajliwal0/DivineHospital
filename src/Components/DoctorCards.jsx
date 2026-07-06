import { useState } from "react";
import DoctorFilter from "../Components/DoctorFilter";
import DoctorsGrid from "./DoctorsGrid";

import doctor1 from "../assets/images/docter1.png";
import doctor2 from "../assets/images/docter1.png";
import doctor3 from "../assets/images/docter1.png";
import doctor4 from "../assets/images/docter1.png";
import doctor5 from "../assets/images/docter1.png";
import doctor6 from "../assets/images/docter1.png";

function DoctorCards() {
  const [activeFilter, setActiveFilter] = useState("All Specialists");
  const [search, setSearch] = useState("");

  const doctors = [
    {
      image: doctor1,
      name: "Dr. Anil Sharma",
      category: "Surgery",
      speciality: "General & Laparoscopic Surgeon",
      experience: "18 Years",
      opd: "Mon-Sat : 09:00 AM - 01:00 PM",
    },
    {
      image: doctor2,
      name: "Dr. Amit Verma",
      category: "Orthopedics",
      speciality: "Orthopedic & Joint Replacement",
      experience: "15 Years",
      opd: "Mon-Sat : 10:00 AM - 02:00 PM",
    },
    {
      image: doctor3,
      name: "Dr. Ravi Gupta",
      category: "Orthopedics",
      speciality: "Orthopedic Surgeon",
      experience: "22 Years",
      opd: "Tue-Sat : 02:00 PM - 07:00 PM",
    },
    {
      image: doctor4,
      name: "Dr. Neha Singh",
      category: "General Medicine",
      speciality: "General Physician",
      experience: "10 Years",
      opd: "Mon-Fri : 08:00 AM - 01:00 PM",
    },
    {
      image: doctor5,
      name: "Dr. Vivek Jain",
      category: "Urology",
      speciality: "Urinary Tract & Kidney Specialist",
      experience: "20 Years",
      opd: "Mon-Wed-Fri : 04:00 PM - 08:00 PM",
    },
    {
      image: doctor6,
      name: "Dr. Rohit Mehta",
      category: "Anesthesiology",
      speciality: "Consultant Anesthesiologist",
      experience: "12 Years",
      opd: "On Call",
    },
  ];

  const filteredDoctors = doctors.filter((doctor) => {
    const categoryMatch =
      activeFilter === "All Specialists" ||
      doctor.category === activeFilter;

    const searchMatch =
      doctor.name.toLowerCase().includes(search.toLowerCase()) ||
      doctor.speciality.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <>
      <DoctorFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
        search={search}
        setSearch={setSearch}
      />

      <DoctorsGrid doctors={filteredDoctors} />
    </>
  );
}

export default DoctorCards;