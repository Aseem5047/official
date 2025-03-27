import React, { useState, useEffect, useCallback } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { extraDetails, feedbacks } from "@/constants";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [pause, setPause] = useState(false);
  const [visibleCount, setVisibleCount] = useState(1);
  const colors = ["bg-[#F472B6]", "bg-[#60A5FA]", "bg-[#34D399]"];
  const [expandedItems, setExpandedItems] = useState(() =>
    Array(feedbacks.length).fill(false)
  );

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);

    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? feedbacks.length - visibleCount : prevIndex - 1
    );
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) =>
      prevIndex + visibleCount >= feedbacks.length ? 0 : prevIndex + 1
    );
  }, [visibleCount]);

  useEffect(() => {
    if (pause) return;
    let interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex, handleNext, pause]);

  const toggleExpand = (index) => {
    setExpandedItems((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const getRandomColor = (index) => {
    const adjustedIndex = (index + colors.length) % colors.length;
    return colors[adjustedIndex];
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return (
    <div className="relative flex flex-col gap-10 lg:gap-20 items-center justify-center">
      <section className="w-full my-10 grid gap-7 items-stretch  justify-center grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4">
        {extraDetails.map((item) => (
          <div
            key={item.title}
            className="flex flex-col items-center justify-start gap-4 p-4 h-full"
          >
            <img
              src={item.image}
              alt={item.title}
              className={` ${
                item.title === "Create Unlimited Content"
                  ? "w-24 h-18"
                  : "size-18"
              } object-cover object-center`}
            />
            <p className="text-2xl font-bold text-center whitespace-nowrap">
              {item.title}
            </p>
            <span className="text-xl text-[#696871] text-center max-w-[80%]">
              {item.body}
            </span>
          </div>
        ))}
      </section>

      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        What Our User Says
      </h2>

      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6 }}
          className="flex gap-8"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {feedbacks
            .slice(currentIndex, currentIndex + visibleCount)
            .map((item, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center justify-center p-6 rounded-2xl min-h-[300px]"
              >
                <div className="absolute inset-0 size-full rounded-2xl bg-gray-100 -skew-y-3" />
                <div
                  className={`absolute top-10 -left-3 sm:-left-5 flex items-center p-4 rounded-full ${getRandomColor(
                    i
                  )}`}
                >
                  <img src="/icons/quote.png" alt="quote" className="size-7" />
                </div>
                <div className="flex flex-col items-center justify-center relative z-10">
                  {/* <img
                    src={item.imageURL}
                    alt={item.username}
                    className="rounded-full size-[60px] object-cover mt-4"
                  /> */}
                  <p className="text-lg font-semibold mt-2">{item.username}</p>
                  {/* <p className="text-sm text-gray-500">{item.location}</p> */}
                  <div className="flex mb-4">
                    {Array.from({ length: 5 }, (_, j) => (
                      <svg
                        key={j}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={
                          j < Math.floor(item.ratings) ? "#FBBF24" : "#f0f0f0"
                        }
                        viewBox="0 0 24 24"
                        stroke="none"
                        className="size-4"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    className={`text-center text-lg leading-relaxed max-w-sm ${
                      expandedItems[i] ? "line-clamp-none" : "line-clamp-3"
                    }`}
                  >
                    {item.feedback}
                  </p>

                  {item.feedback.length > 150 && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className={`mt-2 cursor-pointer text-black ${
                        !expandedItems[i]
                          ? "hover:text-blue-400"
                          : "hover:text-red-400"
                      } `}
                    >
                      {expandedItems[i] ? "Read Less" : "Read More"}
                    </button>
                  )}
                </div>
              </div>
            ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center gap-4 mt-2">
        <button
          className="cursor-pointer p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="cursor-pointer p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
