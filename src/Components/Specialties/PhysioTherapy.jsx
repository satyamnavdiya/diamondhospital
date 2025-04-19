import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import physiotheraphy from '../Images/physiotheraphy.jpg'

const doctors = [
  {
    id: 9,
    name: "Dr. Khushi Mavani",
    department: "PHYSIOTHERAPY",
    experience: 2,
    imageUrl: "/IMG/doc/.png",
    bio: "Dr. Khushi Mavani is a passionate and dedicated Physiotherapist who has recently started her professional journey in the field of physical therapy. As a fresher, she is committed to helping patients improve their mobility, reduce pain, and regain strength through tailored therapeutic treatments. Dr. Mavani brings a fresh perspective to physiotherapy with a focus on holistic care and patient well-being.",
    education: "Bachelor of Physiotherapy",
    availability: {
      evening: "Evening - Mon to Sun: 1 PM - 7 PM"
    }
  },
  {
    id: 10,
    name: "Dr. Mittal Vaddoriya",
    department: "PHYSIOTHERAPY",
    experience: 2,
    imageUrl: "/IMG/doc/.png",
    bio: "Dr. Mittal Vaddoriya is a skilled Physiotherapist with extensive experience working at Metas Adventist Hospital. With a strong commitment to improving patient mobility and quality of life, Dr. Vaddoriya utilizes a combination of evidence-based therapeutic techniques to treat various musculoskeletal and neurological conditions. Her patient-centered approach ensures that each individual receives personalized care tailored to their specific needs.",
    education: "Bachelor of Physiotherapy",
    availability: {
      evening: "Evening - Mon to Sun: 1 PM - 7 PM"
    }
  },
  {
    id: 11,
    name: "Dr. Karina Ribadiya",
    department: "PHYSIOTHERAPY",
    experience: 3,
    imageUrl: "/IMG/doc/.png",
    bio: "Dr. Karina Ribadiya is a dedicated Physiotherapist with 2 years of experience at P P Savani Hospital. She specializes in helping patients recover from injuries, manage chronic pain, and improve mobility through personalized physiotherapy treatments. Dr. Ribadiya is committed to providing compassionate care and evidence-based interventions to support patients on their journey to better physical health.",
    education: "Bachelor of Physiotherapy",
    availability: {
      morning: "Morning - Mon to Sun: 9 AM - 1 AM",
      evening: "Evening - Mon to Sun: 4 PM - 8 PM"
    }
  },
]

const PhysioTherapy = () => {
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

      {/* About PhysioTherapy */}
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
                Committed to a patient-centered approach, we ensure clear communication, ongoing support, and a compassionate environment throughout your recovery journey. Contact RTSV - SDA Dimond Hospital today to schedule your consultation and take the first step toward a healthier, more active future. <b>We offer all our services at competitive prices.</b>
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

export default PhysioTherapy;
