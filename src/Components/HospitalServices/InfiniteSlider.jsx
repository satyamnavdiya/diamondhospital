import React, { useRef, useState, useEffect } from 'react';
import PackageCard from './PackageCard';

const InfiniteSlider = ({ packages, speed = 50, gap = 24 }) => {
    const [isPaused, setIsPaused] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const sliderRef = useRef(null);
    const animationRef = useRef(null);
    const lastTimeRef = useRef(0);
    const positionRef = useRef(0);

    // Clone packages to create a seamless loop
    const duplicatedPackages = [...packages, ...packages];

    const startAnimation = (timestamp) => {
        if (!sliderRef.current) return;

        if (!lastTimeRef.current) {
            lastTimeRef.current = timestamp;
        }

        const elapsed = timestamp - lastTimeRef.current;
        lastTimeRef.current = timestamp;

        if (!isPaused && !isModalOpen) {
            // Move position based on elapsed time and speed
            positionRef.current += (speed * elapsed) / 1000;

            // Reset position for seamless loop
            const containerWidth = packages.length * (320 + gap);
            if (positionRef.current >= containerWidth) {
                positionRef.current = 0;
            }

            sliderRef.current.style.transform = `translateX(-${positionRef.current}px)`;
        }

        animationRef.current = requestAnimationFrame(startAnimation);
    };

    useEffect(() => {
        animationRef.current = requestAnimationFrame(startAnimation);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isPaused, speed, isModalOpen]);

    return (
        <div className="relative w-full overflow-hidden py-8">
            {/* Gradient overlay left */}
            <div className="absolute left-0 top-0 w-24 h-full z-10 pointer-events-none bg-gradient-to-r from-gray-100 to-transparent"></div>

            {/* Gradient overlay right */}
            <div className="absolute right-0 top-0 w-24 h-full z-10 pointer-events-none bg-gradient-to-l from-gray-100 to-transparent"></div>

            <div
                className="flex transition-transform duration-150 ease-linear"
                style={{ gap: `${gap}px` }}
                ref={sliderRef}
            >
                {duplicatedPackages.map((pack, index) => (
                    <div
                        key={`${pack.id}-${index}`}
                        className="flex-shrink-0"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        <PackageCard
                            pack={pack}
                            onModalOpen={() => setIsModalOpen(true)}
                            onModalClose={() => setIsModalOpen(false)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;