import React from 'react'
import HeroDoctors from '../Components/HeroDoctors'
import DoctorFilter from '../Components/DoctorFilter'
import DoctorCards from '../Components/DoctorCards'
import DoctorCard from '../Components/DrIshaBizania'
import DrAnkitJaipalCard from '../Components/DrAnkitJaipalCard'
import DrIshaBizania from '../Components/DrIshaBizania'

function Doctors() {
  return (
    <div>
      <HeroDoctors/>
      <DrIshaBizania/>
      <DrAnkitJaipalCard/>
      
    </div>
  )
}

export default Doctors
