import React from 'react';

const Navigation = ({
    slides,
    currentSlide,
    goToSlide,
}) => {
    return (
        <div className="slider-navigation">
            {slides.map((_, index) => (
                <button
                    key={index}
                    className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default Navigation;