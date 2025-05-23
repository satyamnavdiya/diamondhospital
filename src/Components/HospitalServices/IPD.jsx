import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import ipd from '../Images/ipd.jpg'

const IPD = () => {
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
            src={ipd}
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
            <span className='spec-hero-heading'>IPD</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Excellence in Inpatient Care: Comprehensive, Compassionate, and Customized</span>
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
                At RTSV - SDA Dimond Hospital, our Inpatient Department (IPD) is dedicated to delivering exceptional, round-the-clock care in a healing and supportive environment. Our state-of-the-art facilities and skilled medical professionals ensure that every patient receives personalized treatment, seamless coordination, and the highest standard of care throughout their hospital stay.
                <br /><br />
                Our multidisciplinary team of physicians, nurses, and allied health specialists work together to manage each patient's unique needs—from pre-admission assessments and surgical interventions to post-operative recovery and rehabilitation. This integrated approach not only prioritizes clinical excellence but also focuses on patient comfort, safety, and well-being.
                <br /><br />
                We understand that hospitalization can be challenging, which is why our IPD services are designed to provide both expert medical care and empathetic support. At RTSV - SDA Dimond Hospital, we are committed to ensuring a smooth, compassionate, and successful recovery journey for every patient. <b>We offer all our services at competitive prices.</b>
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default IPD;
