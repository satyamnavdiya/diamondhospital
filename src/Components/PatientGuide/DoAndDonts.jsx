import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import dosdonts from '../Images/dos-donts.jpg'
import { Check } from 'lucide-react';

const DoAndDonts = () => {
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
                        src={dosdonts}
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
                        <span className='spec-hero-heading'>Do's And Don'ts</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Patient Guidelines: Do's and Don'ts for a Safe, Respectful Hospital Experience</span>
                    </motion.p>
                </div>
            </section>

            {/* About Urology */}
            <section className="py-10 div-center w-[80%]">
                <div >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" mx-auto"
                    >
                        <div className="mb-12">
                            {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
                            <div className='grid grid-cols-2 div-center max-sm:block'>
                                {/* Do */}
                                <div className='mr-10'>
                                    <h1 className='text-3xl doc-heading doc-gradient max-sm:leading-none'>Do’s</h1>
                                    <p className='spec-text'> <Check className='inline' /> Be open and accurate about description of symptoms and medical history</p>
                                    <p className='spec-text'> <Check className='inline' /> Participate and ask questions with specialists and know your treatment plan</p>
                                    <p className='spec-text'> <Check className='inline' /> Be willing to follow expert advice</p>
                                    <p className='spec-text'> <Check className='inline' /> Report any complications, allergies immediately</p>
                                    <p className='spec-text'> <Check className='inline' /> Respect hospital staff and their instructions</p>
                                    <p className='spec-text'> <Check className='inline' /> Maintain hygiene and decorum</p>
                                    <p className='spec-text'> <Check className='inline' /> Be polite in conversation</p>
                                </div>

                                <div className='max-sm:mt-10'>
                                    <h1 className='text-3xl doc-heading doc-gradient max-sm:leading-none'>Don’ts</h1>
                                    <p className='spec-text'> <Check className='inline' /> Deviate from the treatment plan</p>
                                    <p className='spec-text'> <Check className='inline' /> Hide information from the doctor</p>
                                    <p className='spec-text'> <Check className='inline' /> Self-medication</p>
                                    <p className='spec-text'> <Check className='inline' /> Deviate from dietary and other instructions</p>
                                    <p className='spec-text'> <Check className='inline' /> Smoke and spit within the hospital premises</p>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    );
};

export default DoAndDonts;
