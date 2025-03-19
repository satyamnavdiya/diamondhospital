
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import Ophthalmology1 from '../Images/Ophthalmology1.jpg'

const Ophthalmology = () => {
  const [activeSection, setActiveSection] = useState('purpose');

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
            src={Ophthalmology1}
            alt="Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className='spec-hero-heading'>Ophthalmology Care</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Your Vision, Our Focus: Expert Eye Care Tailored for You</span>
          </motion.p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-10 w-[80%] div-center">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto div-center"
          >
            <h2 className="font-display text-4xl text-center mb-6"><span className='spec-heading spec-gradient'>Our Purpose</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed spec-text">
              At <b>RTSV - SDA Dimond Hospital</b>, our Ophthalmology Department is dedicated to preserving, restoring, and enhancing your vision through a patient-centered approach that combines advanced technology, clinical expertise, and compassionate care. Our multidisciplinary team of ophthalmologists, surgeons, optometrists, and support staff work collaboratively to deliver personalized eye care for patients of all ages and needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Expertise and Advanced Technology */}
      <section className="py-10 w-[80%] div-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Expertise and Advanced Technology</span></h2>
              <p className="text-gray-600 spec-text">Our specialists are highly trained in diagnosing and treating a broad spectrum of eye conditions. We utilize the latest diagnostic tools and surgical techniques to ensure accurate evaluations and effective treatments. Our services include:</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Comprehensive Eye Exams",
                  description: "Thorough assessments using advanced imaging and diagnostic tools.",
                },
                {
                  title: "Cataract Surgery",
                  description: "Minimally invasive procedures to restore clear vision.",
                },
                {
                  title: "Glaucoma Management",
                  description: "Early detection and treatment options to manage pressure and protect vision.",
                },
                {
                  title: "Retinal Care",
                  description: "State-of-the-art treatments for retinal diseases, including diabetic retinopathy and macular degeneration",
                },
                {
                  title: "Corneal Services",
                  description: "Treatments ranging from laser vision correction to complex corneal surgeries.",
                },
                {
                  title: "Pediatric Eye Care",
                  description: "Specialized examinations and treatments tailored to the needs of children.",
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600 spec-text">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Dedicated Team */}
      <section className="py-10 w-[80%] div-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Our Dedicated Team</span></h2>
              <p className="text-gray-600 spec-text">Our ophthalmologists bring decades of combined experience and a passion for advancing eye care. They collaborate closely with other medical experts to ensure a multidisciplinary approach to each patient's needs. With a focus on continuous education and innovation, our team is committed to providing the highest standard of care.</p>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Patient-Centered Approach</span></h2>
              <p className="text-gray-600 spec-text">At <b>RTSV - SDA Dimond Hospital</b>, we believe that every patient deserves individualized attention. Our team takes the time to explain each diagnosis and treatment option, empowering you to make informed decisions about your eye health. From the initial consultation through post-operative care, we are with you every step of the way, ensuring a seamless and comfortable experience.</p>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Commitment to Community Health</span></h2>
              <p className="text-gray-600 spec-text">We are dedicated not only to treating eye conditions but also to educating our community about preventive care and the importance of regular eye exams. Our outreach programs and community events are designed to promote eye health awareness and to provide accessible care to those in need.
              </p>
            </div>

            <div className="mb-12">
              <p className="text-gray-600 spec-text">Whether you are seeking routine eye care or require specialized treatment, our Ophthalmology Department at <b>RTSV - SDA Hospital</b> is here to help you achieve optimal vision health. Schedule your appointment today and take the first step towards a clearer, brighter future.</p>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Ophthalmology;
