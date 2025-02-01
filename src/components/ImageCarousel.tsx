"use client";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlers = useSwipeable({
    onSwipedLeft: goToNext,
    onSwipedRight: goToPrevious,
    trackMouse: true,
  });

  return (
    <div className="relative w-full max-w-2xl mb-6" {...handlers}>
      {/* Image */}
      <img
        src={images[currentImageIndex]}
        alt="Room Design"
        className="w-full h-96 object-cover rounded-lg shadow-lg"
      />

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full sm:block hidden" onClick={goToPrevious}>
        &#8592;
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-white bg-black bg-opacity-50 p-2 rounded-full sm:block hidden" onClick={goToNext}>
        &#8594;
      </div>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out hover:scale-105 mt-4 block mx-auto"
      >
        Explore Next Design
      </button>
    </div>
  );
};

export default ImageCarousel;
