import React, { useState, useEffect, useRef } from 'react';
import Page from './Page.jsx';
import { bookImages } from '../../data/bookimage.js';

const BookViewer = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const goToNextPage = () => {
        if (isTransitioning) return;

        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentPage((prevPage) =>
                prevPage === bookImages.length - 1 ? 0 : prevPage + 1
            );
            setIsTransitioning(false);
        }, 200); // Match animation duration
    };

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                goToNextPage();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isTransitioning]);

    // Swipe handlers
    const handleTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        handleSwipe();
    };

    const handleSwipe = () => {
        if (!touchStartX.current || !touchEndX.current) return;

        const distance = touchStartX.current - touchEndX.current;

        if (distance > 50) {
            // Swiped left
            goToNextPage();
        }

        // Reset refs
        touchStartX.current = null;
        touchEndX.current = null;
    };

    return (
        <>
            <div className='about-div'>
                <h1 className='about-heading about-gradient'>About us</h1>
            </div>
            <div
                className="relative w-[300px] h-[300px] rounded-[20px] overflow-hidden bg-black perspective-1000 div-center"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {bookImages.map((image, index) => (
                    <Page
                        key={image.id}
                        imageUrl={image.url}
                        alt={image.alt}
                        isActive={currentPage === index}
                        onClick={goToNextPage}
                    />
                ))}
            </div>
        </>
    );
};

export default BookViewer;
