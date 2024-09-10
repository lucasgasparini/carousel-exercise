"use client";

import { useEffect, useState } from "react";
import { OrCarousel } from "./components/organisms";
import { fetchRandomImages } from "../../src/utils/fetchRandomImages";

const Home = () => {
  const [slides, setSlides] = useState<{ image: string; title: string }[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const images = await fetchRandomImages(3); // Loading twice
        setSlides(images);
      } catch (error) {
        console.error("Failed to fetch images:", error);
      }
    };

    loadImages();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-[800px] flex items-center justify-center">
        <OrCarousel slides={slides}></OrCarousel>
      </div>
    </main>
  );
};

export default Home;
