import React from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-5xl mx-auto">
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
        >
          <X className="w-8 h-8" />
        </button>
        <div className="relative pt-[56.25%]">
          <video
            src={videoUrl}
            className="absolute inset-0 w-full h-full rounded-lg"
            controls
            autoPlay
          />
        </div>
      </div>
    </div>
  );
}

export default VideoModal;