import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ image, onClose }) => {


    if (!image) return null;

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <div className="fixed mt-[6rem] inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
            <div
                className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-4 right-4 z-10 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-colors"
                    onClick={onClose}
                >
                    <X size={20} />
                </button>

                <div className="w-full max-h-[60vh] bg-gray-100 flex items-center justify-center">
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto  object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageModal;