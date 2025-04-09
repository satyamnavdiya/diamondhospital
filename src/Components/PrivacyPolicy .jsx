import React from 'react'
import { motion } from 'framer-motion';


function PrivacyPolicy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div>
            <div className="min-h-screen bg-white pt-32 max-sm:pt-[6.5rem]">
                {/* Hero Section */}
                <section className="relative h-[80vh] max-sm:h-[50vh] flex items-center justify-center overflow-hidden mix-blend-multiply">
                    <div className="absolute inset-0">
                        <img
                            src='/IMG/privacy.png'
                            alt="Radiology Professional medical care"
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
                            {/* <span className='spec-sub-heading'></span> */}
                        </motion.p>
                    </div>
                </section>

                {/* About Privacy Policy */}
                <section className="py-10 div-center w-[80%]">
                    <div className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mx-auto"
                        >
                            <div className="mb-12">
                                <h2 className="font-display text-4xl mb-4">Privacy Policy</h2>
                                <p className="text-gray-600 spec-text">
                                    The Diamond Hospital is committed to protecting the privacy and confidentiality of our patients, visitors, and staff. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information. By accessing our services or website, you agree to the terms of this policy.
                                </p>
                                <br /><br />
                                <h3>1. Information We Collect</h3>
                                <p className="text-gray-600 spec-text">
                                    We may collect the following types of information:
                                    <br />
                                    <b>Personal Information:</b> Name, date of birth, contact details (phone, email, address), identification numbers, and insurance information.
                                    <br />
                                    <b>Health Information:</b> Medical history, diagnosis, treatment records, prescriptions, and test results.
                                    <br />
                                    <b>Billing and Payment Information:</b> Payment details, billing history, and insurance claims.
                                    <br />
                                    <b>Website Information:</b> IP address, browsing behavior, and cookies when you visit our website.
                                </p>
                                <br /><br />
                                <div>
                                    <h3>2. How We Use Your Information</h3>
                                    <p className="text-gray-600 spec-text">
                                        We use the collected information for the following purposes:
                                        <br />
                                        <b>Patient Care:</b> To provide accurate diagnosis, treatment, and follow-up care.
                                        <br />
                                        <b>Billing and Payment:</b> To process payments, manage insurance claims, and prevent fraud.
                                        <br />
                                        <b>Communication:</b> To contact you regarding appointments, test results, or hospital updates.
                                        <br />
                                        <b>Improving Services:</b> To enhance the quality and effectiveness of our healthcare services.
                                        <b>Legal Compliance:</b> To comply with applicable laws, regulations, and legal obligations.
                                    </p>
                                </div>
                                <br /><br />
                                <div>
                                    <h3>3. Information Sharing and Disclosure</h3>
                                    <p className="text-gray-600 spec-text">
                                        We do not sell, trade, or rent your personal information. However, we may share your data with:
                                        <br />
                                        <b> Healthcare Providers:</b> To collaborate on your treatment and coordinate care.<br />
                                        <b> Insurance Companies:</b> To process claims and verify coverage.<br />
                                        <b> Legal Authorities:</b> When required by law or to protect the rights and safety of our patients and staff.<br />
                                        <b> Third-Party Service Providers:</b> For services such as billing, data processing, or IT support, under strict confidentiality agreements.<br />
                                    </p>
                                </div>
                                <br /><br />

                                <div>
                                    <h3>4. Data Security</h3>
                                    <p className="text-gray-600 spec-text">
                                        We implement strict security measures to protect your personal information, including:
                                        <br />
                                        Encryption and secure data storage.<br />
                                        Restricted access to authorized personnel only.<br />
                                        Regular security assessments and updates.<br />
                                    </p>
                                </div>
                                <br /><br />

                                <div>
                                    <h3>5. Your Rights</h3>
                                    <p className="text-gray-600 spec-text">
                                        You have the right to:
                                        <br />
                                        <b> Access Your Information:</b> Request a copy of your medical records.<br />
                                        <b> Correct Your Information:</b> Update or amend inaccurate details.<br />
                                        <b> Withdraw Consent:</b> Revoke consent for certain uses of your data (subject to legal obligations).<br />
                                        <b> Lodge Complaints:</b> File a complaint with the hospital’s privacy officer if you believe your privacy rights have been violated.<br />
                                    </p>
                                </div>
                                <br /><br />

                                <div>
                                    <h3>6. Cookies and Website Usage</h3>
                                    <p className="text-gray-600 spec-text">
                                        Our website uses cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings.
                                    </p>
                                </div>
                                <br /><br />

                                <div>
                                    <h3>7. Policy Updates</h3>
                                    <p className="text-gray-600 spec-text">
                                        We may update this Privacy Policy periodically. The revised policy will be posted on our website with the effective date.
                                    </p>
                                </div>
                                <br /><br />                            
                                </div>
                        </motion.div>
                    </div>
                </section>
            </div >
        </div>
    )
}

export default PrivacyPolicy 
