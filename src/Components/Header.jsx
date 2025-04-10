import React, { useState, useEffect } from "react";
import Logo from './Images/Logo.png'
import Nabh from './Images/NABH.png'
import Tri from './Images/tri.png'
import './CSS/Header.css'
import { House, Hospital, LibraryBig, BriefcaseMedical, Images, ClipboardPlus, Stethoscope, Accessibility, Phone, Clock, HeartPulse, ChevronDown, Ellipsis, X } from 'lucide-react';
import { Link } from "react-router-dom";
// import GoogleTranslate from "./GoogleTranslate";


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
            icon: Stethoscope, label: 'Specialties', to: '/', delay: 0, submenu: [
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
            icon: ClipboardPlus, label: 'Services', to: '/', delay: 150, submenu: [
                { label: 'Laboratory', to: '/Laboratory' },
                { label: 'Radiology', to: '/Radiology' },
                { label: 'NICU', to: '/NICU' },
                { label: 'Dialysis', to: '/Dialysis' },
                { label: 'Pharmacy', to: '/Pharmacy' },
                { label: 'IPD', to: '/IPD' },
                { label: 'Ambulance', to: '/Ambulance' },
                { label: 'Government Schemes', to: '/' },
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
            icon: HeartPulse, label: 'News & Media', to: '/', delay: 250, submenu: [
                { label: 'Blog', to: '/' },
                { label: 'Video', to: '/' },
            ]
        },
        { icon: LibraryBig, label: 'Academics', to: '/', delay: 300 },
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
                        <ul className="hidden md:flex items-center space-x-2 desktop-navbar">
                            <li className="hover:bg-red-600 navbar-link"><Link to="/" className="nav-a">Home</Link></li>

                            <li className="hover:bg-red-600 navbar-link dropdown1">
                                <a href="#" className="nav-a">About <ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div1">
                                    <ul className="p-2">
                                        <Link to="/Dimond-Hospital" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600"> <div className="div-bg1"></div>  Dimond Hospital</li></Link>
                                        <Link to="/Hospital-Team" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600">Our Trustees</li></Link>
                                    </ul>
                                </div>
                            </li>

                            <li className="hover:bg-red-600 navbar-link"><Link to="/Doctor-Profile" className="nav-a">Doctor's Profile</Link></li>

                            <li className="hover:bg-red-600 navbar-link dropdown2">
                                <a href="#" className="nav-a">Specialties <ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div2">
                                    <ul className="p-2">
                                        <Link to="/ObsGyne" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600"><div className="div-bg3"></div>Obstetric & Gynecology</li></Link>
                                        <Link to="/Pediatrics" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600"><div className="div-bg4"></div>Pediatrics</li></Link>
                                        <Link to="/Orthopedics" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600"><div className="div-bg5"></div>Orthopedics</li></Link>
                                        <Link to="/GeneralSurgery" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">General Surgery</li></Link>
                                        <Link to="/Ophthalmology" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Ophthalmology</li></Link>
                                        <Link to="/Pulmonology" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Pulmonology</li></Link>
                                        <Link to="/Urology" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Urology</li></Link>
                                        <Link to="/Neurology" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Neurology</li ></Link>
                                        <Link to="/ENT" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">ENT</li ></Link>
                                        <Link to="/DentalSurgery" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Dental</li ></Link>
                                        <Link to="/PhysioTherapy" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Physio Therapy</li ></Link>
                                    </ul >
                                </div>
                            </li >

                            <li className="hover:bg-red-600 navbar-link dropdown3">
                                <a href="#" className="nav-a">Services <ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div3">
                                    <ul className="p-2">
                                    <Link to="/Laboratory" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Laboratory</li></Link>
                                    <Link to="/Radiology" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Radiology</li></Link>
                                    <Link to="/NICU" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">NICU</li></Link>
                                    <Link to="/Dialysis" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Dialysis</li></Link>
                                    <Link to="/Pharmacy" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Pharmacy</li></Link>
                                    <Link to="/IPD" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">IPD</li></Link>
                                    <Link to="/Ambulance" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Ambulance</li></Link>
                                    <Link to="/GovermentSchemes" className="drop-a"><li className="drop-li mb-1 p-1.5 hover:bg-red-600">Government Schemes</li></Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="hover:bg-red-600 navbar-link dropdown4">
                                <Link to="/" className="nav-a">Patient Guide <ChevronDown className="inline drop-icon" /></Link>
                                <div className="dropdown-div4">
                                    <ul className="p-2">
                                    <Link to="/Floorplan" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600">Floor Plan</li></Link>
                                    <Link to="/GeneralGuide" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600">General Guide</li></Link>
                                    <Link to="/DoAndDonts" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600">Do's & Don'ts</li></Link>
                                    </ul>
                                </div>
                            </li>

                            <li className="hover:bg-red-600 navbar-link dropdown4">
                                <a href="#" className="nav-a">News & Media<ChevronDown className="inline drop-icon" /></a>
                                <div className="dropdown-div4">
                                    <ul className="p-2">
                                        <a href="/" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600">Blog</li></a>
                                        <Link to="/Video" className="drop-a"><li className=" drop-li mb-1 p-1.5 hover:bg-red-600">Video</li></Link>
                                    </ul>
                                </div>
                            </li>
                            <li className="hover:bg-red-600 navbar-link"><Link to="/Gallery" className="nav-a">Gallery</Link></li>
                            <li className="hover:bg-red-600 navbar-link"><Link to="/Career" className="nav-a">Career</Link></li>

                        </ul >
                    </div >
                </div >
            </nav >



            {/* Mobile NavBar */}
            < div className="mobile-nav" >
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
                                <li onClick={closeSidebar} className="div-center mt-5 w-[50%]"><p className="text-center bg-red-700 text-white rounded-l px-1 py-1">Close</p></li>
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

                        <Link to="/" className="max-sm:text-[12px]"><House className="div-center" />Home</Link>
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
            </ div>

            {/* <div className="bg-red-700 text-white font-[600] p-1.5 text-[1.1rem] max-sm:text-[0.5rem] text-center">
                <marquee behavior="" direction="">માતૃશ્રી રામુબા  તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા – ડાયમંડ હોસ્પિટલ અને મેડિકલ રિસર્ચ સેન્ટર</marquee>
                <p>માતૃશ્રી રામુબા  તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા – ડાયમંડ હોસ્પિટલ અને મેડિકલ રિસર્ચ સેન્ટર</p>
            </div> */}

        </header >
    );
}