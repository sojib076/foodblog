import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = images.length + 2; // Add 2 for the duplicated first and last images

  // Duplicate the first and last images
  const slides = [images[images.length - 1], ...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        // If we're on the last slide, reset to the first slide
        if (prevSlide === totalSlides - 1) {
          return 0;
        } else {
          return prevSlide + 1;
        }
      });
    }, 3000); // Change the duration as needed
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative overflow-hidden w-full mt-10">
      <div className="flex gap-10 transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((imageUrl, index) => (
          <div key={index} className="w-full h-full">
            <img src={imageUrl} alt={`Slide ${index}`} className="lg:w-[400px] h-full rounded-xl " />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;