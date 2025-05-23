import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import dialysis from '../Images/dialysis.jpg'

const Dialysis = () => {
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
            src={dialysis}
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
            <span className='spec-hero-heading'>Nephrology And Dialysis</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className='spec-sub-heading'>Reliable and Safe Dialysis with Expert Nephrology Guidance</span>
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
                The Nephrology Department at SDA Diamond Hospital is dedicated to the diagnosis, treatment, and long-term management of kidney-related diseases. Our experienced nephrologists provide expert care for a range of conditions, including chronic kidney disease (CKD), acute kidney injury, kidney infections, electrolyte imbalances, and hypertension-related complications. With a patient-first approach, we offer personalized treatment plans that aim to preserve kidney function and improve overall health.
                <br /><br />
                Our Dialysis Unit is equipped with modern hemodialysis machines and strict infection control protocols to ensure safe and comfortable treatment for patients with end-stage renal disease. We provide both outpatient and inpatient dialysis services, including emergency dialysis support. The unit is staffed by skilled technicians and nurses under the supervision of nephrologists, ensuring high-quality care and continuous monitoring during each session.
                <br /><br />
                At SDA Diamond Hospital, we understand the challenges of living with kidney disease. Our team offers not only medical treatment but also nutritional counseling, lifestyle guidance, and emotional support to help patients manage their condition effectively. Through regular monitoring, education, and compassionate care, our goal is to enhance the quality of life for every patient on their journey to better kidney health. <b>We offer all our services at competitive prices.</b>
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default Dialysis;
