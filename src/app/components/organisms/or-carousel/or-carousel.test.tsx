import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import OrCarousel from "./or-carousel";

describe("OrCarousel", () => {
  const slides = [
    { title: "Slide 1", image: "/slide1.jpg" },
    { title: "Slide 2", image: "/slide2.jpg" },
  ];

  it("should render all slides and apply correct attributes", () => {
    render(<OrCarousel slides={slides} />);

    const slide1 = screen.getByAltText("Slide 1");
    const slide2 = screen.getByAltText("Slide 2");

    expect(slide1).toBeInTheDocument();
    expect(slide2).toBeInTheDocument();
  });

  it("should have the correct aria attributes for the carousel", () => {
    render(<OrCarousel slides={slides} />);

    const carousel = screen.getByTestId("carousel");

    expect(carousel).toHaveAttribute("aria-live", "polite");
    expect(carousel).toHaveAttribute("aria-roledescription", "carousel");
  });

  it("should navigate slides when buttons are clicked", () => {
    render(<OrCarousel slides={slides} />);

    const previousButton = screen.getByLabelText("Previous slide");
    const nextButton = screen.getByLabelText("Next slide");

    fireEvent.click(nextButton);
    expect(screen.getByAltText("Slide 2")).toBeVisible();

    fireEvent.click(previousButton);
    expect(screen.getByAltText("Slide 1")).toBeVisible();
  });
});
