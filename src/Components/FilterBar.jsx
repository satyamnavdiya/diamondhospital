import React, { useState } from 'react';
import { X,  Calendar } from 'lucide-react';

const FilterBar = ({ filters, onFilterChange }) => {
    const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
    const [isDateMenuOpen, setIsDateMenuOpen] = useState(false);

    const handleTagToggle = (tag) => {
        const newTags = filters.tags.includes(tag)
            ? filters.tags.filter(t => t !== tag)
            : [...filters.tags, tag];

        onFilterChange({ ...filters, tags: newTags });
    };

    const handleDateChange = (field, value) => {
        onFilterChange({ ...filters, [field]: value });
    };

    const clearFilters = () => {
        onFilterChange({ tags: [], startDate: null, endDate: null });
    };

    const clearTag = (tag) => {
        onFilterChange({
            ...filters,
            tags: filters.tags.filter(t => t !== tag)
        });
    };

    const clearDateRange = () => {
        onFilterChange({
            ...filters,
            startDate: null,
            endDate: null
        });
    };

    const hasActiveFilters = filters.tags.length > 0 || filters.startDate || filters.endDate;

    return (
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200 py-4 px-6">
            <div className="flex flex-wrap items-center gap-3">
                

                <div className="relative">
                    <button
                        className={`flex items-center gap-2 px-4 py-2 rounded-full border ${filters.startDate || filters.endDate ? 'border-blue-500 text-blue-500' : 'border-gray-300 hover:border-gray-400'
                            } transition-colors duration-200`}
                        onClick={() => {
                            setIsDateMenuOpen(!isDateMenuOpen);
                            setIsTagMenuOpen(false);
                        }}
                    >
                        <Calendar size={16} />
                        <span>Date Range</span>
                    </button>

                    {isDateMenuOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-20">
                            <div className="space-y-3">
                                <div>
                                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        Start Date
                                    </label>
                                    <input
                                        type="date"
                                        id="startDate"
                                        value={filters.startDate || ''}
                                        onChange={(e) => handleDateChange('startDate', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                                        End Date
                                    </label>
                                    <input
                                        type="date"
                                        id="endDate"
                                        value={filters.endDate || ''}
                                        onChange={(e) => handleDateChange('endDate', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-1 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    >
                        <X size={16} />
                        <span>Clear all</span>
                    </button>
                )}

                {/* Active filters display */}
                <div className="flex flex-wrap gap-2 ml-auto">
                    {filters.tags.map(tag => (
                        <div
                            key={tag}
                            className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                        >
                            <span>{tag}</span>
                            <button onClick={() => clearTag(tag)} className="text-blue-800 hover:text-blue-900">
                                <X size={14} />
                            </button>
                        </div>
                    ))}

                    {(filters.startDate || filters.endDate) && (
                        <div className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                            <span>
                                {filters.startDate && new Date(filters.startDate).toLocaleDateString()}
                                {filters.startDate && filters.endDate && ' - '}
                                {filters.endDate && new Date(filters.endDate).toLocaleDateString()}
                            </span>
                            <button onClick={clearDateRange} className="text-blue-800 hover:text-blue-900">
                                <X size={14} />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FilterBar;