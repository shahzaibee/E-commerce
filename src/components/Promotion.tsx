import React from "react";
import { Button } from "./ui/button";
import P7 from "../../public/Prom1.webp";
import P8 from "../../public/Prom2.webp";
import P9 from "../../public/event3.webp";

import Image from "next/image";

const Promotion = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <div className="py-6 gap-5 px-16">
        <h1 className="text-center text-sm text-blue-700 font-bold">
          PROMOTIONS
        </h1>
        <p className="text-black text-center text-4xl font-bold ">
          Our Promotions Events
        </p>
        <div className=" w-full mt-[50px] grid grid-cols-1 lg:grid-cols-2 gap-7 mx-auto">
          {/* part one  */}
          <div className=" flex flex-col gap-5 ">
            <div className="bg-gray-200 h-[100%] font-extrabold text-left flex justify-between items-center pr-8 pl-8 ">
              <div>
                <h1 className="border-b pb-2 text-4xl font-bold">
                  {" "}
                  GET UP TO 60%{" "}
                </h1>
                <p className="text-xl font-semibold">For the summer season</p>
              </div>
              <Image src={P7} alt="abc" />
            </div>
            <div className="bg-black h-[100%] text-white font-extrabold text-center flex flex-col justify-center items-center gap-1">
              <h1 className="pb-2 text-4xl font-bold transition-colors">
                {" "}
                GET 30% Off{" "}
              </h1>
              <p className="text-sm font-semibold">USE PROMO CODE </p>
              <Button className="w-[275px] p-3 space-x-2 bg-gray-800 text-center text-lg mt-4">
                DINEWEEKEND SALE
              </Button>
            </div>
          </div>
          {/* part two  */}
          {/* first imge detail */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="bg-[#efe1c7]">
              <div>
                <h1>Flex Sweatshirt</h1>
                <div className="flex gap-3">
                  <p className="line-through font-normal">$100.00 </p>
                  <h1 className="font-bold">$75.00</h1>
                </div>
              </div>
              <Image src={P8} alt="abc" />
            </div>
            {/* Second image detail */}
            <div className=" bg-gray-200">
              <div>
                <h1>Flex Push Button Bomber</h1>
                <div className="flex gap-3">
                  <p className="line line-through">$225.00</p>
                  <p className="font-bold">$190.00</p>
                </div>
              </div>
              <Image src={P9} alt="abc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promotion;
