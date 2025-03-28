import React from "react";
import { externalLinks, socials } from "../../constants/index.js";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-gradient-to-r from-[#f4eaff] via-[#e8d8fe] to-[#f6eeff] border border-t-gray-300 pt-12 text-[#4A2373]">
      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-[1fr_2fr] items-start justify-center w-full gap-7 2xl:gap-14 pb-12 md:px-14 lg:px-24 max-md:px-4">
        <div className="size-full flex flex-col gap-4 items-start justify-between">
          <div className="flex flex-col gap-4 items-start">
            <img
              src="/images/official.png"
              alt="Official.me"
              className="w-[150px] h-[24px] object-center"
            />
          </div>

          {/* socials */}
          <ul className="text-[14px] font-[400] flex gap-4">
            {socials.links.map((social, index) => (
              <li
                key={index}
                className="hoverScaleEffect w-fit bg-black p-2 rounded-full"
              >
                <a href={social.url}>
                  <img
                    src={social.icon}
                    alt="social logo"
                    className="w-auto h-auto"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="size-full grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-7 xl:gap-0 items-center justify-center">
          {/* External Links */}
          <div className="size-full flex flex-col items-start justify-start gap-[15px]">
            <p className="text-lg text-[#b56ef7] font-bold">Quick Links</p>
            <ul className="w-full grid grid-cols-1 min-[400px]:grid-cols-2 2xl:grid-cols-3 gap-4 items-center ">
              {externalLinks.map((item) => (
                <li
                  key={item.label}
                  className="text-sm xl:text-[15px] hoverScaleDownEffect"
                >
                  <a href={item.route} target="_blank">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* other info */}
      <div className="min-h-[76px] flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 w-full bg-black text-white py-6 md:px-14 lg:px-24 max-md:px-4">
        <p className="text-xs sm:text-sm md:text-base w-full font-[400] text-center md:text-start capitalize">
          © 2021 Fanzone Technologies. All rights reserved
        </p>

        <p className="text-xs sm:text-sm md:text-base w-full flex items-center justify-center md:justify-end gap-2 whitespace-nowrap text-white">
          Contact Us:{" "}
          <a
            href="mailto:support@Official.me"
            className="text-[#debaff] hoverScaleDownEffect"
          >
            support@official.me
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
