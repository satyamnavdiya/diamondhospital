import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import dental from '../Images/dental.jpg'

const DentalSurgery = () => {
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
            src={dental}
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
            <span className='spec-hero-heading'>Dental Surgery</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Advanced Dental Surgery: Precision, Innovation, and Compassion</span>
          </motion.p>
        </div>
      </section>

      {/* About Urology */}
      <section id="guidance" className="py-20">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
              <p className="text-gray-600 text-justify">
                At RTSV - SDA Dimond Hospital, our Dental Surgery Department is committed to delivering exceptional oral care with a focus on precision, innovation, and personalized treatment. Our board-certified dental surgeons use the latest technology and minimally invasive techniques to ensure optimal outcomes for procedures ranging from routine extractions to complex reconstructive surgeries.
                <br /><br />
                We offer a comprehensive range of dental surgical services, including wisdom tooth removal, dental implant placement, corrective jaw surgery, and oral cancer treatments. Each procedure is designed to restore functionality and aesthetics while prioritizing your comfort and recovery. Our dedicated team collaborates closely to create individualized treatment plans that address your specific needs and enhance your overall oral health.
                <br /><br />
                Committed to excellence and patient-centered care, RTSV - SDA Dimond Hospital provides a supportive environment where your well-being is our top priority. With state-of-the-art facilities and compassionate expertise, we strive to make your dental surgery experience safe, efficient, and transformative. Contact us today to schedule your consultation and begin your journey to a healthier, more confident smile.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default DentalSurgery;
