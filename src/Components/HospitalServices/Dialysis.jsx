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
      <section className="hero-spec-hero relative flex items-center justify-center overflow-hidden mix-blend-multiply">
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
            <span className='spec-hero-heading'>Dialysis</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Advanced Dialysis Care: Ensuring Quality Kidney Health</span>
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
                At RTSV - SDA Dimond Hospital, our Dialysis Department is dedicated to providing life-sustaining treatment with advanced technology and a compassionate, patient-centered approach. We offer comprehensive dialysis services designed to support individuals with chronic kidney disease and those requiring renal replacement therapy.
                <br /><br />
                Our experienced team delivers both hemodialysis and peritoneal dialysis in a state-of-the-art setting, ensuring optimal treatment outcomes and patient comfort. With a focus on personalized care, we tailor each dialysis plan to meet individual needs, closely monitoring progress and adjusting treatments to promote long-term kidney health.
                <br /><br />
                Committed to improving quality of life, our Dialysis Department also emphasizes patient education and ongoing support. We work collaboratively with patients and their families, providing resources and guidance to help manage treatment, enhance wellness, and maintain an active lifestyle. Contact RTSV - SDA Dimond Hospital today to learn more about our advanced dialysis services and begin your journey toward improved kidney health.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default Dialysis;
