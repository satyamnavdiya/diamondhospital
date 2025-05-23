import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import generalmedicine from '../Images/generalmedicine.jpg'

const GeneralMedicine = () => {
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
                        src={generalmedicine}
                        alt="Radiology Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>General Medicine</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className='spec-sub-heading'>Expert Care for Everyday and Chronic Health Needs</span>
                    </motion.p>
                </div>
            </section>

            {/* About Privacy Policy */}
            <section className="py-10 div-center w-[80%]">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto"
                    >
                        <div className="mb-12">
                            {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
                            <p className="text-gray-600 spec-text">
                                The General Medicine Department at SDA Diamond Hospital serves as the foundation of quality healthcare, offering expert diagnosis, treatment, and preventive care for a wide range of medical conditions. Our experienced physicians are trained to manage everything from common illnesses such as fever, infections, and allergies to chronic diseases like diabetes, hypertension, thyroid disorders, and respiratory problems. With a focus on accurate assessment and early intervention, we ensure patients receive timely and effective care.
                                <br /><br />
                                Our approach combines clinical expertise with advanced diagnostic tools, including pathology, imaging, and laboratory support, to deliver comprehensive care. Each patient is treated with a personalized plan that may include medication, lifestyle changes, and follow-up evaluations. The General Medicine team also collaborates closely with specialists from other departments to provide coordinated care for complex or multi-system conditions, ensuring a seamless treatment experience.
                                <br /><br />
                                At SDA Diamond Hospital, we believe in building long-term relationships with our patients by focusing on preventive health and ongoing management. Through regular health check-ups, patient education, and chronic disease monitoring, we help individuals maintain a healthy lifestyle and reduce the risk of future complications. With a commitment to compassionate and holistic care, our General Medicine Department supports your journey toward lifelong wellness. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    );
};

export default GeneralMedicine;
