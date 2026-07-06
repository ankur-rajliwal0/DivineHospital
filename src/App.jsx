import Home from "../src/Pages/Homepage"
import About from "../src/Pages/About"
import Doctors from "../src/Pages/Doctors"
import Services from "../src/Pages/Services"
import Gallery from "../src/Pages/Gallery"
import { Route, Routes } from 'react-router-dom'
import Layout from "./Layout/Layout"
import Homepage from "../src/Pages/Homepage"
import Contact from "./Pages/Contact"

function App() {


  return (
    <>
      <Routes>
        <Route element={<Layout />} >
         <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/Facilities" element={< Doctors/>} />
          <Route path="/contact" element={< Contact/>} />

        </Route>
      </Routes>

    </>
  )
}

export default App
