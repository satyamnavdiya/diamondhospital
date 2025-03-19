import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import physiotheraphy from '../Images/physiotheraphy.jpg'

const PhysioTherapy = () => {
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
            src={physiotheraphy}
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
            <span className='spec-hero-heading'>Physio Therapy</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Advanced Physiotherapy: Personalized Care for Movement and Recovery</span>
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
                At RTSV - SDA Dimond Hospital, our Physiotherapy Department is dedicated to restoring mobility, alleviating pain, and enhancing overall wellness. Our experienced team of physiotherapists collaborates closely with physicians and specialists to create personalized rehabilitation programs tailored to each patient’s unique needs.
                <br /><br />
                We offer a comprehensive range of services—from post-surgical rehabilitation and sports injury recovery to chronic pain management and neurological therapy. Utilizing state-of-the-art equipment and evidence-based techniques, our treatments focus on restoring strength, flexibility, balance, and functional movement, empowering you to regain independence and improve your quality of life.
                <br /><br />
                Committed to a patient-centered approach, we ensure clear communication, ongoing support, and a compassionate environment throughout your recovery journey. Contact RTSV - SDA Dimond Hospital today to schedule your consultation and take the first step toward a healthier, more active future.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default PhysioTherapy;
