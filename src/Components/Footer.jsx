import React from 'react'
import Logo from './Images/Logo.png'
import './CSS/Footer.css'


function Footer() {
    return (
        <>

            <footer className='bg-[#77baab7d]'>
                <div className="w-full rounded-lg overflow-hidden sm:mr-10 p-10 pb-0 flex items-end justify-start relative div-map z-10">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14877.71835256833!2d72.8633632462227!3d21.21480707540121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f6f08f9b693%3A0xd2f4780e70330cb0!2sSDA%20Diamond%20Hospital!5e0!3m2!1sen!2sin!4v1740049806227!5m2!1sen!2sin"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>

                </div>


                <div className='p-2 div1-footer'>
                    <img src={Logo} alt="RTSV - SDA Dimond hopital" className='footer-logo animate-float' />
                    <h1 className='text-[1.2rem] text-center hospital-name-footer'>RTSV - SDA <br />
                        DIAMOND HOSPITAL <br />
                        AND RESERACH CENTER</h1>
                </div>

                <div className='p-2 div2-footer'>
                    <h1 className='text-2xl mb-5 text-[#26362c] font-bold '>Meet Us On</h1>
                    <p className='text-[#005b41]'>Swati Society, Chikuwadi, <br />  Varachcha Road, Surat</p>
                    <br />
                    <h1 className='text-2xl mb-5 text-[#26362c] font-bold'>Mail Us On</h1>
                    <p className='text-[#005b41] text-[15px]'>admin@sdahospitalsurat.com</p>
                    <br />
                    <div className="div5-footer max-sm:-mt-10">
                        <h1 className='text-2xl mb-5 text-[#26362c] font-bold'>For Updates Follow Us On</h1>
                        <div className='flex justify-start div-center max-sm:justify-center'>
                            {/* instagram */}
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                                </svg>
                            </a>


                            {/* facebook */}
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
                                </svg>
                            </a>

                            {/* Youtube */}
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                                    <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='div3-footer p-2'>
                    <h1 className='text-2xl mb-5 text-[#26362c] font-bold '>Quick Links</h1>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>Kiran-2 Hospital</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>About Us</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>News & Media</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>Academics</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>Privacy Policy</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>Terms & Comditions</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>Contact Us</p>
                    <p className='mb-1.5 text-[#005b41] cursor-pointer hover:underline hover:decoration-[#005b41]'>Statutory Compliances</p>
                </div>

                <div className="div4-footer p-2">

                </div>
            </footer>

            <div className='pt-5 pb-5 text-center text-[#154360] div6-footer'>
                Copyright @2025 RTSV - SDA Dimond Hospital. <br className='hidden max-sm:block' /> All Rights Reserved. <br className='hidden max-lg:block' />Design & Develop By <span className='text-[#005b41]'> <span className='blcok max-md:hidden'>||</span> Sahajanand Technology</span>
            </div>
        </>
    )
}

export default Footer
