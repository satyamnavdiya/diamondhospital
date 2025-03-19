import React from 'react'
import Carousel from './Carousel'


const slides = [
    {
        url: "/diamondhospital/hospital.JPG"
    },
    {
        url: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&w=1920"
    },
    {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920"
    },
];
function Slider() {
    return (
        <div className="h-[500px] bg-gray-900 flex items-center justify-center max-sm:h-[300px] max-sm:items-top">
            <div className="w-full overflow-hidden">
                <Carousel slides={slides} />
            </div>
        </div>
    )
}

export default Slider
