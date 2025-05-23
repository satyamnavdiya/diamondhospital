import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import opd from '../Images/opd.jpg'

const OPD = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="spec-hero">
            {/* Hero Section */}
            <section className="hero-sec-img relative flex items-center justify-center overflow-hidden mix-blend-multiply">
                <div className="absolute inset-0">
                    <img
                        src={opd}
                        alt="opd"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>OPD</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Efficient Consultations for All Your Health Needs</span>
                    </motion.p>
                </div>
            </section>

            {/* About Urology */}
            <section className="py-10 div-center w-[80%]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto"
                    >
                        <div className="mb-12">
                            {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
                            <p className="text-gray-600 spec-text">
                                The Outpatient Department (OPD) at SDA Diamond Hospital is designed to provide convenient, efficient, and high-quality medical care for patients who do not require hospital admission. Our OPD serves as the first point of contact for a wide range of health concerns, offering consultations across all major specialties including medicine, surgery, pediatrics, gynecology, orthopedics, dermatology, and more. With minimal wait times and streamlined services, we ensure that every patient receives timely attention and expert care.
                                <br /><br />
                                Our OPD is staffed by a team of experienced consultants, nurses, and support staff who work together to provide comprehensive evaluations, diagnostic tests, and treatment plans. Whether it’s a routine check-up, a follow-up visit, or a specialist consultation, our goal is to offer accurate diagnosis and personalized care in a comfortable, patient-friendly environment. We also offer laboratory, radiology, pharmacy, and minor procedure facilities within the OPD for added convenience.
                                <br /><br />
                                At SDA Diamond Hospital, we believe in making healthcare accessible and stress-free. Our OPD operates with an appointment and walk-in system to accommodate all patient needs. We place strong emphasis on clear communication, respectful care, and maintaining the highest standards of hygiene and safety. With a commitment to excellence and compassion, our OPD plays a vital role in promoting community health and wellness. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    );
};

export default OPD;
