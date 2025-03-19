import React from 'react';
import { MediaItem } from './MediaItem';
export function GalleryGrid({ items, onItemClick }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {items.map((item) => (
                <MediaItem
                    key={item.id}
                    item={item}
                    onClick={onItemClick}
                />
            ))}
        </div>
    );
}