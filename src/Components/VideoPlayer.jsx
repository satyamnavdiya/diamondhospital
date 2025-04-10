import React from 'react';

const VideoPlayer = ({ videoId, isShort }) => {
  const videoIdClean = videoId.replace('shorts/', '');
  
  return (
    <div className="relative w-full overflow-hidden" style={{ paddingTop: isShort ? '177.77%' : '56.25%' }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoIdClean}?autoplay=1&loop=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPlayer;