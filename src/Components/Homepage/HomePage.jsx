import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Testimonials from './Testimonials'
import AboutUsBook from './AboutUsBook';
import Certifications from './Certifications'
import '../CSS/Homapage.css';
import { sliderData } from '../../data/sliderData';

function HomePage() {
    return (
        <div className='homepage'>
            <Slider slides={sliderData} />
            <AboutUsBook />     
            <Achievement />
            <Certifications />
            <Testimonials />
        </div>
    )
}

export default HomePage
