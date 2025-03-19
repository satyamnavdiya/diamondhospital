import React from 'react';
import { motion } from 'framer-motion';
import { Hospital, Baby, Stethoscope, Users, MapPin } from 'lucide-react';
import "../CSS/Specialities.css"
import Obstetic from '../Images/Obstetic.jpg'

const ObsGyne = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    return (
        <div className="min-h-screen bg-white pt-32 max-sm:pt-[6.5rem]">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mix-blend-multiply max-sm:h-[50vh]">
                <div className="absolute inset-0">
                    <img
                        src={Obstetic}
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
                        <span className='spec-hero-heading'>Obstetic & Gynecology Specialty Center</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className='spec-sub-heading'>Comprehensive Care for Women at Every Stage of Life</span>
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
                        <h2 className="mb-6 text-center"><span className='spec-heading spec-gradient'>Our Purpose</span></h2>
                        <p className="text-lg spec-text text-gray-600 leading-relaxed">
                            Dimond Hospital's <b>Obstetrics & Gynecology Department</b> is dedicated to providing comprehensive care for women at every stage of life. From adolescence to reproductive years and beyond, our expert team offers personalized care for pregnancy, childbirth, and gynecological conditions. We specialize in managing high-risk pregnancies, infertility treatments, menstrual disorders, menopause care, and advanced minimally invasive gynecological surgeries, ensuring the highest standards of women's health.
                            <br /><br />
                            Our hospital also offers <b>comprehensive women’s health check-up programs</b> designed to screen and diagnose chronic diseases, breast cancer, and cervical cancer. With a focus on early detection and preventive care, we use the latest medical advancements to safeguard women's health and well-being. Whether it’s routine screenings or specialized treatments, we are committed to providing compassionate and expert care to every woman.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Obstetrics facilities : */}
            <section className="py-10 w-[80%] div-center">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="mb-12">
                            <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>OBSTETRICS DEPARTMENT</span></h2>
                            <p className="text-gray-600 spec-text">The <b>Obstetrics Department</b> at <b>RTSV - SDA Diamond Hospital</b> provides comprehensive maternity care, ensuring a safe and healthy pregnancy journey for every mother. Our expert team offers preconception counseling, antenatal care, high-risk pregnancy management, painless delivery options, and postnatal support. Equipped with state-of-the-art labor and delivery suites, advanced fetal monitoring, and neonatal care, we prioritize the well-being of both mother and baby. With personalized consultations, prenatal screenings, and holistic maternal health programs, we are dedicated to making every pregnancy a smooth, safe, and joyful experience.Supporting families through every step of their healthcare journey</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Antenatal Care",
                                    description: "Comprehensive prenatal check-ups, fetal monitoring, and pregnancy screenings.",
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    title: "High-Risk Pregnancy Management",
                                    description: "Specialized care for conditions like gestational diabetes, hypertension, and preterm labor.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Painless Delivery Options",
                                    description: "Epidural anesthesia and advanced pain management techniques.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Modern Labor & Delivery Suites",
                                    description: "Fully equipped with advanced medical technology for safe childbirth.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "24/7 Emergency Obstetric Care",
                                    description: "Immediate response for complications and critical cases.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Fetal Monitoring & Ultrasound Services",
                                    description: "Advanced imaging and diagnostic tools for fetal health assessment.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Neonatal Care & NICU",
                                    description: "Specialized care for newborns, including premature and high-risk infants.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Postnatal Care & Lactation Support",
                                    description: "Guidance for new mothers on recovery, breastfeeding, and newborn care.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Family Planning & Preconception Counseling",
                                    description: "Expert advice on reproductive health and future pregnancies.",
                                    icon: <Baby className="w-6 h-6" />
                                },
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
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gynecology facilities : */}
            <section className="py-10 div-center w-[80%]">
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto"
                    >
                        <div className="mb-12">
                            <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Gynecology Facilities</span></h2>
                            <p className="text-gray-600 spec-text">At <b>RTSV - SDA Diamond Hospital</b>, we are dedicated to providing comprehensive, compassionate, and advanced gynecological care for women of all ages.y</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Comprehensive Gynecological Care",
                                    description: "Diagnosis and treatment of menstrual disorders, PCOS, endometriosis, and menopause-related issues.",
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    title: "Minimally Invasive Gynecological Surgeries ",
                                    description: "Advanced laparoscopic and hysteroscopic procedures for fibroids, ovarian cysts, and uterine conditions.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Adolescent Gynecology",
                                    description: "Specialized care for teenage girls, including menstrual health and hormonal disorders.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Gynecological Cancer Screening & Treatment",
                                    description: "Early detection programs for cervical, ovarian, and uterine cancers, including Pap smears and colposcopy.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Pelvic Floor Disorders & Urogynecology",
                                    description: "Diagnosis and treatment for urinary incontinence, pelvic organ prolapse, and other related conditions.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Hormonal Therapy & Menopause Care",
                                    description: "Personalized management of perimenopause and postmenopause symptoms.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Family Planning & Contraceptive Services",
                                    description: " Counseling and procedures, including IUD insertion, tubal ligation, and contraceptive implants.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Sexual & Reproductive Health Services ",
                                    description: "Management of infections, STDs, and sexual wellness counseling.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Gynecological Wellness & Preventive Care",
                                    description: " Routine health check-ups, vaccination programs, and lifestyle counseling for overall women’s health.",
                                    icon: <Baby className="w-6 h-6" />
                                },
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
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gynec Surgery facilities : */}
            <section className="py-10 div-center w-[80%]">
                <div >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=" mx-auto"
                    >
                        <div className="mb-12">
                            <h2 className="font-display text-4xl mb-4 text-center"><span className='spec-heading spec-gradient'>Gynec Surgery facilities</span></h2>
                            <p className="text-gray-600 spec-text">At <b>RTSV - SDA Diamond Hospital</b>, we offer advanced gynecological surgery with a focus on minimally invasive techniques, faster recovery, and patient safety. Our specialized team of gynecologists and surgeons provides expert care for a wide range of conditions requiring surgical intervention.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Laparoscopic & Hysteroscopic Surgeries",
                                    description: "Minimally invasive procedures for fibroids, ovarian cysts, endometriosis, and uterine polyps.",
                                    icon: <Users className="w-6 h-6" />
                                },
                                {
                                    title: "Hysterectomy (Uterus Removal Surgery)",
                                    description: "Laparoscopic, vaginal, and abdominal hysterectomy options based on medical needs.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Myomectomy (Fibroid Removal Surgery)",
                                    description: "Preservation of the uterus while removing fibroids through laparoscopic or open surgery.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Ovarian Cystectomy",
                                    description: "Removal of ovarian cysts using advanced techniques to protect ovarian function.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Gynecological Cancer Surgery",
                                    description: "Surgical management of cervical, ovarian, and uterine cancers with a multidisciplinary approach.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Dilation & Curettage (D&C) Procedures",
                                    description: "Treatment for abnormal bleeding, miscarriage management, and diagnostic evaluations.",
                                    icon: <Baby className="w-6 h-6" />
                                },
                                {
                                    title: "Reconstructive & Cosmetic Gynecological Surgeries",
                                    description: "Procedures like vaginal tightening, labiaplasty, and perineoplasty for functional and aesthetic improvements.",
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
                                            <p className="text-gray-600">{service.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CRITICAL CARE OBSTETRICS */}
            <section className="py-10 div-center w-[80%]">
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="font-display text-4xl mb-4"><span className='spec-heading spec-gradient'>CRITICAL CARE OBSTETRICS</span></h2>
                        <p className="text-gray-600 mx-auto spec-text text-left">
                            At <b>RTSV - SDA Diamond Hospital</b>, our <b>Critical Care Obstetrics Unit</b> provides specialized, high-risk maternal care for women facing life-threatening complications during pregnancy, labor, and postpartum. Our <b>24/7 multidisciplinary team</b>, including obstetricians, intensivists, neonatologists, and anesthetists, ensures <b>immediate intervention and advanced critical care</b> to safeguard both mother and baby. We are equipped with <b>state-of-the-art ICUs, advanced fetal monitoring, emergency surgical facilities, and rapid-response teams</b> for timely and effective management of critical conditions.
                        </p>
                    </motion.div>
                    <h1 className='text-3xl text-center'><span className='spec-heading spec-gradient'>Obstetric Indications for Critical Care</span></h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Severe Preeclampsia & Eclampsia",
                                description: "High blood pressure leading to seizures or organ damage."
                            },
                            {
                                title: "Postpartum Hemorrhage (PPH)",
                                description: "Excessive bleeding after delivery requiring immediate intervention."
                            },
                            {
                                title: "Placental Abruption & Placenta Previa",
                                description: "Life-threatening conditions affecting fetal and maternal health."
                            },
                            {
                                title: "Amniotic Fluid Embolism",
                                description: "A rare but severe condition causing respiratory and cardiac failure."
                            },
                            {
                                title: "Obstetric Shock",
                                description: "Hemorrhagic or septic shock requiring intensive resuscitation."
                            },
                            {
                                title: "Preterm Labor with Complications",
                                description: "Critical care for early labor with severe maternal or fetal distress."
                            },
                            {
                                title: "Multiple Pregnancy with Complications",
                                description: "Intensive monitoring for twin/triplet pregnancies with complications."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition-shadow border border-red-700 mt-10"
                            >
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 spec-text">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <h1 className='text-3xl text-center mt-10'><span className='spec-heading spec-gradient'>Non-Obstetric Indications for Critical Care</span></h1>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "Respiratory Failure & ARDS",
                                description: "Severe lung conditions requiring ventilator support."
                            },
                            {
                                title: "Cardiac Disorders in Pregnancy",
                                description: "Pre-existing or pregnancy-induced heart conditions."
                            },
                            {
                                title: "Neurological Emergencies",
                                description: "Stroke, epilepsy, or brain hemorrhage affecting maternal health."
                            },
                            {
                                title: "Renal Failure & Electrolyte Imbalances",
                                description: "Kidney dysfunction requiring dialysis or specialized care."
                            },
                            {
                                title: "Liver Disorders (HELLP Syndrome, Acute Fatty Liver of Pregnancy)",
                                description: "Critical maternal liver conditions."
                            },
                            {
                                title: "Thromboembolic Disorders",
                                description: "Deep vein thrombosis (DVT) or pulmonary embolism."
                            },
                            {
                                title: "Endocrine Emergencies",
                                description: "Diabetic ketoacidosis or thyroid crises affecting pregnancy."
                            },
                            {
                                title: "Trauma & Accidents",
                                description: "High-risk injuries requiring emergency maternal-fetal intervention."
                            }
                        ].map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 rounded-lg bg-white shadow hover:shadow-lg transition-shadow border border-red-700 mt-10"
                            >
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-gray-600 spec-text">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default ObsGyne;
