import React from "react";
import { carouselItems } from "../../constants";

const Carousel = () => {
  return (
    <div className="w-full rounded-xl overflow-hidden group">
      <div className="flex items-center animate-scroll">
        {carouselItems.concat(carouselItems).map((item, index) => (
          <div
            key={index}
            className="relative min-w-[250px] max-w-xs rounded-xl overflow-hidden shadow-lg mx-2"
          >
            <img
              src={item.image}
              alt={item.title}
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
