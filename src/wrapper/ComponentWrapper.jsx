import React, { useEffect, useState } from "react";

const ComponentWrapper = ({
  reverseOrder = false,
  imageFirst = false,
  hasButton = true,
  heading,
  text,
  buttonText = "Sign Up Now",
  imageSrc,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const finalImageFirst = isMobile
    ? reverseOrder
      ? !imageFirst
      : imageFirst
    : imageFirst;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 xl:gap-20">
      {finalImageFirst && (
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-auto rounded-xl object-cover"
        />
      )}

      {/* Content Section */}
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {heading}
        </h2>
        <p className="text-base lg:text-lg xl:text-xl">{text}</p>

        {hasButton && (
          <a
            href="https://official.me/p/signin"
            target="_blank"
            className="flex items-center gap-2 bg-black text-white text-sm hoverScaleDownEffect px-5 py-3 rounded-lg w-fit whitespace-nowrap mt-7"
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 mb-0.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Image Section (If finalImageFirst is false) */}
      {!finalImageFirst && (
        <img
          src={imageSrc}
          alt={heading}
          className="w-full h-auto rounded-xl object-cover"
        />
      )}
    </div>
  );
};

export default ComponentWrapper;
