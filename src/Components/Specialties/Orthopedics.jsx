import React, {useState} from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import orthopedic from '../Images/orthopedic.jpg'

const doctors = [
  {
    id: 4,
    name: "Dr. Riddhi Vaghani",
    department: "GYNECOLOGY",
    experience: 13,
    imageUrl: "/IMG/doc/.png",
    bio: "Dr. Riddhi Vaghani is an experienced and dedicated Gynecologist with a rich clinical background spanning over 13 years. She has served in several reputed institutions, including 5 years at Simmer Hospital, 3 years at Gujarat Adani Institute of Medical Sciences, 1 year at Balaji Hospital, and 4 years at Dimond Hospital. Known for her compassionate care and clinical expertise, Dr. Vaghani has consistently provided high-quality healthcare services to women across all stages of life.",
    education: "MBBS, MS, OBS & GYN",
    availability: {
      morning: "Morning - Mon to Sun: 10 AM - 1 AM",
      evening: "Evening - Mon to Sun: 5 PM - 8 PM"
    }
  },
  {
    id: 3,
    name: "Dr. Kalpana Patel",
    department: "GYNECOLOGY",
    experience: 7,
    imageUrl: "/IMG/doc/.png",
    bio: "Dr. Kalpana Patel is a skilled and compassionate Gynecologist with 7 years of experience in women's healthcare. Throughout her career, she has been dedicated to providing comprehensive gynecological services, focusing on patient comfort, education, and evidence-based care. Dr. Patel is committed to empowering women through all stages of reproductive health with professionalism and empathy.",
    education: "MBBS, DGO",
    availability: {
      morning: "Morning - Mon to Sun: 10 AM - 1 AM",
      evening: "Evening - Mon to Sun: 5 PM - 8 PM"
    }
  },
  {
    id: 1,
    name: "Dr. Bhavesh Parmar",
    department: "GYNECOLOGY",
    experience: 9,
    imageUrl: "/IMG/doc/.png",
    bio: "Dr. Bhavesh Parmar has been serving in the field of Gynecology since 2015, bringing nearly a decade of dedicated experience in women’s healthcare. With a strong commitment to patient well-being and clinical excellence, Dr. Parmar has continually contributed to advancements in gynecological care through both practice and ongoing medical engagement.",
    education: "MBBS, DNB",
    availability: {
      morning: "Morning - Mon to Sun: 10 AM - 1 AM",
      evening: "Evening - Mon to Sun: 5 PM - 8 PM"
    }
  },
]


const Orthopedics = () => {
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
    <div className="spec-hero" >
      {/* Hero Section */}
      <section className="hero-sec-img relative flex items-center justify-center overflow-hidden mix-blend-multiply ">
        <div className="absolute inset-0">
          <img
            src={orthopedic}
            alt="orthopedic Professional medical care"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
        </div>
        <div className="container relative z-10 text-center text-white px-4">
          <motion.h1
            className="font-display text-5xl md:text-6xl mb-4 font-bold"
            {...fadeInUp}
          >
            <span className='spec-hero-heading'>Orthopedic Specialty Center</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className='spec-sub-heading'>Advanced Care for Bones, Joints & Mobility</span>
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
                At RTSV - SDA Dimond Hospital, our Orthopedic Specialty Center is committed to delivering expert care for bone, joint, and muscle conditions. Our team of highly skilled orthopedic surgeons and specialists provides advanced diagnosis, treatment, and rehabilitation for patients of all ages—helping them regain mobility and live pain-free lives.
                <br /><br />
                We offer a wide range of orthopedic services including fracture management, joint replacement (knee, hip, shoulder), arthroscopy, sports injury treatment, spine care, and physiotherapy support. Using the latest technology and minimally invasive surgical techniques, we ensure faster recovery, less discomfort, and better outcomes for our patients.
                <br /><br />
                With a patient-focused approach and state-of-the-art facilities, our Orthopedic Center ensures that every patient receives personalized care tailored to their needs. Whether it's a minor injury or a complex orthopedic issue, RTSV - SDA Dimond Hospital is here to help you move better, feel stronger, and get back to the life you love.<b>We offer all our services at competitive prices.</b>
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

    </div>
  );
};

export default Orthopedics;
