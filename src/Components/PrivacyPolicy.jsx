import React from 'react'

function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white pt-32 max-sm:pt-[6.5rem]">
            {/* Hero Section */}
            <section className="relative h-[80vh] max-sm:h-[50vh] flex items-center justify-center overflow-hidden mix-blend-multiply">
                <div className="absolute inset-0">
                    <img
                        src='./IMG/privacy-policy.jpg'
                        alt="privacy-policy"
                        className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 mix-blend-multiply pedi-bg-div" />
                </div>
                <div className="container relative z-10 text-center text-white px-4">
                    <motion.h1
                        className="font-display text-5xl md:text-6xl mb-4 font-bold"
                        {...fadeInUp}
                    >
                        <span className='spec-hero-heading'>Privacy Policy</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>State-of-the-Art Radiology: Precision Imaging for Superior Patient Care</span>
                    </motion.p>
                </div>
            </section>

            {/* About Urology */}
            <section className="py-10 div-center w-[80%]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto"
                    >
                        <div className="mb-12">
                            {/* <h2 className="font-display text-4xl mb-4">Urology</h2> */}
                            <p className="text-gray-600 spec-text">
                                At RTSV - SDA Dimond Hospital, our Radiology Department is dedicated to providing accurate, timely diagnoses through advanced imaging technology. Our team of board-certified radiologists and skilled technologists work together to offer a full range of diagnostic imaging services—including MRI, CT scans, ultrasound, and X-rays—ensuring that each patient receives a precise evaluation tailored to their needs.
                                <br /><br />
                                Utilizing the latest in imaging technology, we deliver high-resolution images that facilitate early detection and informed treatment decisions. Our department is committed to maintaining the highest standards of patient safety and comfort, with a focus on reducing wait times and streamlining the diagnostic process.
                                <br /><br />
                                By combining innovative technology with expert interpretation, our Radiology team plays a crucial role in guiding treatment plans and improving patient outcomes. Contact RTSV - SDA Dimond Hospital today to learn more about our comprehensive imaging services and experience precision diagnostic care.
                            </p>
                        </div>

                    </motion.div>
                </div>
            </section>



        </div >
    )
}

export default PrivacyPolicy
