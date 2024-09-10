import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import AtCarouselButton from "./at-carousel-button";

describe("AtCarouselButton", () => {
  const handleClick = jest.fn();

  it("should render button with text and aria-label", () => {
    render(
      <AtCarouselButton onClick={handleClick} ariaLabel="Sample button">
        Click Me
      </AtCarouselButton>
    );

    const button = screen.getByRole("button", { name: "Sample button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Click Me");
  });

  it("should call onClick handler when button is clicked", () => {
    render(
      <AtCarouselButton onClick={handleClick} ariaLabel="Click me">
        Click Me
      </AtCarouselButton>
    );

    const button = screen.getByRole("button", { name: "Click me" });
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("should have aria-disabled attribute when disabled", () => {
    render(
      <AtCarouselButton
        onClick={handleClick}
        ariaLabel="Disabled button"
        disabled
      >
        Click Me
      </AtCarouselButton>
    );

    const button = screen.getByRole("button", { name: "Disabled button" });
    expect(button).toHaveAttribute("aria-disabled", "true");
  });

  it("should apply additional buttonProps", () => {
    render(
      <AtCarouselButton
        onClick={handleClick}
        ariaLabel="Custom button"
        buttonProps={{ title: "Custom Title", id: "custom-id" }}
      >
        Click Me
      </AtCarouselButton>
    );

    const button = screen.getByRole("button", { name: "Custom button" });
    expect(button).toHaveAttribute("title", "Custom Title");
    expect(button).toHaveAttribute("id", "custom-id");
  });
});
