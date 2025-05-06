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
import { sliderData } from '../../data/sliderData';

function HomePage() {
    return (
        <div className='homepage'>
            <Slider slides={sliderData} />
            <AboutUsBook />     
            <Achievement />
            <Certifications />
            {/* <Aboutus /> */}
            {/* <HospitalAboutUs /> */}
            <Testimonials />
        </div>
    )
}

export default HomePage
