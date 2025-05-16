
export const images = Array.from({ length: 22 }, (_, i) => {
    const index = i + 1;
    const paddedNumber = String(index).padStart(2, '0');

    return {
        id: String(index),
        src: `/IMG/${paddedNumber}.JPG`,
        alt: `Image ${index}`,
        date: '2024-01-01',
        width: 1200,
        height: 900
    };
});