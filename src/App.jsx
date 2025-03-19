import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import {BrowserRouter, Routes, Route } from "react-router";
// Homepage
import HomePage from './Components/HomePage'
// About Us
import Dimond from './Components/Dimond';
import AboutTeam from './Components/AboutTeam';
// Specialities
import ObsGyne from './Components/Specialties/ObsGyne';
import Pediatrics from './Components/Specialties/Pediatrics';
import Orthopedics from './Components/Specialties/Orthopedics';
import GeneralSurgery from './Components/Specialties/GeneralSurgery';
import Ophthalmology from './Components/Specialties/Ophthalmology';
import Pulmonology from './Components/Specialties/Pulmonology';
import Urology  from './Components/Specialties/Urology';
import Neurology  from './Components/Specialties/Neurology';
import ENT  from './Components/Specialties/ENT';
import DentalSurgery  from './Components/Specialties/DentalSurgery';
import PhysioTherapy  from './Components/Specialties/PhysioTherapy';

// Doc Profile
import DocProfile from './Components/DocProfile'


// Services
import Pharmacy from './Components/HospitalServices/Pharmacy';
import Ambulance from './Components/HospitalServices/Ambulance';
import Dialysis from './Components/HospitalServices/Dialysis';
import GovernmentSchemes from './Components/HospitalServices/GovernmentSchemes';
import IPD from './Components/HospitalServices/IPD';
import Laboratory from './Components/HospitalServices/Laboratory';
import NICU from './Components/HospitalServices/NICU';
import Radiology from './Components/HospitalServices/Radiology';

// Patient Guide
import FloorPlan from './Components/PatientGuide/FloorPlan';
import DoAndDonts from './Components/PatientGuide/DoAndDonts';
import GeneralGuide from './Components/PatientGuide/GeneralGuide';

//Gallery
import Gallery from './Components/Gallery';
import ScrollToTop from './Components/ScrollToTop';

function App() {

  return (


    <div>
      <BrowserRouter>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/diamondhospital/" element={<HomePage />} />
          {/* About Us */}
          <Route path="/diamondhospital/Dimond-Hospital" element={<Dimond />} />
          <Route path="/diamondhospital/Hospital-Team" element={<AboutTeam />} />

          {/* Specialties */}
          <Route path="/diamondhospital/ObsGyne" element={<ObsGyne />} />
          <Route path="/diamondhospital/Pediatrics" element={<Pediatrics />} />
          <Route path="/diamondhospital/Orthopedics" element={<Orthopedics />} />
          <Route path="/diamondhospital/GeneralSurgery" element={<GeneralSurgery />} />
          <Route path="/diamondhospital/Ophthalmology" element={<Ophthalmology />} />
          <Route path="/diamondhospital/Pulmonology" element={<Pulmonology />} />
          <Route path="/diamondhospital/Urology" element={<Urology />} />
          <Route path="/diamondhospital/Neurology" element={<Neurology />} />
          <Route path="/diamondhospital/ENT" element={<ENT />} />
          <Route path="/diamondhospital/DentalSurgery" element={<DentalSurgery />} />
          <Route path="/diamondhospital/PhysioTherapy" element={<PhysioTherapy />} />

          {/* Doctotr Profile */}
          <Route path="/diamondhospital/Doctor-Profile" element={<DocProfile />} />

          {/* Services */}
          <Route path="/diamondhospital/Pharmacy" element={<Pharmacy />} />
          <Route path="/diamondhospital/Ambulance" element={<Ambulance />} />
          <Route path="/diamondhospital/Dialysis" element={<Dialysis />} />
          <Route path="/diamondhospital/GovernmentSchemes" element={<GovernmentSchemes />} />
          <Route path="/diamondhospital/IPD" element={<IPD />} />
          <Route path="/diamondhospital/Laboratory" element={<Laboratory />} />
          <Route path="/diamondhospital/NICU" element={<NICU />} />
          <Route path="/diamondhospital/Radiology" element={<Radiology />} />

          {/* Patient Guide */}
          <Route path="/diamondhospital/GeneralGuide" element={<GeneralGuide />} />
          <Route path="/diamondhospital/DoAndDonts" element={<DoAndDonts />} />
          <Route path="/diamondhospital/Floorplan" element={<FloorPlan />} />

          {/* Gallery */}
          <Route path="/diamondhospital/Gallery" element={<Gallery />} />
          

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
