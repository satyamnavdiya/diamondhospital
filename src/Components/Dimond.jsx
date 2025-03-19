import { motion } from "framer-motion";
import { Shield, Heart, Users } from "lucide-react";
import './CSS/About.css'

const Dimond = () => {
    return (
        <section className="pt-40 w-[80%] div-center">
            <div className="min-h-screen">
                {/* Mission Section */}
                <section className="mx-auto mb-16 w-[80%]">
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
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
                            transition={{ duration: 0.6, delay: 0.4 }}
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
                            transition={{ duration: 0.6, delay: 0.6 }}
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
    );
};

export default Dimond;
