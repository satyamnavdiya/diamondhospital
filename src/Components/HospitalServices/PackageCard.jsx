import React, { useState } from 'react';
import { Check } from 'lucide-react';
import BookingModal from './BookingModal';

const PackageCard = ({ pack, onModalOpen, onModalClose }) => {
    const [showModal, setShowModal] = useState(false);

    const handleModalOpen = () => {
        setShowModal(true);
        onModalOpen();
    };

    const handleModalClose = () => {
        setShowModal(false);
        onModalClose();
    };

    return (
        <>
            <div className="flex flex-col h-[500px] w-[320px] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                <div className="relative h-40 overflow-hidden">
                    <img
                        src={pack.imageUrl}
                        alt={pack.name}
                        className="w-full h-full object-cover"
                    />
                    {pack.popular && (
                        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Popular
                        </div>
                    )}
                </div>

                <div className="flex-grow p-5 flex flex-col">
                    <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-800">{pack.name}</h3>
                        <p className="text-gray-600 mt-1">{pack.description}</p>
                    </div>

                    <div className="mb-4 flex-grow">
                        <ul className="space-y-2">
                            {pack.features.slice(0, 4).map((feature, index) => (
                                <li key={index} className="flex items-start">
                                    <Check size={16} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
                            {pack.features.length > 4 && (
                                <li className="text-sm text-blue-600 font-medium mt-1">
                                    +{pack.features.length - 4} more tests
                                </li>
                            )}
                        </ul>
                    </div>

                    <div className="mt-auto">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-baseline">
                                <span className="text-3xl font-bold text-gray-900">${pack.price}</span>
                                <span className="text-gray-500 ml-1 text-sm">/package</span>
                            </div>
                        </div>

                        <button
                            onClick={handleModalOpen}
                            className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700"
                        >
                            Book Now
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <BookingModal
                    pack={pack}
                    onClose={handleModalClose}
                />
            )}
        </>
    );
};

export default PackageCard;