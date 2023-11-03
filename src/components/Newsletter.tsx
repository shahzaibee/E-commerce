import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Newsletter = () => {
  return (
    <div className="mt-10 mb-5 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 justify-center items-center relative">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="font-bold text-4xl text-center">
          Subscribe Our Newsletter
        </h1>
        <p className="text-center">
          Get the latest information and promo offers directly
        </p>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-3 mt-5 ml-3">
          <Input
            className="w-[300px] h-3 p-5 pl-10 text-base text-center text-gray-400 border-black"
            placeholder="Input email address"
          />
          <Button className="px-5 rounded-md">Get Started</Button>
        </div>
      </div>
      <div className="col-span-1 sm:col-span-1 lg:col-span-1 absolute right-4 left-3 top-4">
        <h1 className="text-[80px] opacity-10 font-extrabold text-gray-800 text-center ">
          NEWS SLETTER
        </h1>
      </div>
    </div>
  );
};

export default Newsletter;
