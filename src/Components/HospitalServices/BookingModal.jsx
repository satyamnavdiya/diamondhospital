import React from 'react';
import { X, Check } from 'lucide-react';

const BookingModal = ({ pack, onClose }) => {
    return (
        <div className="w-[60%] h-[60vh] border-2 border-red-800 mx-auto my-0 relative">
            <div className="w-[100%] h-[60vh] overflow-auto">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                    <X size={24} />
                </button>
                <img src={pack.imageUrl} alt="" />
                {/* <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{pack.name}</h2>
                    <p className="text-gray-600">{pack.description}</p>
                </div>

                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Package Details</h3>
                    <ul className="space-y-3">
                        {pack.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span className="text-gray-700">{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-t pt-4">
                    <div className="flex items-baseline mb-4">
                        <span className="text-3xl font-bold text-gray-900">${pack.price}</span>
                        <span className="text-gray-500 ml-2">/package</span>
                    </div>

                    <button
                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700"
                        onClick={() => {
                            alert('Booking functionality will be implemented here');
                            onClose();
                        }}
                    >
                        Confirm Booking
                    </button>
                </div> */}

            </div>
        </div>
    );
};

export default BookingModal;