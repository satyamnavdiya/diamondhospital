import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Testimonials from './Testimonials'
// import Hospital from './Images/hospital.jpg';
import AboutUsBook from './AboutUsBook';
import Certifications from './Certifications'
// import HospitalAboutUs from './AmbientParticles';
// import Aboutus from './Aboutus';
import '../CSS/Homapage.css';

const images = [
    { id: 1, img: "/IMG/152.JPG" },
    { id: 2, img: "/IMG/29.JPG" },
    { id: 3, img: "/IMG/140.JPG" },
    { id: 4, img: "/hospital.JPG" },
    // { id: 5, img: "/hospital.JPG" },
];
// import Map from './Map' 

function HomePage() {
    return (
        <div className='homepage'>
            <Slider />
            {/* <AboutUsBook />      */}
            {/* <Aboutus /> */}
            <Certifications />
            {/* <HospitalAboutUs /> */}
            <Achievement />
            <Testimonials />
        </div>
    )
}

export default HomePage
