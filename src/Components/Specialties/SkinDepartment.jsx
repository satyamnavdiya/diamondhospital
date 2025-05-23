import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import Skindepartment from '../Images/SkinDepartment.png'



const SkinDepartment = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="spec-hero">
            {/* Hero Section */}
            <section className="hero-sec-img relative  flex items-center justify-center overflow-hidden mix-blend-multiply">
                <div className="absolute inset-0">
                    <img
                        src={Skindepartment}
                        alt=" Skin Department Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Dermatology And Cosmetology</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Enhancing Beauty, Restoring Confidence with Expert Care.</span>
                    </motion.p>
                </div>
            </section>

            {/* About  SkinDepartment  */}
            <section className="py-10 div-center w-[80%]">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" mx-auto"
                    >
                        <div className="mb-12">
                            {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
                            <p className="text-gray-600 spec-text">
                                The Skin Department at SDA Diamond Hospital is dedicated to providing expert care for a wide range of skin, hair, and nail conditions. Our team of experienced dermatologists offers accurate diagnosis and effective treatments for common concerns like acne, eczema, psoriasis, allergies, fungal infections, and hair loss, as well as complex skin disorders. With a patient-centered approach, we ensure every individual receives personalized care tailored to their specific needs.
                                <br /><br />
                                Equipped with the latest dermatological technology, our department offers advanced treatments such as chemical peels, laser therapy, cryotherapy, phototherapy, and skin biopsies. We also provide specialized cosmetic dermatology services including anti-aging treatments, scar reduction, skin rejuvenation, and pigmentation correction. Each procedure is performed with the highest standards of hygiene and safety to deliver optimal results with minimal discomfort.
                                <br /><br />
                                At SDA Diamond Hospital, we believe healthy skin is key to overall well-being and confidence. Our dermatologists take the time to educate patients on proper skincare routines, preventive measures, and lifestyle adjustments to maintain long-term skin health. With compassionate care and professional expertise, our Skin Department is committed to helping you achieve clear, healthy, and radiant skin at every stage of life. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section >




        </div >
    );
};

export default SkinDepartment;
