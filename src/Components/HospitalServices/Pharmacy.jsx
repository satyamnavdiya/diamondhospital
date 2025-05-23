import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import pharmacy from '../Images/pharmacy.jpg'

const Pharmacy = () => {
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
                        src={pharmacy}
                        alt="Pharmacy Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Pharmacy</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Comprehensive Pharmacy Services: Precision, Safety, and Accessibility</span>
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
                                At RTSV - SDA Dimond Hospital, our Pharmacy Department is dedicated to delivering exceptional medication management and support to enhance patient care. Our skilled pharmacists and technicians work closely with healthcare teams to ensure that every patient receives the right medication, at the right dose, tailored to their unique needs.
                                <br /><br />
                                We offer a full range of services, including prompt dispensing of prescriptions, thorough medication counseling, and vigilant monitoring of drug interactions. Our state-of-the-art pharmacy utilizes advanced technologies to streamline processes, ensuring both efficiency and safety. We also provide educational resources to empower patients to better understand their treatment plans and achieve optimal health outcomes.
                                <br /><br />
                                Committed to excellence in healthcare, our Pharmacy Department plays a crucial role in supporting the overall well-being of our community. At RTSV - SDA Dimond Hospital, we are here to ensure that every step of your medication journey is managed with precision, care, and a focus on your health. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    );
};

export default Pharmacy;
