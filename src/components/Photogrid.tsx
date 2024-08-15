import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePexelsImages } from "../hooks/usePexelsImages";

interface PhotoGridProps {
  customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const { images, loading, error } = usePexelsImages(customerId);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Trigger animation when new images are fetched
    setKey((prevKey) => prevKey + 1);
  }, [images]);

  if (loading) return <div>Loading images...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto">
      <AnimatePresence>
        {images.map((photo, index) => (
          <motion.div
            key={`${key}-${photo.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={photo.src}
              alt={`Photo by ${photo.photographer}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <p className="text-sm text-white text-center px-2">
                Image by {photo.photographer}
              </p>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGrid;
