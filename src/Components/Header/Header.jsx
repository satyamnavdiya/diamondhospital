import { useState, useEffect } from "react";
import DropdownMenu from "./DropdownMenu";
import Logo from '../Images/logo.png'
import Nabh from '../Images/NABH.png'
import Tri from '../Images/tri.png'
import MobileNav from "./MobileNav";
import '../CSS/Header.css'
import {  Phone, Clock,ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
// import GoogleTranslate from "./GoogleTranslate";
// import LanguageSwitcher from "./LanguageSwitcher ";

export default function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setIsOpen(false);
            }, 10000); // 10 seconds

            // Cleanup timer if  closes before 10s or component unmounts
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    
    const toggleDropdown = (index) => {
        // This will close the current  if it's already open,
        // or close any other open  and open this one
        setOpenDropdown(openDropdown === index ? null : index);
    };




    useEffect(() => {
        const handleClickOutsideDropdown = (event) => {
            // If the clicked element is not inside any <li> with class 'dropdown', close it
            if (!event.target.closest('li.dropdown')) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutsideDropdown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideDropdown);
        };
    }, []);


    return (
        <header className="w-full nav-header">

            {/* Top Bar */}
            <div className='topbar bg-red-600'>
                <img src={Tri} alt="Tri Logo" className="inline tri-img" />
                <div className="inline">
                    <div className="container mx-auto px-6 flex justify-evenly items-center">
                        <div className="flex items-center top-custom-space">
                            <div className="flex items-center">
                                <Phone className="mr-2 topbar-icon" />
                                <span className="topbar-text ">Emergency: 0261 2509505</span>
                            </div>
                            <div className="second-icon md:flex items-center">
                                <Clock className="mr-2 topbar-icon" />
                                <span className="topbar-text  ">24/7 Care Available</span>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            {/* logo And Name */}
            <div>
                <div className="flex items-center logo-name-div">
                    <div className="font-bold text-2xl logo-div"><img src={Logo} alt="Hospital Logo" className='logo-nav' />
                    </div>

                    <div className="hospital-Desk-name">
                        <p className="hospital-name">
                            <span className="block  bg-[#003066] text-white  text-[1rem]  mb-2 font-extrabold hostipal-name-span">માતૃશ્રી રામુબા તેજાણી તથા માતૃશ્રી શાન્તાબા વિડિયા</span>
                            SDA DIAMOND HOSPITAL
                            <br />
                            AND MEDICAL RESEARCH CENTER
                        </p>
                    </div>

                    <div className="font-bold text-2xl nabh-div ml-5"><img src={Nabh} alt="Hospital Logo" className='logo-nav' />
                    </div>
                </div>
                <div className="mobile-logo">
                    <img src="/icons/mobile-logo.png" alt="" />
                </div>
            </div>

            {/* Desktop Navbar */}
            <nav className="bg-transparen mt-1 desktop-nav ">
                <div>
                    <div className="flex justify-between items-center">
                        {/* Desktop Menu */}
                        <div>
                            <ul className="hidden md:flex items-center nav-custom-space">
                                <li className="hover:bg-red-600 navbar-link"><Link to="/" className="nav-a">Home</Link></li>

                                <li className="hover:bg-red-600 navbar-link dropdown" onClick={() => toggleDropdown(1)}>
                                    <a className="nav-a">About <ChevronDown className="inline drop-icon" /></a>
                                    <DropdownMenu
                                        isOpen={openDropdown === 1}
                                        items={[
                                            { label: 'Diamond Hospital', to: '/Dimond-Hospital' },
                                            { label: 'Our Trustees', to: '/Hospital-Team' },
                                        ]}
                                    />
                                </li>

                                <li className="hover:bg-red-600 navbar-link"><Link to="/Doctor-Profile" className="nav-a">Doctor's Profile</Link></li>

                                <li className="hover:bg-red-600 navbar-link dropdown" onClick={() => toggleDropdown(2)}>
                                    <a className="nav-a">Specialties <ChevronDown className="inline drop-icon" /></a>
                                    <DropdownMenu
                                        isOpen={openDropdown === 2}
                                        items={[
                                            { label: 'Obstetric & Gynecology', to: '/ObsGyne', },
                                            { label: 'Pediatrics', to: '/Pediatrics' },
                                            { label: 'Orthopedics', to: '/Orthopedics' },
                                            { label: 'General Surgery', to: '/GeneralSurgery' },
                                            { label: 'Ophthalmology', to: '/Ophthalmology' },
                                            { label: 'Pulmonology', to: '/Pulmonology' },
                                            { label: 'Urology', to: '/Urology' },
                                            { label: 'Neurology', to: '/Neurology' },
                                            { label: 'ENT', to: '/ENT' },
                                            { label: 'Dental', to: '/DentalSurgery' },
                                            { label: 'Physiotherapy', to: '/PhysioTherapy' },
                                            { label: 'Plastic & Cosmetic Surgery', to: '/PlasticSurgery' },
                                            { label: 'Dermatology & Cosmetology', to: '/Skin' },
                                            { label: 'Gastroenterology', to: '/Gastroenterology' },
                                            { label: 'General Medicine', to: '/GeneralMedicine' },
                                            { label: 'Lasparoscopic Surgery', to: '/LasparoscopicSurgery' },
                                            { label: 'Fetal Medicines', to: '/FetalMedicines' },
                                        ]}
                                    />
                                </li >

                                <li className="hover:bg-red-600 navbar-link dropdown" onClick={() => toggleDropdown(3)}>
                                    <a className="nav-a">Services <ChevronDown className="inline drop-icon" /></a>
                                    <DropdownMenu
                                        isOpen={openDropdown === 3}
                                        items={[
                                            { label: 'Laboratory', to: '/Laboratory' },
                                            { label: 'Radiology', to: '/Radiology' },
                                            { label: 'NICU', to: '/NICU' },
                                            { label: 'Dialysis', to: '/Dialysis' },
                                            { label: 'Pharmacy', to: '/Pharmacy' },
                                            { label: 'IPD', to: '/IPD' },
                                            { label: 'Ambulance', to: '/Ambulance' },
                                            { label: 'ICU', to: '/ICU' },
                                            { label: 'OPD', to: '/OPD' },
                                            { label: 'Government Schemes', to: '/' },
                                        ]}
                                    />
                                </li>
                                <li className="hover:bg-red-600 navbar-link dropdown" onClick={() => toggleDropdown(4)}>
                                    <Link className="nav-a">Patient Guide <ChevronDown className="inline drop-icon" /></Link>
                                    <DropdownMenu
                                        isOpen={openDropdown === 4}
                                        items={[
                                            { label: 'Floor Plan', to: '/Floorplan' },
                                            { label: 'General Guide', to: '/GeneralGuide' },
                                            { label: "Do's & Don'ts", to: '/DoAndDonts' },
                                        ]}
                                    />
                                </li>

                                <li className="hover:bg-red-600 navbar-link dropdown" onClick={() => toggleDropdown(5)}>
                                    <a className="nav-a">Health Information<ChevronDown className="inline drop-icon" /></a>
                                    <DropdownMenu
                                        isOpen={openDropdown === 5}
                                        items={[
                                            { label: 'Blog', to: '/' },
                                            { label: 'Video', to: '/Video' },
                                        ]}
                                    />
                                </li>
                                <li className="hover:bg-red-600 navbar-link"><Link to="/Gallery" className="nav-a">Gallery</Link></li>
                                <li className="hover:bg-red-600 navbar-link"><Link to="/Career" className="nav-a">Career</Link></li>

                            </ul >
                        </div>
                    </div >
                </div >
            </nav >

            <MobileNav />
        </header >
    );
}