import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";

const AuthenticationSheet = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-full h-full sm:h-fit sm:rounded-lg p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 items-center shadow-lg bg-white">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center text-center">
            <img
              src="/images/official.png"
              alt="Official.me"
              className="w-[120px] h-[20px] object-center mb-4"
            />{" "}
            <h2 className="text-2xl font-bold text-gray-900">
              Login or Signup
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Enter your credentials to access your account.
            </p>
          </div>

          <div className="mt-6 space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1 focus:outline-none focus:ring-0 hover:bg-gray-50 !ring-0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter your password"
                className="mt-1 focus:outline-none focus:ring-0 hover:bg-gray-50 !ring-0"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <a href="#" className="text-[#B176F2] hover:underline">
                Forgot password?
              </a>
            </div>

            <Button className="w-full bg-[#B176F2] hover:bg-[#b276f2e2] hoverScaleDownEffect text-white font-medium py-2 rounded-lg transition">
              Sign In
            </Button>

            <div className="relative flex items-center justify-center">
              <span className="absolute bg-white px-2 text-gray-500">or</span>
              <div className="w-full border-t border-gray-300 mt-3"></div>
            </div>

            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2 py-2 rounded-lg hoverScaleDownEffect"
            >
              <FcGoogle size={20} /> Continue with Google
            </Button>
          </div>
        </div>
        <div className="hidden sm:flex items-center rounded-lg size-full">
          <img
            src="/images/authBG.png"
            alt=""
            className="size-full rounded-lg object-cover object-center"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthenticationSheet;
