import React from 'react'
import "../CSS/Specialities.css"
import { motion } from 'framer-motion';
import floor from '../Images/patients.png'

function GeneralGuide() {
    const infoBoxes = [
        {
            id: 1,
            title: 'Appointments',
            bgColor: 'bg-[#e3f0ff]',
            headerColor: 'bg-[#324a75]',
            borderColor: 'border-[#324a75]',
            sections: [
                {
                    letter: 'A',
                    title: 'Booking',
                    points: [
                        'Schedule online or call reception.',
                        'Walk-ins welcome but not prioritized.'
                    ]
                },
                {
                    letter: 'B',
                    title: 'Cancellation & Rescheduling',
                    points: [
                        'If you need to cancel or reschedule, please notify us at least 24 hours in advance.',
                        ' Missed appointments without prior notice may incur a cancellation fee.'
                    ]
                }
            ]
        },
        {
            id: 2,
            title: 'Admissions',
            bgColor: 'bg-teal-50',
            headerColor: 'bg-teal-600',
            borderColor: 'border-teal-600',
            sections: [
                {
                    letter: 'A',
                    title: 'Preparing for Admission',
                    points: [
                        'Bring a valid ID, insurance details, and any necessary medical records.',
                        'Pack personal essentials like toiletries, comfortable clothing, and prescribed medications.'
                    ]
                },
                {
                    letter: 'B',
                    title: 'During Your Stay',
                    points: [
                        'Our medical team will provide daily updates on your health status.',
                        'Visiting hours are from 9:00 AM to 8:00 PM. Special arrangements can be made for critical care units.',
                        'Meals are provided according to your dietary needs. Inform our staff about any allergies.'
                    ]
                },
                {
                    letter: 'C',
                    title: 'Discharge Process',
                    points: [
                        'Your doctor will provide discharge instructions and any necessary medications.',
                        ' A final bill will be settled before discharge.',
                        'Follow - up appointments can be scheduled before you leave.',
                    ]
                }
            ]
        },
        {
            id: 3,
            title: 'Billing & Insurance',
            bgColor: 'bg-[#fbeaff]',
            headerColor: 'bg-[#5e4384]',
            borderColor: 'border-[#5e4384]',
            sections: [
                {
                    letter: 'A',
                    title: 'Payment Options',
                    points: [
                        'We accept cash, credit/debit cards, and online payments.',
                        'Payment plans are available for eligible patients.'
                    ]
                },
                {
                    letter: 'B',
                    title: 'Insurance Processing',
                    points: [
                        'We partner with major insurance providers. Please verify coverage with our billing department.',
                        'Patients are responsible for any expenses not covered by insurance.'
                    ]
                },
            ]
        },
        {
            id: 4,
            title: 'Patient Rights & Responsibilities',
            bgColor: 'bg-[#e3f0ff]',
            headerColor: 'bg-[#324a75]',
            borderColor: 'border-[#324a75]',
            sections: [
                {
                    letter: 'A',
                    title: 'Patient Rights',
                    points: [
                        'Receive respectful and confidential care.',
                        'Be informed about your diagnosis, treatment options, and associated costs.',
                        ' Seek a second opinion or refuse treatment.'
                    ]
                },
                {
                    letter: 'B',
                    title: 'Patient Responsibilities',
                    points: [
                        'Provide accurate medical history and insurance details.',
                        ' Follow prescribed treatments and respect hospital policies.',
                        'Treat hospital staff and fellow patients with courtesy.'
                    ]
                }
            ]
        },
        {
            id: 5,
            title: 'Contact Information',
            bgColor: 'bg-teal-50',
            headerColor: 'bg-teal-600',
            borderColor: 'border-teal-600',
            sections: [
                {
                    letter: 'A',
                    title: 'Emergency:',
                    points: [
                        'Call 0261 2509502 for urgent medical assistance.'
                    ]
                },
                {
                    letter: 'B',
                    title: 'General Inquiries:',
                    points: [
                        '+91 &nbsp;93278 97987'
                    ]
                },
                {
                    letter: 'C',
                    title: 'Email:',
                    points: [
                        'info@diamondhospitalsurat.com'
                    ]
                },
                {
                    letter: 'D',
                    title: 'Location:',
                    points: [
                        'Swati Society, Chikuwadi, Varachcha Road, Surat.'
                    ]
                }
            ]
        },

    ];
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    return (
        <div className='spec-hero'>
            {/* Hero Section */}
            <section className="hero-sec-img relative flex items-center justify-center overflow-hidden mix-blend-multiply">
                <div className="absolute inset-0">
                    <img
                        src={floor}
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
                        <span className='spec-hero-heading'>Patient Guide</span>
                    </motion.h1>
                    <motion.p
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                    </motion.p>
                </div>
            </section>

            <div className='pt-[5rem]'>
                <div className="grid grid-cols-1 gap-6 w-[80%] div-center">
                    {infoBoxes.map((box) => (
                        <div key={box.id} className={`relative pt-10 mt-8 ${box.borderColor} border rounded-2xl ${box.bgColor}`}>
                            <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2">
                                <div className={`px-8 py-4 text-white ${box.headerColor} rounded-full`}>
                                    <h2 className="text-xl font-medium">
                                        {box.id}. {box.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="p-6 md:p-8">
                                {box.sections.map((section) => (
                                    <div key={section.letter} className="mb-6 last:mb-0">
                                        <h3 className="mb-3 text-xl font-medium">
                                            ({section.letter}) {section.title}
                                        </h3>
                                        {section.points.map((point, index) => (
                                            <div key={index} className="flex items-start mb-2 last:mb-0">
                                                <span className="mr-2 text-xl leading-7">-</span>
                                                <p className="text-lg">{point}</p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GeneralGuide;
