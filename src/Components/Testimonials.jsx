import React, { useState, useEffect, useRef } from "react";
import { textReviews, videoReviews } from "./data/reviews.js";
import { FileText, Video, ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard from "./TestimonialCard";
import './CSS/Testimonial.css'

const Testimonials = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const slideContainerRef = useRef(null);
    const autoplayTimerRef = useRef(null);

    const reviews = showVideo ? videoReviews : textReviews;

    // Check if mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIfMobile();
        window.addEventListener("resize", checkIfMobile);

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
    }, []);

    // Items per slide based on screen size
    const itemsPerSlide = isMobile ? 1 : 2;

    // Calculate number of slides needed
    const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

    // Prepare slides with correct number of items
    const prepareSlides = () => {
        const results = [];

        for (let i = 0; i < reviews.length; i += itemsPerSlide) {
            results.push(reviews.slice(i, i + itemsPerSlide));
        }

        return results;
    };

    const slides = prepareSlides();

    // Handle navigation
    const goToSlide = (index) => {
        // Handle wrap-around
        if (index < 0) {
            setCurrentIndex(totalSlides - 1);
        } else if (index >= totalSlides) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(index);
        }

        // Reset autoplay timer on manual navigation
        resetAutoplayTimer();
    };

    const goToNext = () => goToSlide(currentIndex + 1);
    const goToPrev = () => goToSlide(currentIndex - 1);

    // Autoplay functionality
    const startAutoplayTimer = () => {
        autoplayTimerRef.current = setTimeout(() => {
            goToNext();
        }, 5000);
    };

    const resetAutoplayTimer = () => {
        if (autoplayTimerRef.current) {
            clearTimeout(autoplayTimerRef.current);
            startAutoplayTimer();
        }
    };

    // Reset to first slide when review type or screen size changes
    useEffect(() => {
        setCurrentIndex(0);
    }, [showVideo, isMobile]);

    // Setup autoplay
    useEffect(() => {
        resetAutoplayTimer();
        return () => {
            clearTimeout(autoplayTimerRef.current);
        };
    }, [currentIndex, showVideo, isMobile]);

    useEffect(() => {
        if (!isMobile) {
            resetAutoplayTimer();
        }
        return () => {
            clearTimeout(autoplayTimerRef.current);
        };
    }, [currentIndex, showVideo, isMobile]);


    return (
        <div className="space-y-8 px-4 md:px-0 w-[80%] div-center max-sm:pt-[2rem]">
            <div>
                <h2 className="testimonial-heading testi-gradient">Customer Reviews</h2>
            </div>
            <div className="flex justify-center gap-2">
                    <button
                        onClick={() => setShowVideo(false)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md ${!showVideo
                            ? "bg-teal-600 text-white"
                            : "bg-white text-gray-700 border border-gray-300"
                            }`}
                    >
                        <FileText className="h-4 w-4" />
                        <span className={isMobile ? "sr-only" : ""}>Text Reviews</span>
                    </button>
                    <button
                        onClick={() => setShowVideo(true)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-md ${showVideo
                            ? "bg-teal-500 text-white"
                            : "bg-white text-gray-700 border border-gray-300"
                            }`}
                    >
                        <Video className="h-4 w-4" />
                        <span className={isMobile ? "sr-only" : ""}>Video Reviews</span>
                    </button>
                </div>

            <div className="relative">
                {/* Carousel container */}
                <div
                    ref={slideContainerRef}
                    className="overflow-hidden"
                    onMouseEnter={() => clearTimeout(autoplayTimerRef.current)}
                    onMouseLeave={startAutoplayTimer}
                >
                    <div
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                className="w-full flex-shrink-0 px-2"
                                style={{ minWidth: '100%' }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                                    {slide.map((review) => (
                                        <div key={review.id} className="h-full">
                                            <ReviewCard review={review} showVideo={showVideo} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={goToPrev}
                        className="h-10 w-10 rounded-full bg-primary hover:bg-primary/80 border-none shadow-md flex items-center justify-center"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="h-10 w-10 rounded-full bg-primary  hover:bg-primary/80 border-none shadow-md flex items-center justify-center"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-2 mt-4">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full transition-colors ${currentIndex === index ? 'bg-black' : 'bg-gray-300'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
