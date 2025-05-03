import React from 'react'
import Carousel from './Carousel'
import '../CSS/Homapage.css'


const slides = [
    {
        url: "/IMG/cover1.png"
    },
    {
        url: "/IMG/cover2.png"
    },
    {
        url: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&w=1920"
    },
];
function Slider() {
    return (
        <div className="sider-div bg-gray-900 flex items-center justify-center">
            <div className="w-full object-cover overflow-hidden">
                <Carousel slides={slides} />
            </div>
        </div>
    )
}

export default Slider
