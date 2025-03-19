
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import pedi from '../Images/pedi.jpg'
const Pediatrics = () => {
    const [activeSection, setActiveSection] = useState('purpose');

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white pt-32 max-sm:pt-[6.5rem] ">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mix-blend-multiply  max-sm:h-[50vh]">
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

            <div className="bg-white shadow-sm div-center">
                <div className=" flex justify-center py-4 text-center gap-x-6 w-full max-sm:flex-col max-sm: gap-1.5">
                    <div className={`mobile-nav-tab px-4 py-2 bg-red-50 rounded-full transition-all max-sm:w-1/2 hover:bg-red-600 hover:text-white`}><a href="#purpose">Purpose</a></div>
                    <div className={`mobile-nav-tab px-4 py-2 bg-red-50 rounded-full transition-all max-sm:w-1/2 hover:bg-red-600 hover:text-white`}><a href="#guidance">Guidance</a></div>
                    <div className={`mobile-nav-tab px-4 py-2 bg-red-50 rounded-full transition-all max-sm:w-1/2 hover:bg-red-600 hover:text-white`}><a href="#facility">Facility</a></div>
                    <div className={`mobile-nav-tab px-4 py-2 bg-red-50 rounded-full transition-all max-sm:w-1/2 hover:bg-red-600 hover:text-white`}><a href="#specialty">Specialty</a></div>
                </div>
            </div>

            {/* Purpose Section */}
            <section id='purpose' className="py-10 div-center w-[80%]">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto div-center"
                    >
                        <h2 className="font-display text-4xl mb-6 text-center"><span className='spec-heading spec-gradient'>Our Purpose</span></h2>
                        <p className="text-lg text-gray-600 leading-relaxed spec-text">
                            We are dedicated to providing comprehensive pediatric care that addresses both the physical and emotional needs of our young patients. Our state-of-the-art facility combines advanced medical technology with a child-friendly environment to ensure the best possible care experience.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Guidance & Counseling */}
            <section id="guidance" className="py-20 div-center w-[80%]">
                <div className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="text-center mb-12">
                            <h2 className="font-display text-4xl mb-4"><span className='spec-heading spec-gradient leading-none'>Guidance & Counseling</span></h2>
                            <p className="text-gray-600 spec-text">Supporting families through every step of their healthcare journey</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Family Support Services",
                                    description: "Comprehensive counseling and support for families dealing with pediatric health challenges.",
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    title: "Child Psychology",
                                    description: "Expert psychological support tailored to children's unique needs and development stages.",
                                    icon: <Baby className="w-6 h-6" />
                                }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.2 }}
                                    className="p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow"
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-white">
                                            {service.icon}
                                        </div>
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

            {/* PICU Facility Layout */}
            <section id="facility" className="py-10 w-[80%] div-center">
                <div className="container div-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient leading-none'>PICU Facility Layout</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto spec-text">
                            Our state-of-the-art Pediatric Intensive Care Unit is designed to provide the highest level of care in a comfortable environment
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Advanced Monitoring Units",
                                description: "24/7 patient monitoring with cutting-edge technology",
                                icon: <Stethoscope className="w-6 h-6" />
                            },
                            {
                                title: "Family-Centered Rooms",
                                description: "Spacious rooms designed for family comfort and involvement",
                                icon: <Users className="w-6 h-6" />
                            },
                            {
                                title: "Specialized Care Areas",
                                description: "Dedicated spaces for different levels of intensive care",
                                icon: <MapPin className="w-6 h-6" />
                            }
                        ].map((facility, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                            >
                                <div className="h-48 bg-gray-200 relative">
                                    <div className="absolute inset-0 flex items-center justify-center bg-primary/10">
                                        {facility.icon}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{facility.title}</h3>
                                    <p className="text-gray-600 spec-text">{facility.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Super Specialty Services */}
            <section id="specialty" className="py-10 div-center w-[80%]">
                <div className="container div-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-12"
                    >
                        <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient leading-none'>Pediatric Super Specialty Services</span></h2>
                        <p className="text-gray-600 max-w-2xl mx-auto spec-text">
                            Comprehensive care delivered by leading specialists in pediatric medicine
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            "Pediatric Cardiology",
                            "Pediatric Neurology",
                            "Pediatric Oncology",
                            "Pediatric Endocrinology",
                            "Pediatric Gastroenterology",
                            "Pediatric Pulmonology"
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition-shadow border border-gray-100"
                            >
                                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                                <p className="text-gray-600 spec-text">
                                    Specialized care and treatment for complex pediatric conditions
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pediatrics;
