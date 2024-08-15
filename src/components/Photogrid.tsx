import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePexelsImages } from "../hooks/usePexelsImages";

interface PhotoGridProps {
  customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const { images, loading, error } = usePexelsImages(customerId);
  const [displayedImages, setDisplayedImages] = useState(images);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length > 0 && !loading) {
      setIsTransitioning(true);
      const transitionImages = async () => {
        for (let i = 0; i < 9; i++) {
          await new Promise((resolve) => setTimeout(resolve, 200));
          setDisplayedImages((prev) => [
            ...prev.slice(0, i),
            images[i],
            ...prev.slice(i + 1),
          ]);
        }
        setIsTransitioning(false);
      };
      transitionImages();
    }
  }, [images, loading]);

  if (error) return <div>Error loading images</div>;

  return (
    <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto overflow-hidden">
      {displayedImages.map((photo, index) => (
        <motion.div
          key={`${photo.id}-${index}`}
          initial={isTransitioning ? { opacity: 0, scale: 0.8 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-square overflow-hidden rounded-lg shadow-md"
        >
          <AnimatePresence>
            <motion.img
              key={photo.id}
              src={photo.src}
              alt={`Photo by ${photo.photographer}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-sm text-white text-center px-2">
              Image by {photo.photographer}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;
