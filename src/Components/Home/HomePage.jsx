import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Testimonials from './Testimonials'
import AboutUsBook from './AboutUsBook';
import Certifications from './Certifications'
import '../CSS/Homapage.css';
import { sliderData } from '../../data/sliderData';
import Mobilebook from './BookViewer';


function HomePage() {

    return (
        <div className='homepage'>
            <Slider slides={sliderData} />
            <div>
                <AboutUsBook />
            </div>
            <div className='mobile-book div-center pt-5'>
                <Mobilebook />
            </div>
            <Achievement />
            <Certifications />
            <Testimonials />
        </div>
    )
}

export default HomePage
