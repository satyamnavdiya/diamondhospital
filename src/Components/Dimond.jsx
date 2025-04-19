import { motion } from "framer-motion";
import { Shield, Heart, Users } from "lucide-react";
import './CSS/About.css'

const Dimond = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <section className="pt-32 max-sm:pt-[6.5rem]">

            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mix-blend-multiply max-sm:h-[50vh]">
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
                <div className="min-h-screen">
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
                                transition={{ duration: 0.6, delay:1.3}}
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
        </section>
    );
};

export default Dimond;
