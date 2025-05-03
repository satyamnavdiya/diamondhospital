export const tagOptions = [
    'Nature',
    'Architecture',
    'Food',
    'Travel',
    'Art',
    'Fashion',
    'Technology',
    'Animals',
    'Interior',
    'Fitness'
];
function getTagById(id) {
    const num = Number(id);
    if (num <= 50) return ['Nature'];
    if (num <= 100) return ['Architecture'];
    if (num <= 150) return ['Food'];
    if (num <= 200) return ['Technology'];
    return ['Art'];
}

export const images = Array.from({ length: 233 }, (_, i) => {
    const index = i + 1;
    const paddedNumber = String(index).padStart(2, '0');

    return {
        id: String(index),
        src: `/IMG/${paddedNumber}.JPG`,
        alt: `Image ${index}`,
        tags: getTagById(index),
        date: '2024-01-01',
        width: 1200,
        height: 900
    };
});