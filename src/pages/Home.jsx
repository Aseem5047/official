import React from "react";
import Carousel from "../components/shared/Carousel";

const Home = () => {
  return (
    <div className="relative size-full flex flex-col gap-10">
      {/* Main Content */}
      <div className="size-full grid sm:grid-cols-2 gap-5 md:gap-10 items-start pt-10">
        {/* Left Side */}
        <section className="size-full flex flex-col items-start justify-start gap-4 py-4">
          {/* Heading & Text */}
          <div className="flex flex-col items-start justify-start gap-4 lg:pl-14">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
              The <span className="text-[#B176F2]">Creator</span> Super App{" "}
              <br /> that maximizes profits.{" "}
            </h2>
            <p className="text-base lg:text-lg xl:text-xl">
              Whether you're a pro or just starting out, with official, you can
              maximize your income and save on expenses - all in one place.
            </p>
          </div>
          {/* Button and Images */}
          <div className="flex flex-col items-start justify-start gap-4">
            {/* Arrow */}
            <img src="/images/home/arrows.png" alt="" className="size-14" />

            {/* SignUp Button */}
            <div className="flex items-center flex-wrap gap-7 lg:pl-14">
              <a
                href="https://official.me/p/signin"
                target="_blank"
                className="flex items-center gap-2 bg-black text-white text-sm hoverScaleDownEffect px-4 py-2 rounded-lg w-fit whitespace-nowrap"
              >
                Sign Up Now
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

              <img src="/images/home/booked.png" alt="" className="w-44" />
            </div>

            {/* Text Content */}
            <div className="flex items-center gap-2 lg:pl-10">
              <p className="text-2xl bg-[#E671E51A] p-2 rounded-lg">💪</p>
              <span className="font-bold text-base">
                100,000+ creators strong{" "}
              </span>
            </div>
          </div>
        </section>
        {/* Right Side */}
        <section className="size-full flex items-center">
          <img
            src="/images/home/main2.png"
            alt=""
            className="size-full min-h-96 object-cover sm:object-contain xl:object-cover  object-center mix-blend-multiply"
          />
        </section>
      </div>
      {/* Carousel */}
      <Carousel />
    </div>
  );
};

export default Home;
