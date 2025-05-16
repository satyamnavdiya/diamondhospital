import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import Logo from '../Images/Logo.png'
import page1 from '../Images/book/1.jpg'
import page2 from '../Images/book/2.jpg'
import page3 from '../Images/book/3.jpg'
import page4 from '../Images/book/4.jpg'
import page5 from '../Images/book/5.jpg'
import page6 from '../Images/book/6.jpg'
import page7 from '../Images/book/7.jpg'
import page8 from '../Images/book/8.jpg'
import page9 from '../Images/book/9.jpg'
import page10 from '../Images/book/10.jpg'
// import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      <section className='about-book'>

        <div className='about-div'>
          <h1 className='about-heading about-gradient'>About us</h1>
        </div>

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
                onInit={() => {
                  const flipBook = book.current?.pageFlip();
                  if (flipBook) {
                    flipBook.flip(1);
                  }
                }}
              >

                <div className='f-page overflow-hidden'>
                  <img src={page2} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='book-left-page overflow-hidden'>
                  <img src={page1} alt="" className='w-full h-full object-cover ' />
                </div>

                <div className='book-right-page overflow-hidden page-corner-hint'>
                  <img src={page2} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='book-left-page overflow-hidden'>
                  <img src={page3} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='book-right-page w-full overflow-hidden page-corner-hint'>
                  <img src={page4} alt="" />
                </div>

                <div className='book-left-page overflow-hidden'>
                  <img src={page5} alt="" className='w-full h-full object-cover' />
                </div>


                <div className='book-right-page w-full overflow-hidden page-corner-hint'>
                  <img src={page6} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='book-left-page w-full overflow-hidden'>
                  <img src={page7} alt="Hospital Logo" className='w-full h-full object-cover' />
                </div>

                <div className='book-right-page w-full overflow-hidden page-corner-hint'>
                  <img src={page8} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='book-left-page w-full overflow-hidden'>
                  <img src={page9} alt="" className='w-full h-full object-cover' />
                </div>

                <div className='book-right-page w-full overflow-hidden'>
                  <img src={page10} alt="" className='w-full h-full object-cover' />
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

      </section>
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