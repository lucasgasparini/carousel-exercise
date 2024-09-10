import axios from "axios";

type Slide = {
  title: string;
  image: string;
};

export const fetchRandomImages = async (count: number): Promise<Slide[]> => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?count=${count}&client_id=Te7LEJc7ExiDrcyZcrAI0e93PJOKmEeBSLoq01_w5rA&orientation=landscape` // move key somewhere else
    );
    return response.data.map((image: any) => ({
      title: image.alt_description || "Untitled",
      image: image.urls.regular,
    }));
  } catch (error) {
    console.error("Error fetching images from Unsplash:", error);
    return [];
  }
};
