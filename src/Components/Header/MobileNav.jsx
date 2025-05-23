import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import '../CSS/Header.css'
import { House, Hospital, LibraryBig, BriefcaseMedical, ClipboardPlus, Stethoscope, Accessibility, HeartPulse, ChevronDown, AlignJustify, Images } from 'lucide-react';
import { Link } from "react-router-dom";

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);


    const toggleDropdown = (index) => {
        // This will close the current  if it's already open,
        // or close any other open  and open this one
        setOpenDropdown(openDropdown === index ? null : index);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            const menu = document.getElementById('mobile-menu');
            const button = document.getElementById('hamburger-button');
            if (isOpen && menu && button &&
                !menu.contains(e.target) &&
                !button.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isOpen]);

    // Handle menu toggle with animation states
    const toggleMenu = () => {
        setIsAnimating(true);
        setIsOpen(!isOpen);
        // Reset animation state after transition
        setTimeout(() => setIsAnimating(false), 500);
    };



    // Mobile Navbar More Menu
    const menuItems = [
        {
            icon: House, label: 'Home', to: '/', delay: 0
        },
        {
            icon: Hospital, label: 'About Us', delay: 100, submenu: [
                { label: 'Diamond Hospital', to: '/Dimond-Hospital', delay: 0 },
                { label: 'Our Trustees', to: '/Hospital-Team', delay: 0 },
            ]
        },
        { icon: BriefcaseMedical, label: "Doctor's Profile", to: '/Doctor-Profile', delay: 200 },
        {
            icon: Stethoscope, label: 'Specialties', delay: 300, submenu: [
                { label: 'Obstetric & Gynecology', to: '/ObsGyne', delay: 0 },
                { label: 'Pediatrics', to: '/Pediatrics', delay: 50 },
                { label: 'Orthopedics', to: '/Orthopedics', delay: 100 },
                { label: 'General Surgery', to: '/GeneralSurgery', delay: 150 },
                { label: 'Ophthalmology', to: '/Ophthalmology', delay: 200 },
                { label: 'Pulmonology', to: '/Pulmonology', delay: 250 },
                { label: 'Urology', to: '/Urology', delay: 300 },
                { label: 'Neurology', to: '/Neurology', delay: 350 },
                { label: 'ENT', to: '/ENT', delay: 400 },
                { label: 'Dental', to: '/DentalSurgery', delay: 450 },
                { label: 'Physiotherapy', to: '/PhysioTherapy', delay: 500 },
                { label: 'Plastic & Cosmetic Surgery', to: '/PlasticSurgery', delay: 550 },
                { label: 'Dermatology & Cosmetology', to: '/Skin', delay: 600 },
                { label: 'Gastroenterology', to: '/Gastroenterology', delay: 650 },
                { label: 'General Medicine', to: '/GeneralMedicine', delay: 700 },
                { label: 'Lasparoscopic Surgery', to: '/LasparoscopicSurgery', delay: 750 },
                { label: 'Fetal Medicines', to: '/FetalMedicines', delay: 800 },
            ]
        },
        {
            icon: ClipboardPlus, label: 'Services', delay: 400, submenu: [
                { label: 'Laboratory', to: '/Laboratory', delay: 0 },
                { label: 'Radiology', to: '/Radiology', delay: 50 },
                { label: 'NICU', to: '/NICU', delay: 100 },
                { label: 'Dialysis', to: '/Dialysis', delay: 150 },
                { label: 'Pharmacy', to: '/Pharmacy', delay: 200 },
                { label: 'IPD', to: '/IPD', delay: 250 },
                { label: 'Ambulance', to: '/Ambulance', delay: 300 },
                { label: 'ICU', to: '/ICU', delay: 350 },
                { label: 'OPD', to: '/OPD', delay: 400 },
                { label: 'Government Schemes', to: '/', delay: 450 },
            ]
        },
        {
            icon: Accessibility, label: 'Patient Guide', delay: 500, submenu: [
                { label: 'Floor Plan', to: '/Floorplan', delay: 0 },
                { label: 'General Guide', to: '/GeneralGuide', delay: 50 },
                { label: "Do's & Don'ts", to: '/DoAndDonts', delay: 100 },
            ]
        },
        {
            icon: HeartPulse, label: 'Health Information', delay: 600, submenu: [
                { label: 'Blog', to: '/', delay: 0 },
                { label: 'Video', to: '/Video', delay: 100 },
            ]
        },
        { icon: Images, label: 'Gallery', to: '/Gallery', delay: 700 },
        { icon: LibraryBig, label: 'Career', to: '/Career', delay: 800 },
    ];

    const handleCloseModal = () => {
        setIsOpen(false);
    }

    // Close Navbar when clicking outside of it
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('mobile-menu')) {
            handleCloseModal();
        }
    }

    // Function to close the sidebar
    const closeSidebar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {/* Mobile Navbar */}
            < div className="mobile-nav" >
                <div className="mobile-menu" onClick={handleOutsideClick}>
                    {/* Semi-transparent overlay */}
                    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40
${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        aria-hidden="true"
                    />

                    {/* Navigation menu */}
                    <nav id="mobile-menu"
                        className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50  overflow-y-auto
${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        aria-label="Mobile navigation"
                        aria-hidden={!isOpen}
                    >
                        <div className="p-4">
                            <ul className="space-y-4">
                                {menuItems.map(({ icon: Icon, label, to, delay, submenu }, index) => (
                                    <li
                                        key={label}
                                        style={{
                                            transitionDelay: isOpen ? `${delay}ms` : '0ms'
                                        }}
                                        className={`relative transform transition-all duration-300 ease-out
${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                                    >
                                        {submenu ? (
                                            <>
                                                <button
                                                    onClick={() => toggleDropdown(index)}
                                                    className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                                                >
                                                    <Icon className="w-5 h-5 mr-3" />
                                                    <span>{label}</span>
                                                    <ChevronDown className={`ml-auto transform transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                                                </button>
                                                {/* Dropdown Items */}
                                                <ul className={`pl-10 space-y-2 overflow-hidden transition-all duration-300 ${openDropdown === index ? 'max-h-130 opacity-100' : 'max-h-0 opacity-0'}`}>
                                                    {submenu.map(({ label, to }) => (
                                                        <li key={label}>
                                                            <Link to={to} onClick={closeSidebar} className="block p-1 text-gray-600 hover:bg-gray-100 rounded-md">{label}</Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <Link
                                                to={to} // Use Link to navigate to the correct route
                                                onClick={() => setIsOpen(false)}  // Close the menu after clicking
                                                className="flex items-center w-full p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                                            >
                                                <Icon className="w-5 h-5 mr-3" />
                                                <span>{label}</span>
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    <button id="hamburger-button"
                        onClick={toggleMenu}
                        aria-expanded={isOpen}
                        aria-controls="mobile-menu"
                        aria-label="Toggle navigation menu"
                        className={`hamburger-button ${isAnimating ? 'animate-bounce-subtle' : ''}`}>
                        <motion.div
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0 0 15px rgba(79, 157, 166, 0.6)",
                            }}
                            whileTap={{
                                scale: 0.97,
                            }}
                            animate={{
                                y: [0, -6, 0],
                                boxShadow: [
                                    "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    "0 8px 16px rgba(79, 157, 166, 0.3)",
                                    "0 4px 8px rgba(0, 0, 0, 0.1)"
                                ],
                                transition: {
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    ease: "easeInOut",
                                },
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 15
                            }}
                            className="bg-teal-600 text-white rounded-lg w-10 h-10 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm"
                        >
                            <AlignJustify className="w-6 h-6" />
                        </motion.div>

                    </button>

                </div>
            </ div>
        </div>
    )
}

export default MobileNav
