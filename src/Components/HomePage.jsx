import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Testimonials from './Testimonials'
import { motion } from "framer-motion";
// import Hospital from './Images/hospital.jpg';
import Stack from './Stack';
import AboutUsBook from './AboutUsBook';

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

            <Achievement />
            <Testimonials />
            {/* <Map /> */}
        </div>
    )
}

export default HomePage
