import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import fetalmedicines from '../Images/fetalmedicines.jpg'



const FetalMedicines = () => {

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
                        src={fetalmedicines}
                        alt="Fetal Medicines Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Fetal Medicines</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Advanced Care for Mother and Baby Before Birth</span>
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
                                The Fetal Medicine Department at SDA Diamond Hospital focuses on the health and development of unborn babies through advanced prenatal screening, diagnosis, and treatment. Our highly trained fetal medicine specialists work closely with obstetricians and radiologists to monitor high-risk pregnancies, detect abnormalities early, and ensure the best possible outcomes for both mother and baby. We are committed to providing expert care during the most critical stages of pregnancy.
                                <br /><br />
                                Equipped with state-of-the-art ultrasound and fetal imaging technology, we offer a wide range of diagnostic services including anomaly scans, fetal echocardiography, genetic screening, and invasive procedures like amniocentesis and chorionic villus sampling (CVS). Our goal is to identify and manage conditions such as congenital abnormalities, growth restrictions, multiple pregnancies, and genetic disorders at the earliest possible stage.
                                <br /><br />
                                At SDA Diamond Hospital, we understand the emotional and medical challenges families face during high-risk pregnancies. Our fetal medicine team provides compassionate counseling, clear communication, and personalized care plans tailored to each family’s needs. We support parents with knowledge, guidance, and confidence throughout their journey—ensuring a safer, healthier beginning for their child. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section >




        </div >
    );
};

export default FetalMedicines;
