import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import ambulance from '../Images/ambulance.jpg'

const Ambulance = () => {
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
            src={ambulance}
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
            <span className='spec-hero-heading'>Ambulance</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Rapid Response Ambulance Service: Swift, Reliable, and Compassionate Emergency Transport</span>
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
            className=" mx-auto"
          >
            <div className="mb-12">
              {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
              <p className="text-gray-600 spec-text">
                At RTSV - SDA Dimond Hospital, our Ambulance Service is dedicated to providing immediate, life-saving support with the utmost care and professionalism. Equipped with advanced life-support systems and state-of-the-art communication technology, our fleet of ambulances ensures prompt and safe transport for patients in critical need. Our skilled emergency medical technicians and paramedics are available around the clock to deliver on-scene stabilization and rapid transit to our hospital.
                <br /><br />
                Our team is committed to excellence in emergency care, working seamlessly with our hospital staff to ensure that patients receive timely, coordinated treatment. From the moment you call for help, our experts are prepared to assess your condition, initiate necessary interventions, and provide continuous monitoring during transport. This integrated approach not only minimizes delays but also enhances patient outcomes by delivering critical care en route to our facility.
                <br /><br />
                Trust our Ambulance Service to be your lifeline during emergencies. At RTSV - SDA Dimond Hospital, we pride ourselves on a compassionate, efficient response that prioritizes your health and safety, ensuring that every journey begins with expert care and swift action. <b>We offer all our services at competitive prices.</b>
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default Ambulance;
