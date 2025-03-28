import React, { useState, useEffect, useCallback } from 'react';
import './CSS/Testimonial.css'
import { ChevronLeft, ChevronRight, MessageSquare, Video } from 'lucide-react';

const reviews = [
    {
        id: 1,
        name: "Sarah Johnson",
        date: "March 15, 2024",
        rating: 5,
        content: "The care I received at this hospital was exceptional. The staff was incredibly attentive and professional.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
        type: "text"
    },
    {
        id: 2,
        name: "Michael Chen",
        date: "March 14, 2024",
        rating: 5,
        content: "State-of-the-art facilities and compassionate care. I couldn't have asked for better treatment.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
        type: "text"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        date: "March 13, 2024",
        rating: 4,
        content: "The doctors took time to explain everything thoroughly. Very satisfied with my experience.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
        type: "text"
    },
    {
        id: 4,
        name: "David Thompson",
        date: "March 12, 2024",
        rating: 5,
        content: "From admission to discharge, everything was handled professionally. Highly recommend!",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
        type: "text"
    },
    {
        id: 5,
        name: "Lisa Martinez",
        date: "March 10, 2024",
        rating: 5,
        type: "video",
        content: "Amazing experience with the pediatric department",
        image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=150",
        videoUrl: "https://example.com/video1.mp4"
    },
    {
        id: 6,
        name: "James Wilson",
        date: "March 8, 2024",
        rating: 5,
        type: "video",
        content: "Outstanding cardiac care unit",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
        videoUrl: "https://example.com/video2.mp4"
    }
];


function Testimonials() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeType, setActiveType] = useState('text');
    const [isHovered, setIsHovered] = useState(false);

    const filteredReviews = reviews.filter(review => review.type === activeType);
    const totalSlides = Math.ceil(filteredReviews.length / 2);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const renderStars = (rating) => {
        return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    };

    useEffect(() => {
        let intervalId;
        if (!isHovered) {
            intervalId = setInterval(() => {
                nextSlide();
            }, 3000); // Change slide every 3 seconds
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isHovered, nextSlide]);

    return (

        <div>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <h1 className='achievement-heading pt-2'><span className="achi-gradient">Patient Reviews</span></h1>


                {/* Toggle Buttons */}
                <div className="flex justify-center gap-4 mb-12">
                    <button
                        onClick={() => {
                            setActiveType('text');
                            setCurrentSlide(0);
                        }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
              ${activeType === 'text'
                                ? 'bg-teal-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-teal-300'}`}
                    >
                        <MessageSquare size={20} />
                        Text Reviews
                    </button>
                    <button
                        onClick={() => {
                            setActiveType('video');
                            setCurrentSlide(0);
                        }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors
              ${activeType === 'video'
                                ? 'bg-teal-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    >
                        <Video size={20} />
                        Video Reviews
                    </button>
                </div>

                {/* Reviews Slider */}
                <div className="relative">
                    <div className="overflow-hidden w-[80%] div-center">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0 flex gap-8">
                                    {filteredReviews.slice(slideIndex * 2, slideIndex * 2 + 2).map((review) => (
                                        <div key={review.id}
                                            className="flex-1 justify-around bg-white rounded-xl shadow-lg p-6 transform transition-transform hover:scale-105? mb-5 ml-10">
                                            <div className="flex items-center gap-4 mb-4">
                                                <img
                                                    src={review.image}
                                                    alt={review.name}
                                                    className="w-12 h-12 rounded-full object-cover"
                                                />
                                                <div>
                                                    <h3 className="font-semibold text-gray-900">{review.name}</h3>
                                                    <p className="text-sm text-gray-500">{review.date}</p>
                                                </div>
                                            </div>
                                            <div className="text-yellow-400 mb-2">
                                                {renderStars(review.rating)}
                                            </div>
                                            <p className="text-gray-700">{review.content}</p>
                                            {review.type === 'video' && (
                                                <div className="mt-4 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                                                    <Video className="text-blue-600" />
                                                    <span className="ml-2 text-blue-600">Watch Video Review</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Dots Navigation */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-colors
                  ${currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
