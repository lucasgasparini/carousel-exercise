import React, { useState } from "react";
import { MlCarouselSlider } from "../../molecules";
import Image from "next/image";

type Slide = {
  title: string;
  image: string;
};

type Slider = {
  slides: Slide[];
};

const OrCarousel = ({ slides }: Slider) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const nextIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
  };

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const previousIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div
        data-testid="carousel"
        aria-atomic="true"
        aria-live="polite"
        aria-roledescription="carousel"
        className="relative flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 flex justify-center items-center"
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={800}
              height={500}
              className="object-cover rounded-lg"
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      <div className="absolute w-full flex justify-center items-center mb-4">
        <MlCarouselSlider
          prevSlide={prevSlide}
          nextSlide={nextSlide}
          buttonStyles="py-4 px-6 text-blue-500 bg-white rounded-full hover:bg-blue-100 transition"
        />
      </div>
    </div>
  );
};

export default OrCarousel;
