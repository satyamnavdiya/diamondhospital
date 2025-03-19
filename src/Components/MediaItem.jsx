import React, { useRef, useEffect } from 'react';
import { Play, Image as ImageIcon } from 'lucide-react';

export function MediaItem({ item, onClick }) {
    const itemRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const img = entry.target.querySelector('img');
                        if (img && img.dataset.src) {
                            img.src = img.dataset.src;
                            observer.unobserve(entry.target);
                        }
                    }
                });
            },
            { rootMargin: '50px' }
        );

        if (itemRef.current) {
            observer.observe(itemRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={itemRef}
            className="group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
            onClick={() => onClick(item)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onClick(item);
                }
            }}
            role="button"
            tabIndex={0}
            aria-label={`View ${item.title}`}
        >
            <img 
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-200">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {item.type === 'video' ? (
                        <Play className="w-12 h-12 text-white" />
                    ) : (
                        <ImageIcon className="w-12 h-12 text-white" />
                    )}
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <p className="text-gray-200 text-sm">{item.date}</p>
            </div>
        </div>
    );
} 