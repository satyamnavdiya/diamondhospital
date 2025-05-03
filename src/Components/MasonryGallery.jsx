import React, { useState, useEffect } from 'react';
import GalleryItem from './GalleryItem';

const MasonryGallery = ({ images, openImage }) => {
    const [columns, setColumns] = useState(4);

    // Adjust column count based on viewport width
    useEffect(() => {
        const updateColumns = () => {
            if (window.innerWidth < 640) {
                setColumns(1);
            } else if (window.innerWidth < 768) {
                setColumns(2);
            } else if (window.innerWidth < 1024) {
                setColumns(3);
            } else {
                setColumns(4);
            }
        };

        updateColumns();
        window.addEventListener('resize', updateColumns);
        return () => window.removeEventListener('resize', updateColumns);
    }, []);

    // Create column arrays
    const createColumnArrays = () => {
        const columnArrays = Array.from({ length: columns }, () => []);

        images.forEach((image, index) => {
            const columnIndex = index % columns;
            columnArrays[columnIndex].push(image);
        });

        return columnArrays;
    };

    const columnArrays = createColumnArrays();

    if (images.length === 0) {
        return (
            <div className="h-64 flex items-center justify-center text-gray-500">
                <p>No images match your filters. Try adjusting your criteria.</p>
            </div>
        );
    }

    return (
        <div className="px-4 pt-8">
            <div className="flex gap-4">
                {columnArrays.map((column, columnIndex) => (
                    <div key={columnIndex} className="flex-1 flex flex-col">
                        {column.map((image) => (
                            <GalleryItem
                                key={image.id}
                                image={image}
                                onClick={openImage}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MasonryGallery;