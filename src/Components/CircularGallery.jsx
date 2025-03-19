import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

function CircularGallery({ item, onClose, onPrevious, onNext }) {
    const handleKeyDown = useCallback(
        (e) => {
            switch (e.key) {
                case 'Escape':
                    onClose();
                    break;
                case 'ArrowLeft':
                    onPrevious();
                    break;
                case 'ArrowRight':
                    onNext();
                    break;
            }
        },
        [onClose, onPrevious, onNext]
    );

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    if (!item) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full"
                aria-label="Close lightbox"
            >
                <X className="w-6 h-6" />
            </button>

            <button
                onClick={onPrevious}
                className="absolute left-4 text-white p-2 hover:bg-white/10 rounded-full"
                aria-label="Previous image"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>

            <button
                onClick={onNext}
                className="absolute right-4 text-white p-2 hover:bg-white/10 rounded-full"
                aria-label="Next image"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="relative">
                    {item.type === 'video' ? (
                        <video
                            src={item.url}
                            controls
                            className="max-h-[80vh] mx-auto"
                            autoPlay
                        />
                    ) : (
                        <img
                            src={item.url}
                            alt={item.title}
                            className="max-h-[80vh] mx-auto"
                        />
                    )}
                </div>

                <div className="mt-4 text-white">
                    <h2 id="lightbox-title" className="text-xl font-semibold">
                        {item.title}
                    </h2>
                    <p className="mt-2 text-gray-300">{item.caption}</p>
                    <p className="mt-1 text-sm text-gray-400">{item.date}</p>
                </div>
            </div>
        </div>
    );
}

export default CircularGallery
