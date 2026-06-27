export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  size: 'landscape' | 'portrait' | 'square';
  hasImage: boolean;
  imageKey?: string;
}

export const galleryCategories = ['सभी', 'सेवा', 'किसान', 'बैठक', 'पर्यावरण', 'जनआंदोलन', 'समारोह'];

const sizes: Array<'landscape' | 'portrait' | 'square'> = ['landscape', 'portrait', 'square'];
const categories = ['सेवा', 'किसान', 'बैठक', 'पर्यावरण', 'जनआंदोलन', 'समारोह'];

const realImages = [
  { id: 'g-real-1', title: 'भारतीय किसान संघ जिला बैठक', category: 'बैठक', size: 'landscape' as const, hasImage: true, imageKey: 'news-kisan-baithak-1' },
  { id: 'g-real-2', title: 'हमीनपुर किसान बैठक', category: 'बैठक', size: 'landscape' as const, hasImage: true, imageKey: 'news-kisan-baithak-2' },
];

const placeholders: GalleryItem[] = Array.from({ length: 42 }, (_, i) => ({
  id: `g-${i + 1}`,
  title: `गैलरी छवि ${i + 1}`,
  category: categories[i % categories.length],
  size: sizes[i % sizes.length],
  hasImage: false,
}));

export const galleryItems: GalleryItem[] = [...realImages, ...placeholders];
