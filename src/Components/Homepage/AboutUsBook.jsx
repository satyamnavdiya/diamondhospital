import React, { useRef } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Logo from '../Images/Logo.png'
import Nabh from '../Images/NABH.png'
import page2 from '../../../public/IMG/page2.jpg'
import page3 from '../../../public/IMG/page3.jpg'
import page5 from '../../../public/IMG/page5.jpg'
import page4 from '../../../public/IMG/page4.jpg'
import page7 from '../../../public/IMG/page7.jpg'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../CSS/Book.css'

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
      </div>

      {/* <div className='yt-video-div'>
      <iframe
                  className="absolute w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/UWt8Ah6mArM?muted=1&loop=1&autoplay=1&preload=1&rel=0&cc_load_policy=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
      </div> */}

      <div className="flex items-center justify-center p-1">
        <div className="max-w w-[80%] max-[991px]:flex max-[991px]:items-center max-sm:justify-center max-sm:relative max-sm:w-[100%]">
          <div className="relative">
            <HTMLFlipBook
              width={600}
              height={600}
              size="stretch"
              minWidth={500}
              maxWidth={500}
              minHeight={500}
              maxHeight={1533}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="book-content"
              ref={book}
            >
              <div className='f-page overflow-hidden'>
                <img src={page2} alt="" className='w-full h-full object-fill' />

              </div>

              <div className='book-left-page overflow-hidden'>
                <img src={page2} alt="" className='w-full h-full object-fill' />
              </div>

              <div className='book-right-page w-full overflow-hidden'>
                <img src={page3} alt="" />
              </div>

              <div className='book-left-page overflow-hidden'>
                <img src={page4} alt="" className='w-full h-full object-fill' />
              </div>


              <div className='book-right-page w-full overflow-hidden'>
                <img src={page5} alt="" />
              </div>

              <div className='book-left-page'>
                <img src={Logo} alt="Hospital Logo" className='w-[10rem] p-1 mt-18 ' />
              </div>

              <div className='book-right-page w-full overflow-hidden'>
                <img src={page7} alt="" />
              </div>

              <div className='book-left-page'>
                <h1 className="text-center items-center mt-[30%] font-bold text-teal-600 text-[5rem]">Thanks</h1>
              </div>

            </HTMLFlipBook>
          </div>

          {/* <div className="absolute left-0 right-0 bottom-[-365px]  flex justify-center gap-8 max-sm:hidden">
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
          </div> */}
        </div>
      </div>

      {/* <div className='mb-yt-video-div'>
      <iframe
                  className="absolute w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/UWt8Ah6mArM?muted=0&loop=1&autoplay=1&preload=1&rel=0&cc_load_policy=0`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
      </div> */}
    </>
  );
}

export default AboutUsBook;