import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import urology from '../Images/urology.jpg'

const Urology = () => {
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
            src={urology}
            alt="Urology Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className='spec-hero-heading'>Urology</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Expert Urologic Care: Personalized, Advanced, Compassionate</span>
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
            className="max-w-4xl mx-auto"
          >
            <div>
              {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
              <p className="text-gray-600 spec-text">
                At <b>RTSV - SDA Dimond Hospital</b>, our board-certified urologists are committed to delivering personalized, comprehensive care for a wide range of urologic conditions. We leverage advanced diagnostics and minimally invasive techniques to ensure effective and safe treatments tailored to each patient’s unique needs.
                <br />
                Our team specializes in managing issues such as kidney stones, prostate disorders, urinary tract infections, and male infertility. With state-of-the-art technology and a patient-centered approach, we work to provide not only cutting-edge medical interventions but also the support and education necessary for optimal recovery.
                <br />
                Experience the compassionate, expert care that distinguishes our Urology Department. Whether you’re dealing with a chronic condition or require immediate treatment, we invite you to contact us today to schedule a consultation and take the first step toward improved urologic health.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default Urology;
