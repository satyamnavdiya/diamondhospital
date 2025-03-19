import React, { useMemo, useState } from 'react'
import { FilterBar } from './FilterBar';
import { GalleryGrid } from './GalleryGrid';
import CircularGallery from './CircularGallery'

const sampleData = [
    {
        id: '1',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba',
        thumbnail: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=500&q=80',
        title: 'Mountain Landscape',
        caption: 'Beautiful mountain range at sunset',
        date: '2024-03-10',
        category: 'nature',
        tags: ['nature', 'landscape']
    },
    {
        id: '2',
        type: 'image',
        url: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f',
        thumbnail: 'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?w=500&q=80',
        title: 'Urban Architecture',
        caption: 'Modern city buildings',
        date: '2024-03-09',
        category: 'architecture',
        tags: ['architecture', 'urban']
    },
    {
        id: '3',
        type: 'image',
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/AaravDey.jpg/1200px-AaravDey.jpg',
        thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/AaravDey.jpg/1200px-AaravDey.jpg',
        title: 'Urban Architecture',
        caption: 'Modern city buildings',
        date: '2024-03-09',
        category: 'architecture',
        tags: ['architecture', 'urban']
    },
    {
        id: '4',
        type: 'image',
        url: 'https://www.youtube.com/watch?v=VsN-_DpsBFI',
        thumbnail: 'https://www.youtube.com/watch?v=VsN-_DpsBFI',
        title: 'Urban Architecture',
        caption: 'Modern city buildings',
        date: '2024-03-09',
        category: 'architecture',
        tags: ['architecture', 'urban']
    },

];

const initialFilters = {
    mediaType: 'all',
    dateRange: {
        start: '',
        end: '',
    },
    categories: [],
    tags: [],
};

function Gallery() {

    const [filters, setFilters] = useState(initialFilters);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const filteredItems = useMemo(() => {
        return sampleData.filter((item) => {
            // Media type filter
            if (filters.mediaType !== 'all' && item.type !== filters.mediaType) {
                return false;
            }

            // Date range filter
            if (filters.dateRange.start && item.date < filters.dateRange.start) {
                return false;
            }
            if (filters.dateRange.end && item.date > filters.dateRange.end) {
                return false;
            }

            // Tags filter
            if (
                filters.tags.length > 0 &&
                !filters.tags.some((tag) => item.tags.includes(tag))
            ) {
                return false;
            }

            return true;
        });
    }, [filters]);

    const handleItemClick = (item) => {
        const index = filteredItems.findIndex((i) => i.id === item.id);
        setCurrentIndex(index);
        setSelectedItem(item);
    };

    const handlePrevious = () => {
        const newIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
        setCurrentIndex(newIndex);
        setSelectedItem(filteredItems[newIndex]);
    };

    const handleNext = () => {
        const newIndex = (currentIndex + 1) % filteredItems.length;
        setCurrentIndex(newIndex);
        setSelectedItem(filteredItems[newIndex]);
    };

    return (
        <div className="min-h-screen pt-36 max-sm:pt-[6.5rem]">
            <div className="max-w-7xl mx-auto py-8">
                <FilterBar filters={filters} onFilterChange={setFilters} />

                {filteredItems.length === 0 ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No items match your filters</p>
                    </div>
                ) : (
                    <GalleryGrid items={filteredItems} onItemClick={handleItemClick} />
                )}

                <CircularGallery
                    item={selectedItem}
                    onClose={() => setSelectedItem(null)}
                    onPrevious={handlePrevious}
                    onNext={handleNext}
                />
            </div>
        </div>

    )
}

export default Gallery
