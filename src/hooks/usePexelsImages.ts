import { useState, useEffect } from 'react';
import { createClient, Photos, ErrorResponse, PhotosWithTotalResults } from 'pexels';

const PEXELS_API_KEY = process.env.REACT_APP_PEXELS_API_KEY;

if (!PEXELS_API_KEY) {
    throw new Error('REACT_APP_PEXELS_API_KEY is not defined in the environment variables');
}

const client = createClient(PEXELS_API_KEY);

interface SimplePhoto {
    id: number;
    src: string;
    photographer: string;
}

export const usePexelsImages = (customerId: number) => {
    const [images, setImages] = useState<SimplePhoto[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const randomPage = Math.floor(Math.random() * 10) + 1; // Random page between 1 and 10
                const result = await client.photos.search({
                    query: 'nature',
                    per_page: 9,
                    page: randomPage,
                    seed: customerId.toString() // Use customerId as seed for consistent but different results per user
                });

                if ('photos' in result) {
                    const photosResult = result as PhotosWithTotalResults;
                    const simplePhotos = photosResult.photos.map(photo => ({
                        id: photo.id,
                        src: photo.src.large, // Use larger image size
                        photographer: photo.photographer
                    }));
                    setImages(simplePhotos);
                } else {
                    throw new Error('Failed to fetch images');
                }

                setLoading(false);
            } catch (err) {
                setError('Failed to fetch images');
                setLoading(false);
            }
        };

        fetchImages();
        const interval = setInterval(fetchImages, 10000); // Fetch new images every 10 seconds

        return () => clearInterval(interval);
    }, [customerId]);

    return { images, loading, error };
};