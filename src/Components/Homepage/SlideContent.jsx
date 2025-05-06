import React from 'react';

const SlideContent = ({
    slide,
    isActive,
    totalSlides,
    index,
    currentIndex
}) => {
    const isNext = (index === 0 && currentIndex === totalSlides - 1)
        || (index === currentIndex + 1)
        || (index > currentIndex + 1 && index - currentIndex < totalSlides / 2);

    const isPrev = (currentIndex === 0 && index === totalSlides - 1)
        || (index === currentIndex - 1)
        || (index < currentIndex - 1 && currentIndex - index < totalSlides / 2);

    const slideClasses = `slide ${isActive ? 'active' : ''} ${isNext ? 'next' : isPrev ? 'prev' : ''}`;

    return (
        <div className={slideClasses}>
            <div className="slide-image-container">
                <picture>
                    <source
                        media="(max-width: 640px)"
                        srcSet={slide.imageMobile || slide.image}
                    />
                    <source
                        media="(max-width: 1024px)"
                        srcSet={slide.imageTablet || slide.image}
                    />
                    <source
                        media="(min-width: 2560px)"
                        srcSet={slide.image4K || slide.image}
                    />
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="slide-image"
                        loading={index === 0 ? "eager" : "lazy"}
                    />
                </picture>
                <div className="slide-overlay"></div>
            </div>
        </div>
    );
};

export default SlideContent;