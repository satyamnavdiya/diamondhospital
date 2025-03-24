import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Testimonials from './Testimonials'
// import Hospital from './Images/hospital.jpg';
import AboutUsBook from './AboutUsBook';
import Certifications from './Certifications'

const images = [
    { id: 1, img: "/diamondhospital/IMG/152.JPG" },
    { id: 2, img: "/diamondhospital/IMG/29.JPG" },
    { id: 3, img: "/diamondhospital/IMG/140.JPG" },
    { id: 4, img: "/diamondhospital/hospital.JPG" },
    // { id: 5, img: "/diamondhospital/hospital.JPG" },
];
// import Map from './Map' 

function HomePage() {
    return (
        <div className='pt-[8.3rem] max-sm:pt-[6rem]'>
            <Slider />

            {/* About us */}
            <AboutUsBook />

            <Certifications />
            <Achievement />


            <Testimonials />
            {/* <Map /> */}
        </div>
    )
}

export default HomePage
