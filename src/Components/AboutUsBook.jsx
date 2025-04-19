import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Logo from './Images/Logo.png'
import Nabh from './Images/NABH.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CSS/Book.css'

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className='page ' ref={ref} data-density="soft">
      <div >
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

function AboutUsBook() {
  const book = useRef();

  const nextButtonClick = () => {
    book.current.pageFlip().flipNext();
  };

  const prevButtonClick = () => {
    book.current.pageFlip().flipPrev();
  };

  return (
    <>


      <div className='about-div'>
        <h1 className='about-heading about-gradient'>About Us</h1>
        <p className='text-2xl inline mr-5'>Open The Book</p>
      </div>

      <div className="flex items-center justify-center p-4 max-[991px]:overflow-hidden max-[991px]:h-[75vh]  max-[640px]:h-[45vh] max-sm:mt-10">
        <div className="max-w w-[80%] max-[991px]:flex max-[991px]:items-center max-sm:justify-center max-sm:relative max-sm:w-[100%]">
          <div className="relative">
            <HTMLFlipBook
              width={600}
              height={600}
              size="stretch"
              minWidth={300}
              maxWidth={500}
              minHeight={400}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="book-content"
              ref={book}
            >
              <div className='f-page'>
                <div className="font-bold text-2xl book-cover-logo">
                  <img src={Logo} alt="Hospital Logo" className='logo-nav' />
                  <img src={Nabh} alt="Hospital Logo" className='logo-nav' />
                </div>
                <div className='book-f-name'>
                  <span className="bg-teal-500 text-white px-1.5 py-1 text-[0.9rem] rounded-[10px] mb-2 font-bold max-sm:text-[10px]">માતૃશ્રી રામુબા તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા</span>
                  <p className='text-white mt-2 text-2xl font-bold max-sm:text-[15px]'>
                    SDA DIAMOND HOSPITAL
                    <br />
                    AND MEDICAL RESEARCH CENTER
                  </p>
                </div>
                <div className="font-bold text-2xl nabh-div ml-5">
                </div>
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='bookpage-logo p-10 mt-18 ' />
              </div>

              <div className='book-right-page'>
                <p className=" mb-4 dimond-text">
                  Welcome to Diamond Hospital Surat, a premier multi-speciality healthcare facility located in the heart of Surat, Gujarat. We are dedicated to providing comprehensive, patient-focused care around the clock, ensuring that every individual receives timely and personalized treatment. Our state-of-the-art facility is equipped with advanced diagnostic tools, modern surgical suites, and a range of specialized care units to meet the diverse health needs of our community.
                </p>
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='bookpage-logo p-10 mt-18 ' />
              </div>

              <div className='book-right-page'>
                <p className=" mb-4 dimond-text">
                  Our team of highly skilled physicians, experienced specialists, and compassionate support staff work together to deliver world-class healthcare services. Whether it's emergency care, routine check-ups, or advanced surgical procedures, we combine cutting-edge technology with a patient-first approach to ensure the best outcomes for every patient.
                </p>
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='bookpage-logo p-10 mt-18 ' />
              </div>

              <div className='book-right-page'>
                <p className=" mb-4 dimond-text">
                  At Diamond Hospital Surat, quality and compassion go hand in hand. We are committed to upholding the highest standards of medical excellence while creating a comfortable, welcoming environment for our patients and their families. Experience a new standard of healthcare where every patient is treated like family.
                </p>
              </div>

              <div className='book-left-page'>
                <h1 className="text-center items-center mt-[30%] font-bold text-teal-600 text-[5rem]">Thanks</h1>
              </div>

              <div>
                <iframe
                  className="absolute w-full h-full rounded-2xl"
                  // src={`https://www.youtube.com/embed/UWt8Ah6mArM?muted=0&loop=1&autoplay=1&preload=1&rel=0&cc_load_policy=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

            </HTMLFlipBook>
          </div>

          <div className="absolute left-0 right-0 bottom-[-365px]  flex justify-center gap-8 max-sm:hidden">
            <button
              onClick={prevButtonClick}
              className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextButtonClick}
              className="p-4 rounded-full bg-white hover:bg-gray-100 transition-colors shadow-md"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUsBook;