import React, { useEffect, useState, useRef } from "react";
import { carouselItems } from "../../constants";

const Carousel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  // Observe visibility using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={carouselRef} className="w-full rounded-xl overflow-hidden group">
      <div
        className={`flex items-center ${
          isVisible ? "animate-scroll" : ""
        } transition-all`}
      >
        {carouselItems.concat(carouselItems).map((item, index) => (
          <div
            key={index}
            className="relative min-w-[250px] max-w-xs rounded-xl overflow-hidden shadow-lg mx-2"
          >
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              className="w-full h-72 object-cover object-center"
            />
            <div className="absolute size-full max-h-[5rem] bottom-0 left-0 bg-gradient-to-t from-black via-black/50 to-black/0 flex items-end p-4 text-white font-bold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
