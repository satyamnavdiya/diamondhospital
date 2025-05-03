import React, { useState } from 'react';
import { images } from '../data/images';
import FilterBar from './FilterBar';
import MasonryGallery from './MasonryGallery';
import ImageModal from './ImageModal';
import { filterImages } from '../utils/filterImages';
import './CSS/gallery.css'

function Gallery() {
    const [filters, setFilters] = useState({
        tags: [],
        startDate: null,
        endDate: null
    });

    const [selectedImage, setSelectedImage] = useState(null);

    const filteredImages = filterImages(images, filters);

    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    const openImage = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="gallery">
            {/* Header */}
            <header>
                <div className="container mx-auto px-4 py-4">
                    <div>
                        <div>
                            <h1 className="gallery-gradient gallery-heading">Gallery</h1>
                        </div>
                        <div className="text-sm text-gray-500">
                            Showing {filteredImages.length} of {images.length} images
                        </div>
                    </div>
                </div>
            </header>

            {/* Filter Bar */}
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />

            {/* Gallery */}
            <div className="container mx-auto pb-12">
                <MasonryGallery images={filteredImages} openImage={openImage} />
            </div>

            {/* Image Modal */}
            <ImageModal image={selectedImage} onClose={closeModal} />
        </div>
    );
}

export default Gallery;