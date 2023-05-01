import React, { useEffect, useState } from "react";
import "./ImageSlider.css";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      src: "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      alt: "Image 1",
    },
    {
      src: "https://thumbs.dreamstime.com/b/wild-flowers-plant-summer-autumn-nature-background-banner-website-55976971.jpg",
      alt: "Image 2",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/001/984/880/original/abstract-colorful-geometric-overlapping-background-and-texture-free-vector.jpg",
      alt: "Image 3",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, images.length]);

  const handleClickPrev = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const handleClickNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.alt}
          className={index === currentIndex ? "active" : ""}
        />
      ))}
      <div className="slider-nav">
        <button className="prev" onClick={handleClickPrev}>
          &#10094;
        </button>
        <button className="next" onClick={handleClickNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
