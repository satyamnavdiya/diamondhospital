import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import dental from '../Images/dental.jpg'

const doctors = [
  {
    id: 7,
    name: "Dr.Dhara Ranpariya",
    department: "DENTAL",
    experience: 5,
    imageUrl: "/IMG/doc/Dr. Dental.png",
    bio: "Dr. Dhara Ranpariya is a committed and skilled Dental Surgeon with over 5 years of clinical experience in the field of dentistry. She has worked at several reputable healthcare centers, including Puna Shaurashtra Dental Clinic (1 year), Dwarkesh Surgery and Trauma Center (1 year), Prayosa Dental Clinic (2 years), and has recently completed 1 year at Recent Hospital. Known for her gentle approach and attention to detail, Dr. Ranpariya provides quality dental care with a strong focus on patient comfort and long-term oral health.",
    education: "BDS",
    availability: {
      morning: "Morning - Mon to Sun: 10 AM - 1 AM",
      evening: "Evening - Mon to Sun: 5 PM - 8 PM"
    }
  },
  {
    id: 8,
    name: "Dr. Nirali Panseriya",
    department: "DENTAL",
    experience: 9,
    imageUrl: "/IMG/doc/Dr. Dental 2.png",
    bio: "Dr. Nirali Panseriya is an accomplished Dental Surgeon with over 9 years of experience in the field of dentistry. Her professional journey includes 1 year at Pradhyuman Dental Clinic, 3 years of running her own clinic, 2 years at Goti Dental Hospital, and 3 years at Diamond Hospital. With a deep commitment to patient care and clinical excellence, Dr. Panseriya is known for her expertise in a wide range of dental procedures, along with her patient-friendly approach and focus on long-term oral health.",
    education: "BDS",
    availability: {
      morning: "Morning - Mon to Sun: 10 AM - 1 AM",
      evening: "Evening - Mon to Sun: 5 PM - 8 PM"
    }
  },
]

const DentalSurgery = () => {
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

      {/* About Dental Surgery */}
      <section className="py-10 w-[80%] div-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="mb-12">
              {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
              <p className="text-gray-600 spec-text">
                At RTSV - SDA Dimond Hospital, our Dental Surgery Department is committed to delivering exceptional oral care with a focus on precision, innovation, and personalized treatment. Our board-certified dental surgeons use the latest technology and minimally invasive techniques to ensure optimal outcomes for procedures ranging from routine extractions to complex reconstructive surgeries.
                <br /><br />
                We offer a comprehensive range of dental surgical services, including wisdom tooth removal, dental implant placement, corrective jaw surgery, and oral cancer treatments. Each procedure is designed to restore functionality and aesthetics while prioritizing your comfort and recovery. Our dedicated team collaborates closely to create individualized treatment plans that address your specific needs and enhance your overall oral health.
                <br /><br />
                Committed to excellence and patient-centered care, RTSV - SDA Dimond Hospital provides a supportive environment where your well-being is our top priority. With state-of-the-art facilities and compassionate expertise, we strive to make your dental surgery experience safe, efficient, and transformative. Contact us today to schedule your consultation and begin your journey to a healthier, more confident smile.<b>We offer all our services at competitive prices.</b>
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
            <div className="relative bg-white rounded-lg shadow-xl doc-profile overflow-y-auto " onClick={e => e.stopPropagation()}>
              <div className="flex flex-col md:flex-row">
                {/* Doctor image - left side */}
                <div className="doc-image">
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

export default DentalSurgery;
