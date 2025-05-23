import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import Plasticsurgery from '../Images/PlasticSurgery.png'



const PlasticSurgery = () => {

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
                        src={Plasticsurgery}
                        alt="PlasticSurgery Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Plastic And Cosmetic Surgery </span>
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

            {/* About PlasticSurgery  */}
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
                                At SDA Diamond Hospital, our Plastic Surgery department is committed to providing comprehensive care that combines artistry with medical expertise. Our skilled plastic surgeons are experienced in both cosmetic and reconstructive procedures, ensuring patients receive personalized treatment tailored to their unique needs. Whether you seek to enhance your appearance or require reconstruction after trauma or illness, our team prioritizes your safety and satisfaction at every step.
                                <br /><br />
                                We offer a wide range of services including rhinoplasty, breast augmentation, facelifts, liposuction, burn treatment, and corrective surgeries for congenital or acquired deformities. Using the latest techniques and state-of-the-art technology, we focus on delivering natural-looking results with minimal downtime. Our holistic approach also emphasizes preoperative counseling and postoperative care, ensuring a smooth recovery and optimal outcomes.
                                <br /><br />
                                SDA Diamond Hospital is dedicated to creating a comfortable and supportive environment where patients can feel confident in their decisions. Our multidisciplinary team works closely with dermatologists, anesthetists, and physiotherapists to provide comprehensive care throughout your journey. With compassion and expertise, we strive to restore both form and function, helping you achieve renewed confidence and improved quality of life.<b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section >

        


        </div >
    );
};

export default PlasticSurgery;
