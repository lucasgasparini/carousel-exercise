import React from "react";
import { AtCarouselButton } from "../../atoms";

type MlCarouselSliderProps = {
  prevSlide: () => void;
  nextSlide: () => void;
  buttonStyles: string;
};

const MlCarouselSlider = ({
  prevSlide,
  nextSlide,
  buttonStyles,
}: MlCarouselSliderProps) => {
  return (
    <div className="flex justify-center space-x-4 mt-5">
      <AtCarouselButton
        onClick={prevSlide}
        className={buttonStyles}
        ariaLabel="Previous slide"
      >
        Previous
      </AtCarouselButton>

      <AtCarouselButton
        onClick={nextSlide}
        className={buttonStyles}
        ariaLabel="Next slide"
      >
        Next
      </AtCarouselButton>
    </div>
  );
};

export default MlCarouselSlider;
