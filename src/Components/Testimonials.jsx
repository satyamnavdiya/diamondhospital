import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, X, Star } from 'lucide-react';

const SAMPLE_REVIEWS = [
    {
        id: '1',
        type: 'text',
        customerName: 'Sarah Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        rating: 5,
        content: 'Absolutely amazing product! The quality exceeded my expectations and the customer service was outstanding.',
        date: '2024-03-15'
    },
    {
        id: '2',
        type: 'text',
        customerName: 'Michael Chen',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        rating: 4,
        content: 'Very satisfied with my purchase. Would definitely recommend to others looking for a reliable solution.',
        date: '2024-03-14'
    },
    {
        id: '5',
        type: 'text',
        customerName: 'Sarah Johnson',
        avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        rating: 5,
        content: 'Absolutely amazing product! The quality exceeded my expectations and the customer service was outstanding.',
        date: '2024-03-15'
    },
    {
        id: '4',
        type: 'text',
        customerName: 'Michael Chen',
        avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
        rating: 4,
        content: 'Very satisfied with my purchase. Would definitely recommend to others looking for a reliable solution.',
        date: '2024-03-14'
    },
    {
        id: '3',
        type: 'video',
        customerName: 'Emily Rodriguez',
        avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        content: 'Video review of the product features',
        date: '2024-03-13',
        videoUrl: 'https://example.com/video1.mp4',
        thumbnailUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3'
    }
];

const Testimonials = () => {
    const [state, setState] = useState({
        currentSlide: 0,
        isVideoModalOpen: false,
        activeVideoUrl: null,
        reviewType: 'text'
    });

    const sliderRef = useRef(null);
    const modalRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const filteredReviews = SAMPLE_REVIEWS.filter(review => review.type === state.reviewType);
    const totalSlides = isMobile ? filteredReviews.length : Math.ceil(filteredReviews.length / 2);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && state.isVideoModalOpen) {
                closeVideoModal();
            }
            if (e.key === 'ArrowLeft') {
                navigateSlide('prev');
            }
            if (e.key === 'ArrowRight') {
                navigateSlide('next');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [state.isVideoModalOpen]);

    const navigateSlide = (direction) => {
        setState(prev => ({
            ...prev,
            currentSlide: direction === 'prev'
                ? Math.max(0, prev.currentSlide - 1)
                : Math.min(totalSlides - 1, prev.currentSlide + 1)
        }));
    };

    const openVideoModal = (videoUrl) => {
        setState(prev => ({
            ...prev,
            isVideoModalOpen: true,
            activeVideoUrl: videoUrl
        }));
    };

    const closeVideoModal = () => {
        setState(prev => ({
            ...prev,
            isVideoModalOpen: false,
            activeVideoUrl: null
        }));
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }).map((_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    const renderTextReview = (review) => (
        <div
            className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg w-full"
            role="article"
            aria-label={`Review by ${review.customerName}`}
        >
            <div className="flex items-center gap-4 mb-4">
                <img
                    src={review.avatarUrl}
                    alt={review.customerName}
                    className="w-[60px] h-[60px] rounded-full object-cover"
                    loading="lazy"
                />
                <div>
                    <h3 className="font-bold text-lg">{review.customerName}</h3>
                    {review.rating && (
                        <div className="flex gap-1 mt-1" aria-label={`Rated ${review.rating} out of 5 stars`}>
                            {renderStars(review.rating)}
                        </div>
                    )}
                </div>
            </div>
            <p className="text-gray-700 line-clamp-3 mb-2">{review.content}</p>
            <time className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</time>
        </div>
    );

    const renderVideoReview = (review) => (
        <div
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group w-full"
            onClick={() => review.videoUrl && openVideoModal(review.videoUrl)}
            role="button"
            aria-label={`Play video review by ${review.customerName}`}
            tabIndex={0}
            onKeyPress={(e) => e.key === 'Enter' && review.videoUrl && openVideoModal(review.videoUrl)}
        >
            <img
                src={review.thumbnailUrl}
                alt={`${review.customerName}'s video review thumbnail`}
                className="w-full h-full object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
                <Play className="w-16 h-16 text-white" />
            </div>
        </div>
    );

    const getVisibleReviews = () => {
        if (isMobile) {
            return [filteredReviews[state.currentSlide]];
        }
        const startIndex = state.currentSlide * 2;
        return filteredReviews.slice(startIndex, startIndex + 2);
    };

    return (
        <section className="review-slider w-full max-w-7xl mx-auto px-4 py-8" aria-label="Customer Reviews">
            <div className="flex justify-center gap-4 mb-8">
                <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${state.reviewType === 'text'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    onClick={() => setState(prev => ({ ...prev, reviewType: 'text', currentSlide: 0 }))}
                    aria-pressed={state.reviewType === 'text'}
                >
                    Text Reviews
                </button>
                <button
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${state.reviewType === 'video'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    onClick={() => setState(prev => ({ ...prev, reviewType: 'video', currentSlide: 0 }))}
                    aria-pressed={state.reviewType === 'video'}
                >
                    Video Reviews
                </button>
            </div>

            <div className="relative min-h-[250px] md:min-h-[280px] lg:min-h-[300px]">
                <div
                    ref={sliderRef}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-6 transition-all duration-300"
                    style={{
                        transform: `translateX(-${state.currentSlide * (isMobile ? 100 : 50)}%)`,
                    }}
                >
                    {getVisibleReviews().map(review => (
                        <div key={review.id} className="w-full">
                            {review.type === 'text' ? renderTextReview(review) : renderVideoReview(review)}
                        </div>
                    ))}
                </div>

                <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-300"
                    onClick={() => navigateSlide('prev')}
                    disabled={state.currentSlide === 0}
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full shadow-md transition-all duration-300"
                    onClick={() => navigateSlide('next')}
                    disabled={state.currentSlide === totalSlides - 1}
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${state.currentSlide === index ? 'bg-blue-600 w-4' : 'bg-gray-300'
                                }`}
                            onClick={() => setState(prev => ({ ...prev, currentSlide: index }))}
                            aria-label={`Go to slide ${index + 1}`}
                            aria-current={state.currentSlide === index}
                        />
                    ))}
                </div>
            </div>

            {state.isVideoModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="video-modal-title"
                    ref={modalRef}
                    onClick={(e) => e.target === modalRef.current && closeVideoModal()}
                >
                    <div className="relative w-full max-w-4xl mx-4">
                        <button
                            className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors duration-300"
                            onClick={closeVideoModal}
                            aria-label="Close video"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="aspect-video">
                            {state.activeVideoUrl && (
                                <video
                                    src={state.activeVideoUrl}
                                    controls
                                    className="w-full h-full rounded-lg"
                                    autoPlay
                                >
                                    Your browser does not support the video tag.
                                </video>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Testimonials;