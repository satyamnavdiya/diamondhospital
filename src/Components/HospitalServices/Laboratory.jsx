import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import laboratory from '../Images/laboratory.jpg'

const Laboratory = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white pt-32 max-sm:pt-[6.5rem]">
            {/* Hero Section */}
            <section className="relative h-[80vh] max-sm:h-[50vh] flex items-center justify-center overflow-hidden mix-blend-multiply">
                <div className="absolute inset-0">
                    <img
                        src={laboratory}
                        alt="laboratory Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Laboratory</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Precision Diagnostics: Delivering Accurate and Timely Results</span>
                    </motion.p>
                </div>
            </section>

            {/* About Urology */}
            <section className="py-10 w-[80%] div-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto"
                    >
                        <div className='mb-12'>
                            {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
                            <p className="text-gray-600  spec-text">
                                At RTSV - SDA Dimond Hospital, our Laboratory Department is at the forefront of diagnostic excellence. We are committed to providing high-quality, reliable testing services that are essential to effective patient care. Equipped with state-of-the-art technology and staffed by experienced laboratory professionals, our facility ensures rapid and precise results to support accurate diagnoses and timely treatment decisions.
                                <br /><br />
                                Our comprehensive range of laboratory services includes clinical chemistry, hematology, microbiology, immunology, molecular diagnostics, and pathology. By integrating advanced automated systems with rigorous quality control protocols, we maintain the highest standards of accuracy and efficiency. Our team works closely with physicians and specialists, ensuring that every test is performed with precision and tailored to meet the specific needs of each patient.
                                <br /><br />
                                Dedicated to enhancing patient outcomes, our laboratory not only delivers essential diagnostic information but also continually adopts the latest innovations in medical testing. At RTSV - SDA Dimond Hospital, we are proud to contribute to the overall excellence of healthcare by ensuring that every result is a step towards better, more informed patient care.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    );
};

export default Laboratory;
