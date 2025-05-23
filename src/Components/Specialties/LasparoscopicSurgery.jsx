import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import lasparoscopicsurgery from '../Images/lasparoscopicsurgery.jpg'

const LasparoscopicSurgery = () => {
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
                        src={lasparoscopicsurgery}
                        alt="Lasparoscopic Surgery Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Lasparoscopic Surgery</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <span className='spec-sub-heading'>Modern Surgical Care Through Laparoscopy</span>
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
                                At SDA Diamond Hospital, our Laparoscopic Surgery Department offers cutting-edge, minimally invasive procedures that ensure faster recovery, reduced pain, and minimal scarring. Commonly known as "keyhole surgery" laparoscopic techniques are used for a wide range of conditions involving the abdomen and pelvis, including gallbladder removal, hernia repair, appendectomy, and gynecological procedures. Our surgeons are highly trained in advanced laparoscopic methods to ensure precision and safety in every operation.
                                <br /><br />
                                Equipped with modern operation theaters and high-definition imaging systems, our laparoscopic procedures are performed with exceptional accuracy and control. The use of small incisions and specialized instruments allows for shorter hospital stays, fewer complications, and quicker return to daily activities. At SDA Diamond Hospital, we follow international standards and sterile protocols to provide a safe surgical environment with outstanding clinical outcomes.
                                <br /><br />
                                We understand that undergoing surgery can be stressful, which is why our team ensures thorough preoperative counseling and continuous postoperative support. Our surgeons work closely with anesthetists, nurses, and rehabilitation staff to offer a smooth and comfortable recovery process. At SDA Diamond Hospital, we are committed to delivering surgical care that is not only technically excellent but also compassionate and personalized to each patient's needs. <b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    );
};

export default LasparoscopicSurgery;
