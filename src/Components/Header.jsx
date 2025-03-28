import React, { useState, useEffect } from "react";
import Logo from './Images/Logo.png'
import Nabh from './Images/NABH.png'
import Tri from './Images/tri.png'
import './CSS/Header.css'
import { House, Hospital, LibraryBig, BriefcaseMedical, Images, ClipboardPlus, Stethoscope, Accessibility, Phone, Clock, HeartPulse, ChevronDown, Ellipsis, X } from 'lucide-react';
import { Link } from "react-router-dom";
import GoogleTranslate from "./GoogleTranslate";


export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown

    const toggleDropdown = (index) => {
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

        document.addEventListener('onclick', handleClickOutside);
        return () => document.removeEventListener('onclick', handleClickOutside);
    }, [isOpen]);

    // Handle menu toggle with animation states
    const toggleMenu = () => {
        setIsAnimating(true);
        setIsOpen(!isOpen);
        // Reset animation state after transition
        setTimeout(() => setIsAnimating(false), 500);
    };


    // Function to close the sidebar
    const closeSidebar = () => {
        setIsOpen(false);
    };

    // Mobile Navbar More Menu
    const menuItems = [
        {
            icon: Stethoscope, label: 'Specialties', to: '/diamondhospital', delay: 0, submenu: [
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
                { label: 'Physio Therapy', to: '/PhysioTherapy', delay: 500 },
            ]
        },
        { icon: BriefcaseMedical, label: "Doctor's Profile", to: '/Doctor-Profile', delay: 100 },
        {
            icon: ClipboardPlus, label: 'Services', to: '/diamondhospital', delay: 150, submenu: [
                { label: 'Laboratory', to: '/Laboratory' },
                { label: 'Radiology', to: '/Radiology' },
                { label: 'NICU', to: '/NICU' },
                { label: 'Dialysis', to: '/Dialysis' },
                { label: 'Pharmacy', to: '/Pharmacy' },
                { label: 'IPD', to: '/IPD' },
                { label: 'Ambulance', to: '/Ambulance' },
                { label: 'Government Schemes', to: '/diamondhospital' },
            ]
        },
        {
            icon: Accessibility, label: 'Patient Guide', to: '/Patient-Guide', delay: 200, submenu: [
                { label: 'Floor Plan', to: '/Floorplan' },
                { label: 'General Guide', to: '/GeneralGuide' },
                { label: "Do's & Don'ts", to: '/DoAndDonts' },
            ]
        },
        {
            icon: HeartPulse, label: 'News & Media', to: '/diamondhospital', delay: 250, submenu: [
                { label: 'Blog', to: '/diamondhospital' },
                { label: 'Video', to: '/diamondhospital' },
            ]
        },
        { icon: LibraryBig, label: 'Academics', to: '/diamondhospital', delay: 300 },
    ];



    return (
        <header className="w-full nav-header">

            {/* Top Bar */}
            <div className='topbar bg-red-600'>
                <img src={Tri} alt="" className="inline tri-img" />
                <div className="inline">
                    <div className="container mx-auto px-4 flex justify-evenly items-center">
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                                <Phone size={12} className="mr-2" />
                                <span className="text-sm max-sm:text-[8.1px]">Emergency: 0261 2509505</span>
                            </div>
                            <div className="hidden md:flex items-center">
                                <Clock size={12} className="mr-2" />
                                <span className="text-sm ">24/7 Care Available</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            {/* logo And Name */}
            <div className="flex items-center logo-name-div">
                <div className="font-bold text-2xl logo-div"><img src={Logo} alt="Hospital Logo" className='logo-nav' />
                </div>

                <div className="hospital-Desk-name">
                    <p className="hospital-name">
                        <span className="bg-blue-700 text-white px-1.5 py-1 text-[0.9rem] rounded-[10px] mb-1">માતૃશ્રી રામુબા તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા</span>
                        <br />
                        SDA DIAMOND HOSPITAL
                        <br />
                        AND MEDICAL RESEARCH CENTER
                    </p>
                </div>

                <div className="font-bold text-2xl nabh-div ml-5"><img src={Nabh} alt="Hospital Logo" className='logo-nav' />
                </div>
            </div>

            {/* Google Translate */}
            {/* <div className="div-translate">
                <GoogleTranslate />
            </div> */}

            {/* Desktop Navbar */}
            <nav className="bg-transparen mt-1 desktop-nav ">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Desktop Menu */}
                        <ul className="hidden md:flex items-center space-x-4 desktop-navbar">
                            <li className="hover:bg-red-600 navbar-link"><Link to="/diamondhospital" className="nav-a">Home</Link></li>

                            <li className="hover:bg-red-600 navbar-link dropdown1">
                                <a href="#" className="nav-a">About <ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div1">
                                    <ul className="p-2">
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Dimond-Hospital" className="drop-a">Dimond Hospital</Link></li>
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Hospital-Team" className="drop-a">Our Team</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="hover:bg-red-600 navbar-link"><Link to="/Doctor-Profile" className="nav-a">Doctor's Profile</Link></li>

                            <li className="hover:bg-red-600 navbar-link dropdown2">
                                <a href="#" className="nav-a">Specialties <ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div2">
                                    <ul className="p-2">
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/ObsGyne" className="drop-a">Obstetric & Gynecology</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Pediatrics" className="drop-a">Pediatrics</Link></li>
                                        {/* <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><a href="/" className="drop-a">General Medicine</a></li> */}
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Orthopedics" className="drop-a">Orthopedics</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/GeneralSurgery" className="drop-a">General Surgery</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Ophthalmology" className="drop-a">Ophthalmology</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Pulmonology" className="drop-a">Pulmonology</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Urology" className="drop-a">Urology</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Neurology" className="drop-a">Neurology</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/ENT" className="drop-a">ENT</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/DentalSurgery" className="drop-a">Dental</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/PhysioTherapy" className="drop-a">Physio Therapy</Link></li>
                                    </ul>
                                </div>
                            </li>




                            <li className="hover:bg-red-600 navbar-link dropdown3">
                                <a href="#" className="nav-a">Services <ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div3">
                                    <ul className="p-2">
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Laboratory" className="drop-a">Laboratory</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Radiology" className="drop-a">Radiology</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/NICU" className="drop-a">NICU</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Dialysis" className="drop-a">Dialysis</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Pharmacy" className="drop-a">Pharmacy</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/IPD" className="drop-a">IPD</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Ambulance" className="drop-a">Ambulance</Link></li>
                                        <li className="drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/GovermentSchemes" className="drop-a">Government Schemes</Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="hover:bg-red-600 navbar-link dropdown4">
                                <Link to="/diamondhospital" className="nav-a">Patient Guide <ChevronDown className="inline drop-icon" /></Link>
                                <div className="dropdown-div4">
                                    <ul className="p-2">
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/Floorplan" className="drop-a">Floor Plan</Link></li>
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/GeneralGuide" className="drop-a">General Guide</Link></li>
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><Link to="/DoAndDonts" className="drop-a">Do's & Don'ts</Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li className="hover:bg-red-600 navbar-link dropdown4">
                                <a href="#" className="nav-a">News & Media<ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div4">
                                    <ul className="p-2">
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><a href="/" className="drop-a">Blog</a></li>
                                        <li className=" drop-li mb-1 p-1.5 hover:bg-red-600"><a href="/" className="drop-a">Video</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="hover:bg-red-600 navbar-link"><Link to="/Gallery" className="nav-a">Gallery</Link></li>
                            <li className="hover:bg-red-600 navbar-link"><a href="#" className="nav-a">Career</a></li>

                        </ul>
                    </div>
                </div>
            </nav>



            {/* Mobile NavBar */}
            <div className="mobile-nav">
                <div className="mobile-menu">
                    {/* Semi-transparent overlay */}
                    <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40
${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        aria-hidden="true"
                    />

                    {/* Navigation menu */}
                    <nav id="mobile-menu"
                        className={`fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out z-50
${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                        aria-label="Mobile navigation"
                        aria-hidden={!isOpen}
                    >
                        <div className="p-6">
                            <ul className="space-y-6">
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

                            <ul>
                                <li onClick={closeSidebar} className="mt-5"><X className="bg-red-600 w-8 h-8 p-1 text-white rounded-full div-center" /></li>
                            </ul>
                        </div>
                    </nav>

                    <div className={`text-center w-1/4 pt-4 max-sm:leading-none pl-2 max-sm:pt-3`}>
                        <Link to="/Dimond-Hospital" className="max-sm:text-[12px]"><Hospital className="div-center" />About Us</Link>
                    </div>

                    <div className="text-center w-1/4 pt-4 max-sm:leading-none max-sm:pt-3">
                        <Link to="/Hospital-Team" className="max-sm:text-[12px]"><BriefcaseMedical className="div-center" />Team</Link>
                    </div>

                    <div className="text-center w-1/4 pt-4 max-sm:leading-none max-sm:pt-3">

                        <Link to="/diamondhospital" className="max-sm:text-[12px]"><House className="div-center" />Home</Link>
                    </div>

                    <div className="text-center w-1/4 pt-4 max-sm:leading-none max-sm:pt-3">
                        <Link to='/Gallery' className="max-sm:text-[12px]"><Images className="div-center" />Gallery</Link>
                    </div>

                    <div className="text-center w-1/4 pt-4  max-sm:pt-3">
                        <button
                            id="hamburger-button"
                            onClick={toggleMenu}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu"
                            className={`w-6 h-6 max-sm:w-3 max-sm:h-3 hover:scale-105 mr-4 active:scale-95 transition-all duration-200
${isAnimating ? 'animate-bounce-subtle' : ''}`}

                        >
                            <div className="relative w-8 h-8 -mt-4">
                                {/* Hamburger icon lines */}
                                <Ellipsis className="div-center w-8 h-8 bottombar-menu" />
                            </div>
                        </button>
                        <br />
                        <p className="mt-0.5 max-sm:text-[12px] bottombar-name">More</p>
                    </div>
                </div>
            </div>

            {/* <div className="bg-red-700 text-white font-[600] p-1.5 text-[1.1rem] max-sm:text-[0.5rem] text-center">
                <marquee behavior="" direction="">માતૃશ્રી રામુબા  તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા – ડાયમંડ હોસ્પિટલ અને મેડિકલ રિસર્ચ સેન્ટર</marquee>
                <p>માતૃશ્રી રામુબા  તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા – ડાયમંડ હોસ્પિટલ અને મેડિકલ રિસર્ચ સેન્ટર</p>
            </div> */}

        </header>
    );
}