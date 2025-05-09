import React, { useState } from 'react';
import { X, Check, PhoneCall } from 'lucide-react';
import "../CSS/Specialities.css"


const InfiniteSlider = ({ packages }) => {
    const [activePackageIndex, setActivePackageIndex] = useState(null);

    const handleModalOpen = (index) => setActivePackageIndex(index);
    const handleModalClose = () => setActivePackageIndex(null);

    return (
        <div className="relative w-[80%] mx-auto my-0 h-auto">
            <div
                className="flex justify-around flex-wrap gap-6 div-center"
            >
                {packages.map((pack, index) => (
                    <div key={`${pack.name}-${index}`}>
                        <div className="flex flex-col min-h-[35vh] h-[45vh] max-h-[45vh] max-w-[320px] bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1.5 border-[1px] border-teal-600 rounded-xl">
                            <div className="flex-grow p-5 flex flex-col">
                                <div className="mb-4 text-center">
                                    <h3 className="text-xl font-bold text-teal-800 p-2">{pack.name}</h3>
                                </div>

                                <div className="mb-4 flex-grow h-[17vh]">
                                    <ul className="space-y-2">
                                        {pack.features.slice(0, 4).map((feature, i) => (
                                            <li key={i} className="flex items-start">
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
                                            <span className="text-3xl font-bold text-gray-900">₹ {pack.price}</span>
                                            <span className="text-gray-500 ml-1 text-sm">/package</span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => handleModalOpen(index)}
                                        className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium transition-colors duration-300 hover:bg-blue-700"
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Modal */}
                        {activePackageIndex === index && (
                            <div
                                className="fixed  inset-0 z-50 overflow-y-auto modal-overlay bg-black/50 backdrop-blur-sm flex items-center justify-center p-4  pack-details"
                                onClick={(e) => e.target.classList.contains('modal-overlay') && handleModalClose()}
                            >
                                <div className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[80vh] min-h-[50vh] overflow-auto relative">
                                    <button
                                        onClick={handleModalClose}
                                        className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                                    >
                                        <X size={24} />
                                    </button>
                                    <div className="mt-1">
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">{pack.name}</h2>
                                        <p className="text-gray-600">{pack.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Package Details</h3>
                                        <ul className="space-y-3">
                                            {pack.features.map((feature, i) => (
                                                <li key={i} className="flex items-start">
                                                    <Check size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="border-t pt-4">
                                        <div className="flex items-baseline mb-4">
                                            <span className="text-3xl font-bold text-gray-900">₹ {pack.price}</span>
                                            <span className="text-gray-500 ml-2">/package</span>
                                        </div>

                                    </div>
                                    <div className='font-guj flex justify-between flex-wrap pack-contect'>
                                        <div className='bg-[#000bff] font-semibold text-white text-2xl p-3 rounded-2xl text-center'>
                                            <p>ઘરે બેઠા સેમ્પલ કલેક્શન માટે</p>
                                            <p className='text-[1rem] text-[#74acbd]'>(અગાઉથી રજીસ્ટ્રેશન કરવું જરૂરી છે.)</p>
                                        </div>
                                        <div className='bg-[#006700] flex items-center p-3 justify-center gap-4 text-center text-2xl text-white rounded-2xl'> <span><PhoneCall className='inline' size={24} />  95865 58887</span></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;
