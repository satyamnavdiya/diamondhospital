import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Logo from './Images/Logo.png'
import Nabh from './Images/NABH.png'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './CSS/Book.css'

// const bookPages = [
//   {
//     id: 1,
//     image: "",
//     description: "Welcome to Diamond Hospital Surat, a premier multi-speciality healthcare facility located in the heart of Surat, Gujarat. We are dedicated to providing comprehensive, patient-focused care around the clock, ensuring that every individual receives timely and personalized treatment. Our state-of-the-art facility is equipped with advanced diagnostic tools, modern surgical suites, and a range of specialized care units to meet the diverse health needs of our community."

//   },
//   {
//     id: 2,
//     image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1000",
//     title: "Coastal Dreams",
//     description: "Waves crash endlessly upon golden shores, where seabirds dance in the salty breeze. The horizon stretches infinitely, merging sea and sky."
//   },
//   {
//     id: 3,
//     image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1000",
//     title: "Mountain Majesty",
//     description: "Towering peaks pierce the clouds, their snow-capped summits glowing in the morning light. The air is crisp and pure at these dizzying heights."
//   }
// ];

const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className='page ' ref={ref} data-density="soft">
      <div >
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

// const Page = React.forwardRef((props, ref) => {
//   return (
//     <div className="page " ref={ref}>
//       <div className="relative h-[500px] bg-red-950 shadow-lg flex ">
//         <div>
//           <img
//             src={props.page.image}
//             alt={props.page.title}
//             className="w-full h-full object-cover "
//           />
//           <div className="absolute inset-0 bg-black/10 " />
//         </div>
//         <div className="w-1/2 p-12 flex flex-col justify-between">
//           <div>
//             <h2 className="text-4xl font-serif font-bold mb-6 text-gray-800">
//               {props.page.title}
//             </h2>
//             <p className="text-lg text-white leading-relaxed font-serif">
//               {props.page.description}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

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

      <div className="flex items-center justify-center p-4">
        <div className="max-w w-[80%]">
          <div className="relative">
            <HTMLFlipBook
              width={600}
              height={600}
              size="stretch"
              minWidth={320}
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
                  <img src={Logo} alt="Hospital Logo" className='logo-nav' /><img src={Nabh} alt="Hospital Logo" className='logo-nav' />
                </div>
                <div>
                  <span className="bg-teal-500 text-white px-1.5 py-1 text-[0.9rem] rounded-[10px] mb-2 font-bold">માતૃશ્રી રામુબા તેજાની તથા માતૃશ્રી શાન્તાબા વિડિયા</span>
                  <p className='text-white mt-2 text-2xl font-bold'>
                    SDA DIAMOND HOSPITAL
                    <br />
                    AND MEDICAL RESEARCH CENTER
                  </p>
                </div>
                <div className="font-bold text-2xl nabh-div ml-5">
                </div>
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='logo-nav w-[20rem] p-10 mt-18 ' />
              </div>

              <div className='book-right-page'>
                <p className=" mb-4 dimond-text">
                  Welcome to Diamond Hospital Surat, a premier multi-speciality healthcare facility located in the heart of Surat, Gujarat. We are dedicated to providing comprehensive, patient-focused care around the clock, ensuring that every individual receives timely and personalized treatment. Our state-of-the-art facility is equipped with advanced diagnostic tools, modern surgical suites, and a range of specialized care units to meet the diverse health needs of our community.
                </p>
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='logo-nav w-[20rem] p-10 mt-18 ' />
              </div>

              <div className='book-right-page'>
                <p className=" mb-4 dimond-text">
                  Our team of highly skilled physicians, experienced specialists, and compassionate support staff work together to deliver world-class healthcare services. Whether it's emergency care, routine check-ups, or advanced surgical procedures, we combine cutting-edge technology with a patient-first approach to ensure the best outcomes for every patient.
                </p>
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='logo-nav w-[20rem] p-10 mt-18 ' />
              </div>

              <div className='book-right-page'>
                <p className=" mb-4 dimond-text">
                  At Diamond Hospital Surat, quality and compassion go hand in hand. We are committed to upholding the highest standards of medical excellence while creating a comfortable, welcoming environment for our patients and their families. Experience a new standard of healthcare where every patient is treated like family.
                </p>
              </div>

              <div className='book-right-page'>
                <p className=" s dimond-text">
                  Discover the difference of truly dedicated care at Diamond Hospital Surat—your trusted partner in health.
                </p>
              </div>

              <PageCover>The End</PageCover>
            </HTMLFlipBook>

            <div className="absolute left-0 right-0 bottom-[-20px] flex justify-center gap-8">
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
      </div>
    </>
  );
}

export default AboutUsBook;