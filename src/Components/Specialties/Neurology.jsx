import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import neurology from '../Images/neurology.jpg'

const Neurology = () => {
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
            src={neurology}
            alt="Neurology Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className="spec-hero-heading">Neurology</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Expert Neurological Care: Precision, Innovation, Compassion</span>
          </motion.p>
        </div>
      </section>

      {/* About Urology */}
      <section className="py-10 w-[80%] div-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div>
              {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
              <p className="text-gray-600 spec-text">
                At RTSV - SDA Dimond Hospital, our Neurology Department is dedicated to delivering comprehensive, compassionate care for patients facing a wide range of neurological conditions. Our board-certified neurologists and experienced support team work together to diagnose, manage, and treat disorders such as stroke, epilepsy, movement disorders, and neuromuscular diseases with personalized treatment plans that cater to each patient’s unique needs.
                <br />
                Using advanced diagnostic tools—including state-of-the-art neuroimaging and electrophysiological studies—we ensure precise evaluations that guide effective interventions. Our services extend from acute care in emergency settings to long-term management of chronic conditions like Parkinson’s disease, multiple sclerosis, and cognitive disorders, employing a collaborative, multidisciplinary approach for the best possible patient outcomes.
                <br />
                At RTSV - SDA Dimond Hospital, we are committed not only to treating neurological conditions but also to enhancing the overall quality of life through innovative therapies, comprehensive rehabilitation, and ongoing community support. If you or a loved one is experiencing neurological challenges, contact us today to schedule a consultation and embark on your journey toward improved neurological health.
              </p>
            </div>

          </motion.div>
        </div>
      </section>



    </div >
  );
};

export default Neurology;
