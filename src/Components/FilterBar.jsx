import React from 'react';
import { Filter, Calendar, Tag } from 'lucide-react';

export function FilterBar({ filters, onFilterChange }) {
    const handleMediaTypeChange = (e) => {
        onFilterChange({
            ...filters,
            mediaType: e.target.value,
        });
    };

    const handleDateChange = (field) => (e) => {
        onFilterChange({
            ...filters,
            dateRange: {
                ...filters.dateRange,
                [field]: e.target.value,
            },
        });
    };

    return (
        <div className="sticky top-0 z-10 bg-white border-red-950 border-2 shadow-md p-4 mb-6 rounded-lg w-[80%] div-center max-sm:relative">
            <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-red-700" />
                    <select
                        value={filters.mediaType}
                        onChange={handleMediaTypeChange}
                        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 overflow-hidden"
                        aria-label="Filter by media type"

                    >
                        <option value="all">All Media</option>
                        <option value="image">Images</option>
                        <option value="video">Videos</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-red-700" />
                    <div className="flex gap-2 max-sm:block">
                        <input
                            type="date"
                            value={filters.dateRange.start}
                            onChange={handleDateChange('start')}
                            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            aria-label="Start date"
                        />
                        <br  className='hidden max-sm:block' />
                        <span className="text-gray-500">to</span> 
                        <br className='hidden max-sm:block' />
                        <input
                            type="date"
                            value={filters.dateRange.end}
                            onChange={handleDateChange('end')}
                            className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            aria-label="End date"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <Tag className="text-red-700" />
                    <select
                        value={filters.tags}
                        onChange={(e) => {
                            const tags = Array.from(e.target.selectedOptions, (option) => option.value);
                            onFilterChange({ ...filters, tags });
                        }}
                        className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        aria-label="Filter by tags"
                    >
                        <option value="nature">Nature</option>
                        <option value="architecture">Architecture</option>
                        <option value="people">People</option>
                        <option value="travel">Travel</option>
                    </select>
                </div>
            </div>
        </div>
    );
}