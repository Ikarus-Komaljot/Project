'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function ImageGallery() {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(5); // Number of images to initially display

  useEffect(() => {
    // Fetch image URLs from your FastAPI endpoint
    axios.get(process.env.NEXT_PUBLIC_IMAGES_KEY).then((response) => {
      setImages(response.data.images);
    });
  }, []);

  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration:5 } },
  };
  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 5);
  };
  return (
    
    <div className="bg-black p-4 font-bold font-sans text-center text-3xl text-white">
     
      <motion.h2
        className="text-4xl font-semibold mb-4"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      
      >
        Image Gallery
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-11 ">
        {images.slice(0, visibleImages).map((image, index) => (
          <motion.div
            key={index}
            className="p-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <img
              src={image}
              alt={`Image ${index}`}
              className="w-full h-auto rounded-lg shadow-lg  hover:shadow-md hover:shadow-gray-400"
            />
          </motion.div>
        ))}
      </div>
      {visibleImages < images.length && (
        <button
          className="bg-[#24d2deb6] hover:bg-[#24d2de90] text-white font-bold py-2 px-4 mt-4 rounded"
          onClick={loadMoreImages}
        >
          Show More
        </button>
      )}
      <hr className=" mt-11 border-2"/>
    </div>
  );
}

export default ImageGallery;



