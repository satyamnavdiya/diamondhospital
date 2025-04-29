import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { BrowserRouter, Routes, Route } from "react-router";
// Homepage
import HomePage from './Components/Homepage/HomePage'
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
import Urology from './Components/Specialties/Urology';
import Neurology from './Components/Specialties/Neurology';
import ENT from './Components/Specialties/ENT';
import DentalSurgery from './Components/Specialties/DentalSurgery';
import PhysioTherapy from './Components/Specialties/PhysioTherapy';

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

//News And Media
import Video from './Components/Video';

//Gallery
import Gallery from './Components/Gallery';
import ScrollToTop from './Components/ScrollToTop';

//Career
import Career from './Components/Career';

// Privacy Policy
import PrivacyPolicy from './Components/PrivacyPolicy ';


function App() {

  return (

    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* About Us */}
          <Route path="/Dimond-Hospital" element={<Dimond />} />
          <Route path="/Hospital-Team" element={<AboutTeam />} />

          {/* Specialties */}
          <Route path="/ObsGyne" element={<ObsGyne />} />
          <Route path="/Pediatrics" element={<Pediatrics />} />
          <Route path="/Orthopedics" element={<Orthopedics />} />
          <Route path="/GeneralSurgery" element={<GeneralSurgery />} />
          <Route path="/Ophthalmology" element={<Ophthalmology />} />
          <Route path="/Pulmonology" element={<Pulmonology />} />
          <Route path="/Urology" element={<Urology />} />
          <Route path="/Neurology" element={<Neurology />} />
          <Route path="/ENT" element={<ENT />} />
          <Route path="/DentalSurgery" element={<DentalSurgery />} />
          <Route path="/PhysioTherapy" element={<PhysioTherapy />} />

          {/* Doctotr Profile */}
          <Route path="/Doctor-Profile" element={<DocProfile />} />

          {/* Services */}
          <Route path="/Pharmacy" element={<Pharmacy />} />
          <Route path="/Ambulance" element={<Ambulance />} />
          <Route path="/Dialysis" element={<Dialysis />} />
          <Route path="/GovernmentSchemes" element={<GovernmentSchemes />} />
          <Route path="/IPD" element={<IPD />} />
          <Route path="/Laboratory" element={<Laboratory />} />
          <Route path="/NICU" element={<NICU />} />
          <Route path="/Radiology" element={<Radiology />} />

          {/* Patient Guide */}
          <Route path="/GeneralGuide" element={<GeneralGuide />} />
          <Route path="/DoAndDonts" element={<DoAndDonts />} />
          <Route path="/Floorplan" element={<FloorPlan />} />

          {/* News & Media */}
          <Route path="/Video" element={<Video />} />

          {/* Gallery */}
          <Route path="/Gallery" element={<Gallery />} />

          {/* Career */}
          <Route path='/Career' element={<Career />} />

          {/* Privacy Policy */}
          <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
