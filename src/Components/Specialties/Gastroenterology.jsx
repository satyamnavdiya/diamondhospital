import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import gastroenterology from '../Images/gastroenterology.jpg'



const Gastroenterology = () => {

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
                        src={gastroenterology}
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
                        <span className='spec-hero-heading'>Gastroenterology</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Expert Care for Your Digestive Health</span>
                    </motion.p>
                </div>
            </section>

            {/* About  Gastroenterology  */}
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
                                The Gastroenterology Department at SDA Diamond Hospital offers specialized care for all disorders related to the digestive system, including the stomach, liver, intestines, pancreas, and esophagus. Our team of highly trained gastroenterologists is committed to accurate diagnosis, effective treatment, and long-term management of conditions such as acidity, ulcers, hepatitis, liver cirrhosis, irritable bowel syndrome (IBS), and inflammatory bowel disease (IBD).
                                <br /><br />
                                We are equipped with state-of-the-art facilities for diagnostic procedures such as endoscopy, colonoscopy, liver function tests, and ultrasound-guided biopsies. Our advanced treatment options include both medical and minimally invasive endoscopic procedures, ensuring quicker recovery and minimal discomfort. With a strong focus on precision and patient safety, our specialists follow evidence-based protocols to deliver the best possible outcomes.
                                <br /><br />
                                At SDA Diamond Hospital, we prioritize patient comfort, education, and long-term digestive wellness. Our gastroenterologists work closely with dietitians, surgeons, and radiologists to offer a multidisciplinary approach tailored to each patient's unique needs. From preventive screenings to chronic condition management, our goal is to help patients regain their digestive health and improve their quality of life. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section >




        </div >
    );
};

export default Gastroenterology;
