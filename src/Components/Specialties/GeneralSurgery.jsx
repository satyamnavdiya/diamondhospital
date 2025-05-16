import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import generalsurgery from '../Images/general-surgery.jpg'

// const doctors = [
//   {
//     id: 13,
//     name: "Dr. Gaurav Raiyani",
//     department: "GENERAL MEDICINE",
//     experience: 8,
//     imageUrl: "/IMG/doc/6.png",
//     bio: "Dr. Gaurav Raiyani is a highly experienced General Medicine specialist with 8 years of expertise in patient care. He has worked at renowned institutions such as New Civil Hospital (4.5 years) and Simmer Hospital (3.5 years), where he provided comprehensive medical care for a wide range of acute and chronic conditions. Dr. Raiyani is known for his thorough approach to diagnosis and treatment, along with his commitment to patient well-being and continuous professional development.",
//     education: "MBBS, MD(GENRAL MEDICINE), FELLOWSHIP IN 2D ECHO, FELLOWSHIP IN DIABETES MANAGEMENT, FELLOWSHIP THYROID DESEASE MANAGEMENT",
//     availability: {
//         morning: "Morning - Mon to Sun: 10 AM - 1 AM", 
//         evening: "Evening - Mon to Sun: 5 PM - 8 PM"
//     }, 
// },
// ]

const GeneralSurgery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDoctorData, setSelectedDoctorData] = useState(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  // Handle opening the modal with doctor data
  const handleViewProfile = (doctor) => {
    setSelectedDoctorData(doctor);
    setModalOpen(true);
    // Add a class to the body to prevent scrolling when modal is open
    document.body.classList.add('overflow-hidden');
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedDoctorData(null);
    // Remove the class from the body to allow scrolling again
    document.body.classList.remove('overflow-hidden');
  };

  // Close modal when clicking outside of it
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };


  return (
    <div className="spec-hero">
      {/* Hero Section */}
      <section className="hero-sec-img relative flex items-center justify-center overflow-hidden mix-blend-multiply">
        <div className="absolute inset-0">
          <img
            src={generalsurgery}
            alt="generalsurgery Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className='spec-hero-heading'>General Surgery</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'> Advanced Surgical Care for Safe and Effective Treatment</span>
          </motion.p>
        </div>
      </section>

      {/* About Obstetric */}
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
                At RTSV - SDA Dimond Hospital, our General Surgery Department offers comprehensive surgical solutions with a focus on safety, accuracy, and patient-centered care. Our team of experienced surgeons is skilled in performing a wide range of procedures—both elective and emergency—using advanced surgical techniques and modern equipment.
                <br /><br />
                We provide treatment for conditions such as hernias, gallbladder diseases, appendicitis, abdominal disorders, and soft tissue surgeries. With the support of state-of-the-art operation theatres and minimally invasive (laparoscopic) technology, we ensure quicker recovery, minimal scarring, and reduced hospital stays.
                <br /><br />
                From diagnosis to post-operative care, our dedicated team works closely with patients to ensure comfort, clear communication, and the highest standard of care. At RTSV - SDA Dimond Hospital, your health and well-being are in the safest hands.<b>We offer all our services at competitive prices.</b>
              </p>
            </div>

          </motion.div>
        </div>
      </section>


    </div >
  );
};

export default GeneralSurgery;
