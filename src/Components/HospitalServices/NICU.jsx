import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import nicu from '../Images/nicu.jpg'

const NICU = () => {
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
            src={nicu}
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
          <span className='spec-hero-heading'>NICU</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Compassionate Neonatal Care: Specialized NICU for a Brighter Start</span>
          </motion.p>
        </div>
      </section>

      {/* About Urology */}
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
                At RTSV - SDA Dimond Hospital, our Neonatal Intensive Care Unit (NICU) is dedicated to providing advanced, compassionate care for our most vulnerable patients—newborns requiring specialized support. Our highly trained neonatologists, nurses, and support staff work together in a state-of-the-art environment, ensuring each infant receives personalized treatment and round-the-clock monitoring.
                <br /><br />
                Equipped with cutting-edge technology and modern monitoring systems, our NICU offers comprehensive services including respiratory support, nutritional therapy, and infection control. We tailor our care to meet the unique needs of every newborn, ensuring rapid intervention and continuous evaluation to foster healthy development and optimal outcomes.
                <br /><br />
                We also understand the crucial role families play in the healing process. Our team is committed to involving parents in every step of their baby’s care, offering education, support, and counseling during this sensitive time. At RTSV - SDA Dimond Hospital, our NICU strives to create a nurturing environment where every child is given the best possible start in life.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default NICU;
