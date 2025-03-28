import React, { useState } from "react";
import AuthenticationSheet from "../shared/AuthenticationSheet";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="sticky top-0 blurEffect bg-white w-full p-4 md:px-7 xl:px-14 2xl:px-24 z-40 shadow-sm">
      <section className="flex bg-white items-center justify-between 2xl:px-4">
        {/* Logo */}
        <img
          src="/images/official.png"
          alt="Official.me"
          className="w-full max-w-[144px] h-[24px] object-center"
        />

        {/* Action Buttons */}
        <div className="flex items-center">
          <button
            className="bg-black text-white hoverScaleDownEffect px-4 py-2 rounded-lg min-w-[5rem]"
            onClick={() => setOpen((prev) => !prev)}
          >
            Creator Login
          </button>

          <AuthenticationSheet open={open} setOpen={setOpen} />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
