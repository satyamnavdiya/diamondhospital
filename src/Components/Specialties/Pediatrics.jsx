
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import "../CSS/Specialities.css"
import pedi from '../Images/pedi.jpg'

// const doctors = [
//     {
//         id: 4,
//         name: "Dr. Riddhi Vaghani",
//         department: "GYNECOLOGY",
//         experience: 13,
//         imageUrl: "/IMG/doc/.png",
//         bio: "Dr. Riddhi Vaghani is an experienced and dedicated Gynecologist with a rich clinical background spanning over 13 years. She has served in several reputed institutions, including 5 years at Simmer Hospital, 3 years at Gujarat Adani Institute of Medical Sciences, 1 year at Balaji Hospital, and 4 years at Dimond Hospital. Known for her compassionate care and clinical expertise, Dr. Vaghani has consistently provided high-quality healthcare services to women across all stages of life.",
//         education: "MBBS, MS, OBS & GYN",
//         availability: {
//             morning: "Morning - Mon to Sun: 10 AM - 1 AM",
//             evening: "Evening - Mon to Sun: 5 PM - 8 PM"
//         }
//     },
//     {
//         id: 3,
//         name: "Dr. Kalpana Patel",
//         department: "GYNECOLOGY",
//         experience: 7,
//         imageUrl: "/IMG/doc/.png",
//         bio: "Dr. Kalpana Patel is a skilled and compassionate Gynecologist with 7 years of experience in women's healthcare. Throughout her career, she has been dedicated to providing comprehensive gynecological services, focusing on patient comfort, education, and evidence-based care. Dr. Patel is committed to empowering women through all stages of reproductive health with professionalism and empathy.",
//         education: "MBBS, DGO",
//         availability: {
//             morning: "Morning - Mon to Sun: 10 AM - 1 AM",
//             evening: "Evening - Mon to Sun: 5 PM - 8 PM"
//         }
//     },
//     {
//         id: 1,
//         name: "Dr. Bhavesh Parmar",
//         department: "GYNECOLOGY",
//         experience: 9,
//         imageUrl: "/IMG/doc/.png",
//         bio: "Dr. Bhavesh Parmar has been serving in the field of Gynecology since 2015, bringing nearly a decade of dedicated experience in women’s healthcare. With a strong commitment to patient well-being and clinical excellence, Dr. Parmar has continually contributed to advancements in gynecological care through both practice and ongoing medical engagement.",
//         education: "MBBS, DNB",
//         availability: {
//             morning: "Morning - Mon to Sun: 10 AM - 1 AM",
//             evening: "Evening - Mon to Sun: 5 PM - 8 PM"
//         }
//     },
// ]


const Pediatrics = () => {
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
            <section className="hero-sec-img relative  flex items-center justify-center overflow-hidden mix-blend-multiply ">
                <div className="absolute inset-0">
                    <img
                        src={pedi}
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
                        <span className='spec-hero-heading'> Pediatrics Specialty Center</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Providing world-class care for your children with compassion and expertise</span>
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
                                At RTSV - SDA Dimond Hospital, our Pediatrics Specialty Center is dedicated to the health and well-being of children from infancy through adolescence. We offer comprehensive pediatric services delivered by experienced pediatricians and child health specialists in a child-friendly, safe, and nurturing environment.
                                <br /><br />
                                Our services include newborn care, routine check-ups, vaccinations, treatment for acute and chronic illnesses, growth and development monitoring, and pediatric emergency care. We also provide specialized care for conditions such as asthma, allergies, infections, and nutritional concerns—ensuring that every child receives the right care at the right time.
                                <br /><br />
                                We believe in a family-centered approach, where parents are active partners in their child's health journey. At RTSV - SDA Dimond Hospital, we combine clinical excellence with genuine compassion to ensure your child grows up healthy, strong, and happy.<b>We offer all our services at competitive prices.</b>
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* About Doctors */}


        </div>
    );
};

export default Pediatrics;
