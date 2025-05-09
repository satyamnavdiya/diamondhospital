import { motion } from "framer-motion";
import { Shield, Heart, Users } from "lucide-react";
import './CSS/About.css'
import { Quote } from 'lucide-react';
import logo from './Images/Logo.png'

const Dimond = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <section className="aboutus-dimond">

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mix-blend-multiply hero-section">
                <div className="absolute inset-0">
                    <img
                        src='./IMG/hospital.JPG'
                        alt="Obstetic Professional medical care"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>The RTSV - Diamond Hosital <br /> and Reserach Center</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading div-border'>Write Somthing about Hospital</span>
                    </motion.p>
                </div>
            </section>

            <section className="pt-40 w-[80%] div-center max-sm:pt-8">
                <div>
                    {/* Mission Section */}
                    <section className="mx-auto mb-16 w-[100%]">

                        <div className="grid max-sm:grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="p-6 rounded-2xl bg-white shadow-lg border-2 border-[#000080] hover:shadow-2xl"
                            >
                                <Shield className="h-12 w-12 text-teal-500 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                                <p className="text-gray-600 dimond-text">
                                    To enhance the health and well-being of our community through excellence
                                    in patient care, education, and innovation.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.3 }}
                                className="p-6 rounded-2xl bg-white shadow-lg border-2 border-[#000080] hover:shadow-2xl"
                            >
                                <Heart className="h-12 w-12 text-teal-500 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Values</h3>
                                <p className="text-gray-600 dimond-text">
                                    Compassion, integrity, excellence, and innovation guide everything we do
                                    as we strive to provide the best possible care.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                                className="p-6 rounded-2xl bg-white shadow-lg border-2 border-[#000080] hover:shadow-2xl"
                            >
                                <Users className="h-12 w-12 text-teal-500 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Commitment</h3>
                                <p className="text-gray-600 dimond-text">
                                    We are committed to delivering personalized care that meets the unique
                                    needs of each patient and their families.
                                </p>
                            </motion.div>
                        </div>
                    </section>

                    {/* History Section */}
                    <section className="w-[80%] mx-auto">

                    </section>
                </div>

            </section>

            <section className="w-[80%] div-center">
                <div className="mx-auto my-0 px-4 py-16 md:py-24">
                    <div className="flex justify-center mb-8">
                        <div className="inline-block rounded-full bg-white px-6 py-2 shadow-sm">
                            <p className="text-gray-700 text-2xl font-semibold">Chairman's Massage</p>
                        </div>
                    </div>

                    <div>
                        <div className="w-full  flex flex-col md:flex-row items-center gap-8">
                            <div className="relative">
                                <div className="w-96 h-96 overflow-hidden rounded-full border-4 border-white shadow-xl transition-transform duration-300 hover:scale-105">
                                    <img
                                        src="https://iimmumbai.ac.in/img/profile/iimmumbai-chairman.jpg"
                                        alt="Chairman Portrait"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-0 w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <div className="w-20 h-20 bg-gray-100 overflow-hidden p-3 rounded-full flex items-center justify-center text-center">
                                        <img src={logo} alt="RTSV" className="w-15 h-15 animate-float-about mt-1" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className="mb-6">
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        <Quote size={32} className="text-gray-400" />
                                        Namaskar,
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Surat is well-known for the diamond industry. Surat Diamond Association is a
                                        Non-Profit Organization (NPO), working for diamond industry, for diamond
                                        workers. To provide best treatments with minimum charges to needy people, Surat
                                        Diamond Association crafted Arogya Samiti (Health Committee).
                                    </p>
                                    <p className="text-red-700 text-lg leading-relaxed">
                                        On February 25, 2015 Matrushree Ramuba Tejani and Matrushree Shantaba Vidia
                                        Diamond Hospital was inaugurated by …..
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Diamond Hospital, where our commitment to providing accessible and affordable
                                        healthcare drives everything we do. As a hospital managed by a Surat Diamond
                                        Association Arogya Samiti Trust, our core mission is to ensure that quality medical
                                        care is available to all, regardless of financial background. We understand the
                                        challenges face in accessing healthcare, which is why we offer treatment at
                                        extremely low costs, without compromising on the quality of care.
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Our dedicated team of doctors, nurses, and staff work with compassion and
                                        professionalism to offer comprehensive medical services in a supportive and
                                        healing environment. Every patient is treated with dignity and respect, and we are
                                        proud to be a trusted healthcare provider in our community. Whether it’s routine
                                        care or more specialized treatment, we aim to make healthcare not just affordable
                                        but also personalized, to meet the unique needs of every individual. We proud that
                                        lacs of needy people were get good treatments in last decade with affordable
                                        charges.
                                    </p>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        We believe that good health should never be a privilege but a fundamental right for
                                        all. At our hospital, we are honored to play a part in improving the lives of our
                                        patients and their families. Thank you for trusting us with your healthcare needs—
                                        we are here for you, every step of the way.
                                    </p>
                                </div>

                                <div className="flex items-center">
                                    <div className="w-12 h-1 bg-gray-300 mr-4"></div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Mr. C.T. Vanani</h3>
                                        <p className="text-gray-600">Chairman of RTSV</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-[80%] div-center">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="w-[45%] p-5 h-[95vh] border-2 border-green-800 rounded-2xl">
                        <div className="flex justify-center mb-8">
                            <div className="inline-block rounded-full border-2 border-teal-600 bg-[#e6f4f1] px-6 py-2 shadow-sm">
                                <p className="text-gray-700 text-2xl font-semibold">Secretary's Massage</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <Quote size={32} className="text-gray-400" />
                                Namaskar,
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Welcome to our RTSV Diamond Hospital managed by Surat Diamond Association
                                Arogya Samiti, a place where compassion, care, and affordability come together to
                                serve our community. As a trust-managed institution, we are dedicated to
                                providing high-quality healthcare services at very low costs, ensuring that financial
                                constraints never stand in the way of receiving essential treatment.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our hospital is NABH accredited, reflecting our commitment to maintaining the
                                highest standards of patient care and safety. With 150 beds, including a 14-bed
                                ICU, 30-bed NICU, and state-of-the-art facilities, we are fully equipped to handle a
                                wide range of medical needs. Including 13 dialysis beds, 6 CPAP machines, and 6
                                modular operation theatres to cater to critical care requirements we offer 24-
                                hour treatment services.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We run free cataract surgery, free dentures and free girl child maternity, 1 lakh
                                bonds under many charity and government schemes.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We are proud to offer such comprehensive services at an affordable cost,
                                ensuring that you and your loved ones receive the care you deserve, no matter
                                the circumstances. Thank you for choosing us as your healthcare provider.</p>
                        </div>

                        <div className="flex items-center justify-start gap-5 mt-5 border-t-2 border-zinc-300 p-5">
                            <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-teal-700">
                                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202408/66b25743c87de-from-building-the-loan-portfolio-to-managing-casa-and-harnessing-the-power-of-ai--sbis-new-chairman-191717556-16x9.jpg?size=948:533" className="w-full h-full object-cover" />
                            </div>

                            <div>
                                <p className="text-2xl font-semibold">Secretary’s Name</p>
                                <p className="text-xl">Secretary of RTSV</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-[45%] p-5 h-[95vh] border-2 border-green-800 rounded-2xl">
                        <div className="flex justify-center mb-8">
                            <div className="inline-block rounded-full border-2 border-teal-600 bg-[#e6f4f1] px-6 py-2 shadow-sm">
                                <p className="text-gray-700 text-2xl font-semibold">Secretary's Massage</p>
                            </div>
                        </div>

                        <div>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                <Quote size={32} className="text-gray-400" />
                                Namaskar,
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Welcome to our RTSV Diamond Hospital managed by Surat Diamond Association
                                Arogya Samiti, a place where compassion, care, and affordability come together to
                                serve our community. As a trust-managed institution, we are dedicated to
                                providing high-quality healthcare services at very low costs, ensuring that financial
                                constraints never stand in the way of receiving essential treatment.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Our hospital is NABH accredited, reflecting our commitment to maintaining the
                                highest standards of patient care and safety. With 150 beds, including a 14-bed
                                ICU, 30-bed NICU, and state-of-the-art facilities, we are fully equipped to handle a
                                wide range of medical needs. Including 13 dialysis beds, 6 CPAP machines, and 6
                                modular operation theatres to cater to critical care requirements we offer 24-
                                hour treatment services.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We run free cataract surgery, free dentures and free girl child maternity, 1 lakh
                                bonds under many charity and government schemes.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                We are proud to offer such comprehensive services at an affordable cost,
                                ensuring that you and your loved ones receive the care you deserve, no matter
                                the circumstances. Thank you for choosing us as your healthcare provider.</p>
                        </div>

                        <div className="flex items-center justify-start gap-5 mt-5 border-t-2 border-zinc-300 p-5">
                            <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-teal-700">
                                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202408/66b25743c87de-from-building-the-loan-portfolio-to-managing-casa-and-harnessing-the-power-of-ai--sbis-new-chairman-191717556-16x9.jpg?size=948:533" className="w-full h-full object-cover" />
                            </div>

                            <div>
                                <p className="text-2xl font-semibold">Secretary’s Name</p>
                                <p className="text-xl">Secretary of RTSV</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </section >
    );
};

export default Dimond;
