import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import generalsurgery from '../Images/general-surgery.jpg'

const GeneralSurgery = () => {
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

      {/* Operation Theater (O.T.) Layout */}
      <section className="py-10 div-center w-[80%]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Operation Theater (O.T.) Layout</span></h2>
              <p className="text-gray-600 spec-text">
                At <b>RTSV - SDA Diamond Hospital</b>, our <b>state-of-the-art Operation Theater (O.T.) complex</b> is designed to ensure <b>maximum safety, efficiency, and infection control</b> during surgical procedures. The layout is carefully planned to facilitate smooth patient movement, maintain strict sterilization protocols, and support advanced surgical techniques.
              </p>
            </div>

            <h1 className='text-3xl mb-7 spec-sub-heading'>SICU Layout</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: "Patient Monitoring Bays",
                  description: "Each bed is equipped with advanced patient monitoring systems to track vitals such as heart rate, oxygen levels, and blood pressure.",
                },
                {
                  title: "Central Nursing Station",
                  description: "Strategically located for 24/7 patient surveillance, ensuring immediate response to emergencies.",
                },
                {
                  title: "Isolation Rooms",
                  description: "Dedicated spaces for infection-prone or immunocompromised patients to prevent cross-contamination.",
                },
                {
                  title: "Ventilator & Life Support Zone",
                  description: "Advanced ventilators and life-support systems for critically ill patients.",
                },
                {
                  title: "Emergency Resuscitation Area",
                  description: "Fully equipped with defibrillators, oxygen supply, and emergency drugs for immediate life-saving interventions.",
                },
                {
                  title: "Family Waiting & Consultation Area",
                  description: "A dedicated space for family members to receive updates and consultations from doctors.",
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <h1 className='text-3xl mt-16 mb-7 spec-sub-heading'>Benefits of SICU Services</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: " 24/7 Critical Care Monitoring",
                  description: "Continuous supervision by expert intensivists and trained nursing staff.",
                },
                {
                  title: "Faster Post-Surgical Recovery",
                  description: "Immediate medical support minimizes complications and speeds up healing.",
                },
                {
                  title: "Advanced Life Support Systems",
                  description: "High-tech ventilators, dialysis units, and infusion pumps for critical care.",
                },
                {
                  title: "Multidisciplinary Approach",
                  description: "Collaboration between surgeons, anesthetists, and critical care specialists for personalized treatment.",
                },
                {
                  title: "Infection Control & Safety",
                  description: "Strict hygiene protocols and sterile conditions to prevent post-operative infections.",
                },
                {
                  title: " Pain Management & Specialized Therapies",
                  description: "Tailored pain relief plans and physiotherapy for enhanced recovery.",
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* TYPE OF SURGERY */}
      <section className="py-10 div-center w-[80%]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Types of Surgery</span></h2>
              <p className="text-gray-600 spec-text">
                At <b>RTSV - SDA Diamond Hospital</b>, we offer a wide range of <b>surgical procedures</b> to diagnose, treat, and manage various medical conditions. Our team of expert surgeons specializes in both <b>traditional and minimally invasive techniques</b>, ensuring the best possible outcomes for patients.
              </p>
            </div>

            {/* What Is Surgical Diagnos is? */}
            <div>
              <h1 className='text-3xl mb-5 spec-sub-heading'>What Is Surgical Diagnos is?</h1>
              <p className="text-gray-600 spec-text">
                <b>Surgical diagnosis</b> refers to the process of identifying a medical condition that requires surgical intervention. It involves a combination of <b>clinical evaluation, imaging tests (X-ray, MRI, CT scan), blood tests, and biopsy results</b> to determine whether surgery is the best treatment option.
              </p>
            </div>

            {/* What Are the Different Kinds of Surgery? */}
            <h1 className='text-3xl mt-10 mb-5 spec-sub-heading'>What Are the Different Kinds of Surgery?</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: "Elective Surgery",
                  description: "Planned procedures such as knee replacement or cosmetic surgery.",
                },
                {
                  title: "Emergency Surgery",
                  description: "Performed immediately for life-threatening conditions like trauma or internal bleeding.",
                },
                {
                  title: "Exploratory Surgery",
                  description: "Conducted to diagnose unknown conditions, such as a laparotomy",
                },
                {
                  title: "Therapeutic Surgery",
                  description: "Aimed at treating a condition, like removing tumors or gallbladders.",
                },
                {
                  title: "Reconstructive Surgery",
                  description: "Restores function or appearance, such as after burns or injuries.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/*What Are the Different Types of Surgery? */}
            <h1 className='text-3xl mt-10 mb-5 spec-sub-heading'>What Are the Different Types of Surgery?</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: "General Surgery",
                  description: "Includes abdominal, hernia, and soft tissue procedures.",
                },
                {
                  title: "Orthopedic Surgery",
                  description: "Bone and joint surgeries, including joint replacements.",
                },
                {
                  title: "Neurosurgery",
                  description: "Brain and spinal cord operations.",
                },
                {
                  title: "Cardiac Surgery",
                  description: "Heart-related procedures like bypass surgery.",
                },
                {
                  title: "Gynecological Surgery",
                  description: "Includes hysterectomy, ovarian cyst removal, and C-sections.",
                },
                {
                  title: "Urological Surgery",
                  description: "Kidney, bladder, and prostate procedures.",
                },
                {
                  title: "Plastic & Reconstructive Surgery",
                  description: "Includes cosmetic and burn treatments.",
                },
                {
                  title: "Oncological Surgery",
                  description: "Cancer-related tumor removals.",
                },
                {
                  title: "Pediatric Surgery",
                  description: "Specialized surgeries for infants and children.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What Is the Purpose of Surgery? */}
            <h1 className='text-3xl mt-10 mb-5 spec-sub-heading'>What Is the Purpose of Surgery?</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: "Diagnosis",
                  description: "To confirm or rule out medical conditions (e.g., biopsy).",
                },
                {
                  title: "Treatment",
                  description: "To remove or repair diseased tissues (e.g., tumor removal).",
                },
                {
                  title: "Reconstruction",
                  description: "To restore function or aesthetics (e.g., reconstructive surgery).",
                },
                {
                  title: "Relief of Symptoms",
                  description: "To reduce pain and improve quality of life (e.g., spinal decompression).",
                },
                {
                  title: "Prevention",
                  description: "To remove potential risks before they become serious (e.g., preventive mastectomy).",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What Is the Purpose of Surgery? */}
            <h1 className='text-3xl mt-10 mb-5 spec-sub-heading'>What Is the Purpose of Surgery?</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: "Diagnosis",
                  description: "To confirm or rule out medical conditions (e.g., biopsy).",
                },
                {
                  title: "Treatment",
                  description: "To remove or repair diseased tissues (e.g., tumor removal).",
                },
                {
                  title: "Reconstruction",
                  description: "To restore function or aesthetics (e.g., reconstructive surgery).",
                },
                {
                  title: "Relief of Symptoms",
                  description: "To reduce pain and improve quality of life (e.g., spinal decompression).",
                },
                {
                  title: "Prevention",
                  description: "To remove potential risks before they become serious (e.g., preventive mastectomy).",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* What Are the Different Methods of Surgery? */}
            <h1 className='text-3xl mt-10 mb-5 spec-sub-heading'>What Are the Different Methods of Surgery?</h1>
            <div className="grid md:grid-cols-3 gap-6 spec-text">
              {[
                {
                  title: "Open Surgery",
                  description: "Traditional surgery with large incisions for direct access.",
                },
                {
                  title: "Minimally Invasive Surgery (MIS)",
                  description: "Small incisions using laparoscopic or robotic-assisted techniques for quicker recovery.",
                },
                {
                  title: "Endoscopic Surgery",
                  description: "Using a thin, flexible tube with a camera to operate through natural openings (e.g., gastroscopy).",
                },
                {
                  title: "Laser Surgery",
                  description: "Uses focused light beams for precise tissue removal (e.g., eye surgery).",
                },
                {
                  title: "Robotic Surgery",
                  description: "Performed with robotic arms for enhanced precision and control.",
                },
                {
                  title: "Microsurgery",
                  description: "Utilizes microscopes for delicate procedures (e.g., nerve or blood vessel repairs).",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow border-2 border-red-700"
                >
                  <div className="flex items-start space-x-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/*Day of Surgery at RTSV - SDA Diamond Hospital */}
      <section className="py-10 div-center w-[80%]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl mb-4"><span className='spec-heading spec-gradient'>Day of Surgery</span></h2>
              <p className="text-gray-600 spec-text">
                At <b>RTSV - SDA Diamond Hospital</b>, we ensure a <b>smooth and well-coordinated surgical experience</b> for our patients. Our dedicated team follows a structured approach to ensure <b>safety, comfort, and successful surgical outcomes</b>.
              </p>
            </div>
 
            {/* Pre-Surgery Preparation */}
            <div>
              <h1 className='text-3xl spec-sub-heading'>Pre-Surgery Preparation</h1>
              <p className='spec-text'><b>Arrival & Registration:</b><br />Patients check in at the hospital reception and complete necessary paperwork.</p>
              <p className='spec-text'><b>Pre-Operative Assessment</b><br />Vital signs, blood tests, and final evaluations are conducted to ensure readiness.</p>
              <p className='spec-text'><b>Consultation with the Anesthesia Team:</b><br />The anesthetist discusses the anesthesia plan and answers any last-minute questions.
              </p>
              <p className='spec-text'><b>Fasting Guidelines:</b><br /> Patients are advised to follow pre-surgery fasting instructions to prevent complications.</p>
              <p className='spec-text'><b>Changing into Surgical Attire:</b><br /> Patients change into hospital gowns and remove jewelry, dentures, or contact lenses.</p>
            </div>

            {/* Before Entering the Operating Room (O.T.) */}
            <div className='mt-15'>
              <h1 className='text-3xl spec-sub-heading'>Before Entering the Operating Room (O.T.)</h1>
              <p className='spec-text'><b>Patient Identification & Verification:</b>
                <br />The surgical team confirms patient details, procedure type, and site marking.
                IV Line Insertion: A catheter may be placed for administering medications and fluids.
              </p>
              <p className='spec-text'>
                <b>Pre-Medication (if required):</b> <br />Patients may receive medications to relax or control pain before surgery.
              </p>
            </div>

            {/* Inside the Operating Theater */}
            <div className='mt-15'>
              <h1 className='text-3xl spec-sub-heading'>Inside the Operating Theater</h1>
              <p className='spec-text'><b>Anesthesia Administration:</b> Depending on the surgery, general, regional, or local anesthesia is given.</p>
              <p className='spec-text'><b>Surgical Procedure:</b> The surgery is performed under strict sterile conditions using advanced technology.</p>
              <p className='spec-text'><b>Continuous Monitoring:</b> Vital signs are tracked throughout the procedure to ensure patient safety.</p>
            </div>

            {/* Post-Surgery Recovery */}
            <div className='mt-15'>
              <h1 className='text-3xl spec-sub-heading'>Post-Surgery Recovery</h1>
              <p className='spec-text'><b>Immediate Recovery in PACU (Post-Anesthesia Care Unit):</b> Patients are closely monitored as they wake up from anesthesia.</p>
              <p className='spec-text'><b>Pain Management:</b> Medications are provided to ensure comfort during recovery.</p>
              <p className='spec-text'><b>Doctor’s Evaluation:</b> The surgeon reviews the procedure and updates the patient’s family.</p>
              <p className='spec-text'><b>Transfer to Room or Discharge:</b><br />
                <b>For outpatient surgeries:</b> Patients are discharged the same day with post-operative care instructions.
                <b>For inpatient surgeries:</b> Patients are moved to a hospital room for further monitoring.</p>
            </div>
          </motion.div>
        </div>
      </section >




      {/* List of General Surgery Procedures */}
      <section className="py-10 div-center w-[80%]">
        <div >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto"
          >
            <div className="mb-12">
              <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>List of General Surgery Procedures</span></h2>
              <p className="text-gray-600 spec-text">
                Our <b>General Surgery</b> Department specializes in a wide range of surgical procedures, ensuring <b>safe and effective treatment</b> for various conditions.
              </p>
            </div>

            <div>
              <h1 className='text-3xl spec-sub-heading'>Abdominal Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'>Appendectomy</td>
                  <td className='spec-text'>Removal of the appendix (for appendicitis).</td>
                </tr>

                <tr>
                  <td className='spec-text'>Cholecystectomy</td>
                  <td className='spec-text'>Gallbladder removal (laparoscopic or open).</td>
                </tr>

                <tr>
                  <td className='spec-text'>Hernia Repair</td>
                  <td className='spec-text'>Treatment for inguinal, umbilical, or incisional hernias.</td>
                </tr>

                <tr>
                  <td className='spec-text'>Splenectomy</td>
                  <td className='spec-text'>Removal of the spleen (for trauma or disease).</td>
                </tr>
                <tr>
                  <td className='spec-text'>Bowel Resection</td>
                  <td className='spec-text'>Removal of a damaged section of the intestines.</td>
                </tr>

              </table>
            </div>

            {/* Digestive System Surgeries: */}
            <div className='mt-5'>
              <h1 className='text-3xl spec-sub-heading'>Digestive System Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'>Gastrectomy</td>
                  <td className='spec-text'>Partial or total removal of the stomach (for cancer or ulcers).</td>
                </tr>
                <tr>
                  <td className='spec-text'>Colectomy</td>
                  <td className='spec-text'>Removal of part or all of the colon (for cancer or inflammatory diseases).</td>
                </tr>
                <tr>
                  <td className='spec-text'>Hemorrhoidectomy</td>
                  <td className='spec-text'>Surgical removal of hemorrhoids.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Fistula and Fissure Surgery</td>
                  <td className='spec-text'>Treatment for anal fistulas and fissures.</td>
                </tr>
              </table>
            </div>

            {/* Endocrine Surgeries: */}
            <div className='mt-5'>
              <h1 className='text-3xl spec-sub-heading'>Endocrine Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'>Thyroidectomy</td>
                  <td className='spec-text'>Partial or complete removal of the thyroid gland.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Parathyroidectomy</td>
                  <td className='spec-text'>Removal of one or more parathyroid glands.</td>
                </tr>
                <tr>
                  <td className='spec-text'> Adrenalectomy</td>
                  <td className='spec-text'>Removal of adrenal glands due to tumor.</td>
                </tr>
              </table>
            </div>

            {/* Breast Surgeries: */}
            <div className='mt-5'>
              <h1  className='text-3xl spec-sub-heading'>Breast Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'>Lumpectomy</td>
                  <td className='spec-text'>Removal of a breast lump (usually for cancer).</td>
                </tr>
                <tr>
                  <td className='spec-text'>Mastectomy</td>
                  <td className='spec-text'>Partial or complete removal of the breast.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Breast Abscess Drainage</td>
                  <td className='spec-text'>Treatment for infected breast tissue.</td>
                </tr>
              </table>
            </div>

            {/* Skin & Soft Tissue Surgeries: */}
            <div className='mt-5'>
              <h1 className='text-3xl spec-sub-heading'>Skin & Soft Tissue Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'>Lipoma Removal</td>
                  <td className='spec-text'>Removal of benign fatty tumors.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Cyst Removal</td>
                  <td className='spec-text'>Excision of sebaceous or dermoid cysts.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Wound Debridement</td>
                  <td className='spec-text'>Cleaning and removal of infected tissue.</td>
                </tr>
              </table>
            </div>

            {/* Vascular & Trauma Surgeries: */}
            <div className='mt-5'>
              <h1 className='text-3xl spec-sub-heading'>Vascular & Trauma Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'> Varicose Vein Surgery</td>
                  <td className='spec-text'>Laser or open removal of varicose veins.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Trauma & Emergency Surgery</td>
                  <td className='spec-text'>Treatment of injuries, fractures, and internal bleeding.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Amputation</td>
                  <td className='spec-text'>Removal of a limb due to severe injury or infection.</td>
                </tr>
              </table>

            </div>

            {/* Laparoscopic (Minimally Invasive) Surgeries: */}
            <div className='mt-5'>
              <h1 className='text-3xl spec-sub-heading'>Laparoscopic (Minimally Invasive) Surgeries:</h1>
              <table>
                <tr>
                  <td className='spec-text'>Laparoscopic Appendectomy</td>
                  <td className='spec-text'>Minimally invasive appendix removal.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Laparoscopic Gallbladder Surgery</td>
                  <td className='spec-text'>Removal of gallstones or gallbladder.</td>
                </tr>
                <tr>
                  <td className='spec-text'>Laparoscopic Hernia Repair</td>
                  <td className='spec-text'>Less invasive approach for hernia correction.</td>
                </tr>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

    </div >
  );
};

export default GeneralSurgery;
