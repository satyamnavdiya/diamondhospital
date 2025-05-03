import React, { useState } from 'react';

const GalleryItem = ({ image, onClick }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    // Calculating aspect ratio for the placeholder
    const aspectRatio = (image.height / image.width) * 100;

    return (
        <div
            className="mb-4 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onClick(image)}
        >
            <div className="relative" style={{ paddingBottom: `${aspectRatio}%` }}>
                {!isLoaded && (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg"></div>
                )}
                <img
                    src={image.src}
                    alt={image.alt} loading='lazy'
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                    onLoad={handleImageLoad}
                />

                {/* Hover overlay */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 flex flex-col justify-end transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="text-white space-y-2">
                        <div className="flex flex-wrap gap-1">
                            {image.tags.map(tag => (
                                <span key={tag} className="px-2 py-0.5 bg-black/30 backdrop-blur-sm text-white text-xs rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-xs text-gray-200">
                            {formatDate(image.date)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryItem;