import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import ent from '../Images/ent.jpg'

const doctors = [
  {
    id: 13,
    name: "Dr. Gaurav Raiyani",
    department: "GENERAL MEDICINE",
    experience: 8,
    imageUrl: "/IMG/doc/6.png",
    bio: "Dr. Gaurav Raiyani is a highly experienced General Medicine specialist with 8 years of expertise in patient care. He has worked at renowned institutions such as New Civil Hospital (4.5 years) and Simmer Hospital (3.5 years), where he provided comprehensive medical care for a wide range of acute and chronic conditions. Dr. Raiyani is known for his thorough approach to diagnosis and treatment, along with his commitment to patient well-being and continuous professional development.",
    education: "MBBS, MD(GENRAL MEDICINE), FELLOWSHIP IN 2D ECHO, FELLOWSHIP IN DIABETES MANAGEMENT, FELLOWSHIP THYROID DESEASE MANAGEMENT",
    availability: {
      morning: "Morning - Mon to Sun: 10 AM - 1 AM",
      evening: "Evening - Mon to Sun: 5 PM - 8 PM"
    },
  },
]

const ENT = () => {
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
    <div className="min-h-screen bg-white pt-32 max-[991px]:pt-[6rem] max-sm:pt-[6.5rem]">
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
                Committed to excellence and patient-centered care, our ENT Department emphasizes clear communication, ongoing support, and a focus on innovative therapies. Whether you require routine care or advanced surgical intervention, our goal is to help you achieve optimal ENT health. Contact us today to schedule a consultation and take the first step toward improved ear, nose, and throat wellness.<b>We offer all our services at competitive prices.</b>
              </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* About Doctors */}
      <div className='w-[80%] max-sm:w-[80%] div-center'>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {doctors.map((doctor) => (

            <div key={doctor.id} className="bg-white flex overflow-hidden shadow rounded-lg transition-all duration-200 hover:shadow-lg">

              <div className="p-2 w-[50%] ">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover rounded-2xl"
                  loading='lazy'
                />
              </div>

              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">{doctor.name}</h3>
                <div className="mt-1 flex items-center">
                  <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {doctor.department}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{doctor.experience} years experience</p>
                <div className="mt-4">
                  <button
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    onClick={() => handleViewProfile(doctor)}
                  >
                    View Profile
                  </button>
                </div>
              </div>
            </div>

          ))}
        </div>

        {/* Doctor Profile Modal */}
        {modalOpen && selectedDoctorData && (
          <div
            className="fixed inset-0 z-50 overflow-y-auto modal-overlay bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={handleOutsideClick}
          >
            <div className="relative bg-white rounded-lg shadow-xl doc-profile overflow-y-auto max-sm:pt-[19rem]" onClick={e => e.stopPropagation()}>
              <div className="flex flex-col md:flex-row">
                {/* Doctor image - left side */}
                <div className="md:w-1/3 h-64 md:h-auto">
                  <img
                    src={selectedDoctorData.imageUrl.replace('w=300', 'w=600')}
                    alt={selectedDoctorData.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Doctor details - right side */}
                <div className="md:w-2/3 p-6">
                  <div className="border-b pb-4 mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">{selectedDoctorData.name}</h2>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                        {selectedDoctorData.department}
                      </span>
                      {/* <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                      {selectedDoctorData.specialty}
                    </span> */}
                      <span className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                        {selectedDoctorData.experience} years experience
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">About</h3>
                    <p className="text-gray-600">{selectedDoctorData.bio}</p>
                  </div>

                  {/* Education */}
                  <div className="mb-6 flex items-start">
                    <Award className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Education</h3>
                      <p className="text-gray-600">{selectedDoctorData.education}</p>
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="mb-6 flex items-start">
                    <Calendar className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">Availability</h3>
                      <p className="text-gray-600">{selectedDoctorData.availability.morning}</p>
                      <p className="text-gray-600">{selectedDoctorData.availability.evening}</p>
                    </div>
                  </div>

                  {/* Book Appointment Button */}
                  <div className="mt-6">
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                      Book an Appointment
                    </button>
                    {/* Close button */}
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200 mt-5" onClick={handleCloseModal}>
                      Close
                    </button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div >
  );
};

export default ENT;
