import React, { useState } from 'react';
import VideoPlayer from './VideoPlayer';
import { X } from 'lucide-react';

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
    const [showShort, setShowShort] = useState(false);
    const[modalOpen, setModalOpen] = useState(false)

    const handleVideoClick = (video) => {
        setSelectedVideo(video);
    };

    const handleCloseModal =() =>{
        setModalOpen(false);
        setSelectedVideo(null);
    }

    //closr model when clicking outside of it
    const handleOutsideClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            handleCloseModal();
        }
    };




    //youtube short
    if (showShort) {
        return (
            <>
                {/* Shorts Section */}
                <section className='min-h-screen w-[80%] div-center text-white pt-32 max-sm:pt-[6.5rem]'>
                    <h2 className="text-2xl font-semibold mb-4">Shorts</h2>
                    <button
                        onClick={() => setShowShort(false)}
                        className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800 mb-10"
                    >
                        Go to Video
                    </button>
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
                                        <div className="bg-red-600 rounded-full p-3">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
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

                {/* short Popup */}
                {selectedVideo && (
                    <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 modal-overlay" onClick={handleCloseModal}>
                        <div className="relative w-[80%] max-w-4xl mx-4" >
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-5 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <X size={24} />
                            </button>
                            <div className={selectedVideo.isShort ? 'max-w-sm mx-auto' : 'w-full'}>
                                <VideoPlayer videoId={selectedVideo.id} isShort={selectedVideo.isShort} />
                            </div>
                        </div>
                    </div>
                )}
            </>
        )
    }


    //youtube video
    return (
        <div className="min-h-screen w-[80%] div-center text-white pt-32 max-sm:pt-[6.5rem]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">
                    YouTube Video Gallery
                </h1>
                <button
                    onClick={() => setShowShort(true)}
                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-900"
                >
                    Go to Short
                </button>

                {/* Regular Videos Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Regular Videos</h2>
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
                                        <div className="bg-red-600 rounded-full p-4">
                                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
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



                {/* Video Popup */}
                {selectedVideo && (
                    <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50 modal-overlay" onClick={handleCloseModal}>
                        <div className="relative w-[80%] max-w-4xl mx-4">
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute -top-5 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <X size={24} />
                            </button>
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