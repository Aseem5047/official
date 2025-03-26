import React from "react";

const ThriveBusiness = () => {
  return (
    <div className="size-full grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-start gap-20 lg:gap-32 xl:gap-24 mt-7 lg:mt-0">
      {/* Left Side - Image with Overlay */}
      <section className="relative mx-auto lg:mx-0 w-full max-w-xs">
        {/* Background Container */}
        <div className="absolute inset-0 bg-[#F6F6F9] rounded-xl" />

        {/* Person Image */}
        <div className="relative z-10 -mt-7 flex justify-center">
          <img
            src="/images/thriveBusiness/user.png"
            alt="Business professional"
            className="rounded-xl object-cover w-64 min-h-[400px]"
          />
        </div>

        {/* New Visitors Stats Overlay */}

        {/* Stats Image */}
        <img
          src="/images/thriveBusiness/stats.png"
          alt="Stats"
          className="absolute top-[42%] z-20 shadow-md -right-5 min-[500px]:-right-20 h-full max-h-[150px] rounded-xl object-cover"
        />

        {/* Decorative Pattern */}
        <img
          src="/images/thriveBusiness/pattern.png"
          alt="Pattern"
          className="absolute z-20 -bottom-10 -right-10 h-24"
        />
      </section>

      {/* Right Side */}
      <section className="flex-1 flex justify-center items-center lg:px-4">
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Let your business thrive under our supervision
          </h2>
          <p className="text-base lg:text-lg xl:text-xl">
            Launch a business today with our help and get it done with amazing
            launch features, websites and more with uifry. We help business like
            yours thrive every day and beyond.
          </p>
          <p className="text-base lg:text-lg xl:text-xl">
            We are making every business grow!
          </p>

          <div className="flex items-center gap-2">
            <img
              src="/images/thriveBusiness/checkbox.png"
              alt=""
              className="size-10"
            />
            <p className="text-base md:text-xl">
              Super useful and easy to use interface
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="/images/thriveBusiness/checkbox.png"
              alt=""
              className="size-10"
            />
            <p className="text-base md:text-xl">
              Easiest way to grow your business in days
            </p>
          </div>

          <a
            href="https://official.me/p/signin"
            target="_blank"
            className="flex items-center gap-2 bg-black text-white text-sm hoverScaleDownEffect px-5 py-3 rounded-lg w-fit whitespace-nowrap mt-7"
          >
            Sign Up Now{" "}
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
        </div>
      </section>
    </div>
  );
};

export default ThriveBusiness;
