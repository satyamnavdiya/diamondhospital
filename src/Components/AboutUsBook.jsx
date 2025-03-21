import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
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
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="relative h-[500px] bg-[whitea] shadow-lg flex items-center justify-center">
        <h2 className="text-4xl font-serif">{props.children}</h2>
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
      <div className='mx-auto text-center'>
        <span className='text-center bg-teal-500 text-white px-2 py-1 rounded-full text-[10px] '>About Us</span>
        <h2 className="text-3xl font-bold text-gray-900 mb-6"><span className="Dimond-heading Dimond-gradient">Dimond Hospital</span></h2>
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
              <PageCover>
                <span className='text-center bg-teal-500 text-white px-2 py-1 rounded-full text-[10px] '>About Us</span>
                <h2 className="text-[2.5rem] font-bold text-white mb-6 "><span className="">Dimond Hospital</span></h2>
              </PageCover>
              <PageCover>Logo with Text</PageCover>
              <PageCover>Welcome to Diamond Hospital Surat, a premier multi-speciality healthcare facility located in the heart of Surat, Gujarat. We are dedicated to providing comprehensive, patient-focused care around the clock, ensuring that every individual receives timely and personalized treatment. Our state-of-the-art facility is equipped with advanced diagnostic tools, modern surgical suites, and a range of specialized care units to meet the diverse health needs of our community.</PageCover>


              {/* {bookPages.map((page) => (
                <Page key={page.id} page={page}>Page NO1 </Page>
              ))} */}
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