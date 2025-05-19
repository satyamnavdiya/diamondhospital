import React from 'react';

const Page = ({ imageUrl, alt, isActive, onClick }) => {
  return (
    <div
      className={`absolute inset-0 transition-all duration-1200 ease-in-out cursor-pointer preserve-3d ${isActive
          ? 'opacity-100 z-10'
          : 'opacity-0 z-0 page-turn'
        }`}
      onClick={onClick}
    >
      {/* Front of the page */}
      <div className="absolute inset-0 backface-hidden">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover"
        />


      </div>

    </div>
  );
};

export default Page;