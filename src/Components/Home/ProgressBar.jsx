import React, { useState, useEffect } from 'react';

const ProgressBar = ({
    currentSlide,
    totalSlides,
    autoPlaySpeed,
    isPlaying,
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setProgress(0);

        if (!isPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev < 100) {
                    return prev + (100 / (autoPlaySpeed / 100));
                }
                return 0;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [currentSlide, isPlaying, autoPlaySpeed]);

    return (
        <div className="progress-container">
            {Array.from({ length: totalSlides }).map((_, index) => (
                <div key={index} className="progress-segment">
                    <div
                        className={`progress-bar ${currentSlide === index ? 'active' : ''}`}
                        style={{
                            width: currentSlide === index ? `${progress}%` :
                                currentSlide > index ? '100%' : '0%'
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;