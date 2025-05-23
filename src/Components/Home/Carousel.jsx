import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../CSS/Homapage.css'


const Carousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = useCallback((newDirection) => {
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex >= slides.length) nextIndex = 0;
            if (nextIndex < 0) nextIndex = slides.length - 1;
            return nextIndex;
        });
    }, [slides.length]);

    useEffect(() => {
        if (!isPaused) {
            const timer = setInterval(() => {
                paginate(1);
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [isPaused, paginate]);

    return (
        <div
            className="relative slider-img bg-gray-800"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <AnimatePresence initial={false} custom={1}>
                <motion.div
                    key={currentIndex}
                    custom={1}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute w-full h-full  "
                >
                    <div
                        className="w-full h-full bg-center bg-size-[100%] bg-no-repeat"
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    />
                </motion.div>
            </AnimatePresence>

            <div className="absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            <button
                className="absolute z-10 left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 transition-all flex items-center justify-center backdrop-blur-sm"
                onClick={() => paginate(-1)}
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
                className="absolute z-10 right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 hover:bg-white/50 transition-all flex items-center justify-center backdrop-blur-sm"
                onClick={() => paginate(1)}
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </div>
    );
};

export default Carousel;