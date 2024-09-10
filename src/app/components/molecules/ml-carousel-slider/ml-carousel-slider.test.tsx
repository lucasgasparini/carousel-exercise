import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MlCarouselSlider from "./ml-carousel-slider";

describe("MlCarouselSlider", () => {
  const previousSlideMock = jest.fn();
  const nextSlideMock = jest.fn();
  const buttonStyles = "custom-button-class";

  it("should render two buttons with correct aria-labels", () => {
    const { getByLabelText } = render(
      <MlCarouselSlider
        prevSlide={previousSlideMock}
        nextSlide={nextSlideMock}
        buttonStyles={buttonStyles}
      />
    );

    const prevButton = getByLabelText("Previous slide");
    const nextButton = getByLabelText("Next slide");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("should call previousSlide when the previous button is clicked", () => {
    const { getByLabelText } = render(
      <MlCarouselSlider
        prevSlide={previousSlideMock}
        nextSlide={nextSlideMock}
        buttonStyles={buttonStyles}
      />
    );

    const prevButton = getByLabelText("Previous slide");

    fireEvent.click(prevButton);

    expect(previousSlideMock).toHaveBeenCalledTimes(1);
  });

  it("should call nextSlide when the next button is clicked", () => {
    const { getByLabelText } = render(
      <MlCarouselSlider
        prevSlide={previousSlideMock}
        nextSlide={nextSlideMock}
        buttonStyles={buttonStyles}
      />
    );

    const nextButton = getByLabelText("Next slide");

    fireEvent.click(nextButton);

    expect(nextSlideMock).toHaveBeenCalledTimes(1);
  });

  it("should apply buttonStyles prop to the AtCarouselButton components", () => {
    const { getByLabelText } = render(
      <MlCarouselSlider
        prevSlide={previousSlideMock}
        nextSlide={nextSlideMock}
        buttonStyles={buttonStyles}
      />
    );

    const prevButton = getByLabelText("Previous slide");
    const nextButton = getByLabelText("Next slide");

    expect(prevButton).toHaveClass(buttonStyles);
    expect(nextButton).toHaveClass(buttonStyles);
  });
});
