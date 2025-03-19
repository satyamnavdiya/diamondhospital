import React from 'react'
import './CSS/Footer.css'
import Heartbeat from './Heartbeat'
import Lottie from "lottie-react";
import heartbeatAnimation from "../assets/heartbrat.json"; // Ensure the correct path

function Map() {
    return (
        <>
            <div className='absolute w-full mt-32 -ml-8 -z-10'>
                <Lottie animationData={heartbeatAnimation} loop={true} className="w-[32%]" />
            </div>


            <div className='main-map '>
                <h1 className='footer-heading'><span className='footer-gradient'>Contact RTSV - SDA Dimond Hospitals</span></h1>
                <p className='text-center text-gray-500 -mt-5 relative max-sm:text-[9px] max-sm:pr-1.5 max-sm:pl-1.5'>For Better Care, Better Health And Better Life Contact RTSV - SDA Dimond Hospitals. <br />Get Best Treatment For Yourself.</p>
                <br />
                <div className="w-2/3 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative div-map z-10">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877.71835256833!2d72.8633632462227!3d21.21480707540121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6f08f9b693%3A0xd2f4780e70330cb0!2sSDA%20Diamond%20Hospital!5e0!3m2!1sen!2sin!4v1740049806227!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                </div>
            </div>

            <div className='absolute w-full -mt-[24.7rem] ml-[71.8%] -z-10 '>
                <Lottie animationData={heartbeatAnimation} loop={true} className="w-[32%]" />
            </div>
        </>
    )
}

export default Map
