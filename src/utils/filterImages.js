export const filterImages = (images, filters) => {
    return images.filter(image => {
        // Filter by tags if any are selected
        if (filters.tags.length > 0 && !filters.tags.some(tag => image.tags.includes(tag))) {
            return false;
        }

        // Filter by date range
        const imageDate = new Date(image.date);

        if (filters.startDate) {
            const startDate = new Date(filters.startDate);
            if (imageDate < startDate) {
                return false;
            }
        }

        if (filters.endDate) {
            const endDate = new Date(filters.endDate);
            // Add one day to include the end date fully
            endDate.setDate(endDate.getDate() + 1);
            if (imageDate > endDate) {
                return false;
            }
        }

        return true;
    });
};