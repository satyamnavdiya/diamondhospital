import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import ent from '../Images/ent.jpg'

const ENT = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="relative h-[80vh] max-sm:h-[50vh] flex items-center justify-center overflow-hidden mix-blend-multiply">
        <div className="absolute inset-0">
          <img
            src={ent}
            alt="ENT Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className='spec-hero-heading'>ENT</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Expert ENT Care: Advanced Solutions for Better Hearing, Breathing, and Communication</span>
          </motion.p>
        </div>
      </section>

      {/* About Urology */}
      <section className="py-10 w-[80%] div-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className=" mb-12">
              {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
              <p className="text-gray-600 spec-text">
                At RTSV - SDA Dimond Hospital, our ENT Department is dedicated to delivering comprehensive care for a wide range of ear, nose, and throat conditions. Our board-certified ENT specialists are equipped with advanced diagnostic tools and state-of-the-art technology to provide precise evaluations and personalized treatment plans. From hearing loss and balance disorders to sinus issues, allergies, and voice disorders, we offer a full spectrum of services designed to improve your quality of life.
                <br /><br />
                Our services include detailed hearing assessments, audiology consultations, allergy testing, and minimally invasive surgical procedures such as endoscopic sinus surgery. We also provide expert care for pediatric patients, ensuring that children receive gentle, effective treatments for ear infections, tonsillitis, and other common ENT concerns. Our multidisciplinary team works collaboratively with other specialists at RTSV - SDA Dimond Hospital to ensure integrated and holistic patient care.
                <br /><br />
                Committed to excellence and patient-centered care, our ENT Department emphasizes clear communication, ongoing support, and a focus on innovative therapies. Whether you require routine care or advanced surgical intervention, our goal is to help you achieve optimal ENT health. Contact us today to schedule a consultation and take the first step toward improved ear, nose, and throat wellness.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default ENT;
