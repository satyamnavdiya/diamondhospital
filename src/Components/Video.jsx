import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { X } from 'lucide-react';
import './CSS/Video.css'

const videos = [
    {
        id: 'UWt8Ah6mArM',
        title: 'Introduction',
        isShort: false,
        thumbnail: `https://img.youtube.com/vi/UWt8Ah6mArM/maxresdefault.jpg`
    },
    {
        id: 'ZGnnyIHtyEg',
        title: 'News',
        isShort: false,
        thumbnail: `https://img.youtube.com/vi/ZGnnyIHtyEg/maxresdefault.jpg`
    },
];

const shorts = [
    {
        id: 'shorts/Ov3rf3_7P2U',
        title: 'યોનિમાર્ગના ઇન્ફેકશનનો ખ્યાલ આપણને કેવી રીતે આવી શકે?',
        isShort: true,
        thumbnail: `https://img.youtube.com/vi/Ov3rf3_7P2U/maxresdefault.jpg`
    },
    {
        id: 'shorts/Wh9PG0_ExFg',
        title: 'માસિક દરમ્યાન વધારે દુઃખાવો થવાનું કારણ  ',
        isShort: true,
        thumbnail: `https://img.youtube.com/vi/Wh9PG0_ExFg/maxresdefault.jpg`
    },
    {
        id: 'shorts/5bSB3wi9Bfs',
        title: 'TYPE OF VAGINAL INFECTION',
        isShort: true,
        thumbnail: `https://img.youtube.com/vi/5bSB3wi9Bfs/maxresdefault.jpg`
    },
    {
        id: 'shorts/Tg6_IrJHjx0',
        title: 'Irregular periods pain ?',
        isShort: true,
        thumbnail: `https://img.youtube.com/vi/Tg6_IrJHjx0/maxresdefault.jpg`
    },
];

function Video() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    // const [showShort, setShowShort] = useState(false);
    const [modalOpen, setModalOpen] = useState(false)

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedVideo(null);
    }

    //closr model when clicking outside of it
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            handleCloseModal();
        }
    };


    return (
        <div className="min-h-screen w-[80%] div-center text-white pt-32 max-sm:pt-[6.5rem]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    YouTube Video Gallery
                </h1>

                {/* Regular Videos Section */}
                <section className="mb-12">
                    <h1 className='video-heading'><span className="video-gradient">Video</span></h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                                onClick={() => handleVideoClick(video)}
                            >
                                <div className="aspect-video relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-teal-400 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity">
                                        <div className="bg-red-700 rounded-full p-4 opacity-100">
                                            <svg className="w-8 h-8" fill="#fff" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Shorts Section */}
                <section>
                    <h1 className='video-heading'><span className="video-gradient">Shorts</span></h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {shorts.map((video) => (
                            <div
                                key={video.id}
                                className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                                onClick={() => handleVideoClick(video)}
                            >
                                <div className="aspect-[9/16] relative">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-teal-400 bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-50 transition-opacity">
                                        <div className="0 rounded-full p-3 z-10 opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='w-15 h-15' viewBox="0 0 48 48">
                                                <path fill="#ff0000" d="M29.103,2.631c4.217-2.198,9.438-0.597,11.658,3.577c2.22,4.173,0.6,9.337-3.617,11.534l-3.468,1.823	c2.987,0.109,5.836,1.75,7.328,4.555c2.22,4.173,0.604,9.337-3.617,11.534L18.897,45.37c-4.217,2.198-9.438,0.597-11.658-3.577	s-0.6-9.337,3.617-11.534l3.468-1.823c-2.987-0.109-5.836-1.75-7.328-4.555c-2.22-4.173-0.6-9.337,3.617-11.534	C10.612,12.346,29.103,2.631,29.103,2.631z M19.122,17.12l11.192,6.91l-11.192,6.877C19.122,30.907,19.122,17.12,19.122,17.12z"></path><path fill="#fff" d="M19.122,17.12v13.787l11.192-6.877L19.122,17.12z"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <h3 className="font-semibold text-center">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Video Popup */}
                {selectedVideo && (
                    <div className="fixed inset-0  flex items-center justify-center z-50 modal-overlay video-bg" onClick={handleOutsideClick}>
                        <div className="relative w-[80%] max-w-4xl mx-4">
                            {/* <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-5 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <X size={24} />
                            </button> */}
                            <div className={selectedVideo.isShort ? 'max-w-sm mx-auto' : 'w-full'}>
                                <VideoPlayer videoId={selectedVideo.id} isShort={selectedVideo.isShort} />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Video;