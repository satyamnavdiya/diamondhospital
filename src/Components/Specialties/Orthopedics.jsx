import React from 'react';
import { motion } from 'framer-motion';
import "../CSS/Specialities.css"
import orthopedic from '../Images/orthopedic.jpg'

const Orthopedics = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white pt-32 max-sm:pt-[6.5rem]" >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mix-blend-multiply max-sm:h-[50vh]">
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
            <span className='spec-hero-heading'>Advanced Care for Bones, Joints & Mobility</span>
          </motion.p>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-10 div-center w-[80%]">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto div-center"
          >
            <h2 className="font-display text-4xl mb-6 text-center"><span className='spec-heading spec-gradient'>Our Purpose</span></h2>
            <p className="text-lg text-gray-600 leading-relaxed spec-text">
              <b>RTSV - SDA Diamond Hospital</b> provides exceptional and comprehensive orthopedic care, helping patients improve their mobility and quality of life. Our specialized team treats a wide range of orthopedic conditions, including fractures, sprains, arthritis, sports injuries, spine disorders, bone and joint issues, and advanced orthopedic surgeries.
              <br /><br />
              We offer expert care for both <b>adult and pediatric orthopedic conditions</b>, delivering personalized treatment plans tailored to each patient’s needs. From diagnosis and non-surgical treatments to advanced orthopedic surgery and rehabilitation, we ensure a seamless recovery journey. Whether managing chronic joint pain or addressing sports-related trauma, <b>RTSV - SDA Diamond Hospital</b> is dedicated to keeping patients active and pain-free across <b>South Gujarat</b>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Common Orthopedic Surgeries and Procedures We Offer */}
      <section className="py-10 div-center w-[80%]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Common Orthopedic Surgeries <br /> and Procedures We Offer</span></h2>
              <p className="text-gray-600 spec-text">
                At <b>RTSV - SDA Diamond Hospital</b>, we specialize in a wide range of <b>advanced orthopedic surgeries and procedures </b> to restore mobility, relieve pain, and improve quality of life. Our expert orthopedic surgeons use the latest techniques, including <b>minimally invasive and robotic-assisted surgeries</b>, for faster recovery and better outcomes.

              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Joint Replacement Surgery",
                  description: "Total and partial knee, hip, and shoulder replacements.",
                },
                {
                  title: "Arthroscopy (Minimally Invasive Surgery)",
                  description: "Diagnosis and treatment of joint conditions in the knee, shoulder, hip, and ankle.",
                },
                {
                  title: "Spinal Surgeries",
                  description: "Treatment for herniated discs, spinal stenosis, scoliosis, and other spine disorders.",
                },
                {
                  title: "Fracture & Trauma Surgery",
                  description: "Surgical repair of complex fractures and bone injuries.",
                },
                {
                  title: "Ligament Reconstruction (ACL/PCL Repair)",
                  description: "Restoring stability and function after ligament tears.",
                },
                {
                  title: "Rotator Cuff & Shoulder Surgery",
                  description: "Treatment for shoulder impingement, dislocation, and tendon tears.",
                },
                {
                  title: "Carpal Tunnel & Hand Surgery",
                  description: "Relief from nerve compression and hand deformities.",
                },
                {
                  title: "Pediatric Orthopedic Surgery",
                  description: "Correction of congenital and developmental bone disorders in children.",
                },
                {
                  title: "Sports Injury Surgery",
                  description: "Surgical treatment for sports-related injuries, including meniscus repair and tendon reconstruction.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-red-700 border-2"
                >
                  <div className="items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                      <p className="text-gray-600 spec-text">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/*Joint Replacement*/}
      <section className="py-10 div-center w-[80%]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-5">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Joint Replacement</span></h2>
              <p className="text-gray-600 spec-text">
                <b>RTSV - SDA Diamond Hospital</b> specializes in <b>advanced knee replacement surgeries</b>, offering both <b>conventional</b> and <b>computer-assisted techniques</b> to ensure precision, faster recovery, and long-term joint function.
              </p>
            </div>

            <div className='mb-5'>
              <h1 className='text-3xl spec-sub-heading'>Conventional Method of Knee Replacement</h1>
              <p className='mt-3 text-gray-600 spec-text'>
                The <b>traditional knee replacement</b> involves removing the damaged portion of the knee joint and replacing it with an artificial implant. Surgeons use manual instruments to align the prosthetic components based on preoperative planning and intraoperative assessment. While this method has been successful for decades, its accuracy depends on the surgeon’s skill and experience.
              </p>
            </div>

            <div className="mb-5">
              <h1 className='text-3xl spec-sub-heading'>What is Computer-Assisted Knee Replacement?</h1>
              <p className='mt-1 text-gray-600 sepc-text'>
                <b>Computer-assisted knee replacement (CAS)</b> is an advanced technique that enhances surgical precision using real-time imaging and navigation technology. The system provides <b>3D visualization</b> of the knee joint, helping surgeons <b>align the implant with greater accuracy, ensuring optimal fit, stability, and longevity</b>. This method reduces human error and improves surgical outcomes.
              </p>
            </div>

            {/* Technical Parameters */}
            <h1 className='text-3xl mb-5 spec-sub-heading'>Technical Parameters</h1>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Preoperative Planning",
                  description: "Digital imaging and computer modeling to determine the best surgical approach.",
                },
                {
                  title: "Precise Alignment",
                  description: "Ensures the implant is placed at the correct angle, reducing post-surgery complications.",
                },
                {
                  title: "Soft Tissue Balance",
                  description: "Assesses ligament tension for better joint stability",
                },
                {
                  title: "Minimal Bone Cutting",
                  description: "Preserves healthy bone, reducing the risk of complications.",
                },
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

            {/* Navigation During the Surgery and Verification */}
            <h1 className='text-3xl mb-5 mt-20 spec-sub-heading'>Navigation During the Surgery and Verification</h1>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Real-Time Guidance",
                  description: "The computer navigation system continuously tracks the position of surgical instruments.",
                },
                {
                  title: "Dynamic Adjustments",
                  description: "Surgeons can make adjustments based on live feedback for optimal implant positioning.",
                },
                {
                  title: "Verification",
                  description: "After placing the implant, the system verifies alignment and stability, ensuring perfect joint function before closing the incision.",
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

            {/* Advantages of Computer-Assisted Knee Replacement */}
            <h1 className='text-3xl mb-5 mt-20 spec-sub-heading'>Advantages of Computer-Assisted Knee Replacement</h1>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Real-Time Guidance",
                  description: "The computer navigation system continuously tracks the position of surgical instruments.",
                },
                {
                  title: "Dynamic Adjustments",
                  description: "Surgeons can make adjustments based on live feedback for optimal implant positioning.",
                },
                {
                  title: "Verification",
                  description: "After placing the implant, the system verifies alignment and stability, ensuring perfect joint function before closing the incision.",
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
    </div>
  );
};

export default Orthopedics;
