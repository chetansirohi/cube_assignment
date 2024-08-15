import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Photo } from "../types";
import { fetchPhotos } from "../lib/utils";

interface PhotoGridProps {
  customerId: number;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ customerId }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const loadPhotos = async () => {
      const newPhotos = await fetchPhotos();
      setPhotos(newPhotos);
    };

    loadPhotos();
    const interval = setInterval(loadPhotos, 10000);

    return () => clearInterval(interval);
  }, [customerId]);

  if (photos.length === 0) return <div>Loading photos...</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fade-in"
        >
          <img
            src={photo.url}
            alt={`Photo ${photo.id}`}
            className="w-full h-full object-cover rounded-md"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;
