import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SlideContent from './SlideContent';
import Navigation from './Navigation.jsx';
import ProgressBar from './ProgressBar';
import '../CSS/Homapage.css'

const Slider = ({
    slides,
    autoPlay = true,
    autoPlaySpeed = 5000,
}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    const goToSlide = useCallback((index) => {
        setCurrentSlide(index);
    }, []);

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, autoPlaySpeed);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isPlaying, nextSlide, autoPlaySpeed]);

    return (
        <div
            className="hero-slider relative overflow-hidden"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(autoPlay)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            <div className="slider-container">
                {slides.map((slide, index) => (
                    <SlideContent
                        key={index}
                        slide={slide}
                        isActive={currentSlide === index}
                        totalSlides={slides.length}
                        index={index}
                        currentIndex={currentSlide}
                    />
                ))}
            </div>

            <button
                className="nav-button prev-button"
                onClick={prevSlide}
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                className="nav-button next-button"
                onClick={nextSlide}
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <Navigation
                slides={slides}
                currentSlide={currentSlide}
                goToSlide={goToSlide}
            />

            <ProgressBar
                currentSlide={currentSlide}
                totalSlides={slides.length}
                autoPlaySpeed={autoPlaySpeed}
                isPlaying={isPlaying}
            />
        </div>
    );
};

export default Slider;