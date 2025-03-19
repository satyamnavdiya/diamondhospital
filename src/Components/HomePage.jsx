import React from 'react'
import Slider from './Slider'
import Achievement from './Achievement'
import Testimonials from './Testimonials'
import { motion } from "framer-motion";
// import Hospital from './Images/hospital.jpg';
import Stack from './Stack';

const images = [
    { id: 1, img: "/diamondhospital/IMG/152.JPG" },
    { id: 2, img: "/diamondhospital/IMG/29.JPG" },
    { id: 3, img: "/diamondhospital/IMG/140.JPG" },
    { id: 4, img: "/diamondhospital/hospital.JPG" }, 
    // { id: 5, img: "/diamondhospital/hospital.JPG" },
];
// import Map from './Map' 

function HomePage() {
    return (
        <div className='pt-[8.3rem] max-sm:pt-[6rem]'>
            <Slider />

            {/* About us */}
            <section className="mx-auto mb-16 w-[80%] mt-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center"><span className="Dimond-heading Dimond-gradient">Dimond Hospital</span></h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div>
                        <p className="text-gray-600 mb-4 dimond-text">
                            Welcome to Diamond Hospital Surat, a premier multi-speciality healthcare facility located in the heart of Surat, Gujarat. We are dedicated to providing comprehensive, patient-focused care around the clock, ensuring that every individual receives timely and personalized treatment. Our state-of-the-art facility is equipped with advanced diagnostic tools, modern surgical suites, and a range of specialized care units to meet the diverse health needs of our community.
                        </p>
                        <p className="text-gray-600 mb-4 dimond-text">
                            Our team of highly skilled physicians, experienced specialists, and compassionate support staff work together to deliver world-class healthcare services. Whether it's emergency care, routine check-ups, or advanced surgical procedures, we combine cutting-edge technology with a patient-first approach to ensure the best outcomes for every patient.
                        </p>
                        <p className="text-gray-600 mb-4 dimond-text">
                            Our team of highly skilled physicians, experienced specialists, and compassionate support staff work together to deliver world-class healthcare services. Whether it's emergency care, routine check-ups, or advanced surgical procedures, we combine cutting-edge technology with a patient-first approach to ensure the best outcomes for every patient.
                        </p>
                        <p className="text-gray-600 mb-4 dimond-text">
                            At Diamond Hospital Surat, quality and compassion go hand in hand. We are committed to upholding the highest standards of medical excellence while creating a comfortable, welcoming environment for our patients and their families. Experience a new standard of healthcare where every patient is treated like family.
                        </p>
                        <p className="text-gray-600 s dimond-text">
                            Discover the difference of truly dedicated care at Diamond Hospital Surat—your trusted partner in health.
                        </p>

                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        {/* <img
                            src={Hospital}
                            alt="Hospital building"
                            className="absolute inset-0 w-full h-full object-cover"
                        /> */}
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={false}
                            cardDimensions={{ width: 600}}
                            cardsData={images}
                            className="-mt-10"
                        />
                    </div>
                </motion.div>

            </section>

            <Achievement />
            <Testimonials />
            {/* <Map /> */}
        </div>
    )
}

export default HomePage
