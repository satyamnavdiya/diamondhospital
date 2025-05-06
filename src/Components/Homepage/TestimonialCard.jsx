import React from "react";
import { Star } from "lucide-react";
import '../CSS/Testimonial.css'

const TestimonialCard = ({ review, showVideo = false }) => {
    const renderStars = (rating) => {
        return Array(5)
            .fill(0)
            .map((_, i) => (
                <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                />
            ));
    };

    const renderContent = () => {
        if (review.type === "text" || !showVideo) {
            const textReview = review;
            return (
                <div className="flex flex-col h-full max-sm:h-[5rem]">
                    <div className="mb-4 flex flex-row gap-1">{renderStars(review.rating)}</div>
                    <blockquote className="text-gray-700 italic mb-1 flex-grow text-[20px] max-sm:text-[12px] content-text">
                        "{textReview.content}"
                    </blockquote>
                    <div className="text-sm text-gray-500 max-sm:text-[12px]">
                        {new Date(textReview.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </div>
                </div>
            );
        } else {
            const videoReview = review;
            return (
                <div className="flex flex-col h-full">
                    <div className="mb-4 flex flex-row gap-1">{renderStars(review.rating)}</div>
                    <div className="aspect-video w-full h-[100%] mb-4 bg-gray-100 rounded-lg shadow-md">
                        <iframe
                            src={videoReview.videoUrl}
                            title={`Video review by ${videoReview.author}`}
                            className="w-full h-[100%] pb-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="text-sm text-gray-500 mt-2">
                        {new Date(videoReview.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                        })}
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="h-[100%] bg-white rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-6 flex flex-col h-[50%]">
                {renderContent()}
            </div>
            <div className="flex items-center gap-4 p-6 max-sm:pt-0 max-sm:pb-15 max-sm:mt-15 h-[50%] max-[991px]:mt-5 max-[991px]:pb-0 mt-5">
                <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-12 h-12 rounded-full object-cover shadow-sm"
                />
                <div>
                    <h4 className="font-medium text-primary max-sm:text-[12px]">{review.author}</h4>
                    {review.type === "text" && review.position && (
                        <p className="text-sm text-gray-500 max-sm:text-[12px]">{review.position}</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
