import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import picture from "../../public/picture1.webp";

const Service = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 justify-between items-center px-4 sm:px-8 lg:px-16 py-6 w-screen gap-6 flex-col lg:flex-row relative mt-7">
      {/* div 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 py-16 text-center">
        <div>
          <div className="mt-24">
            <h1 className="font-bold text-lg ">
              Using Good Quality <br />
              Materials
            </h1>
            <p className=" ">
              Lorem ipsum dolor sit <br />
              amet,consectetur <br />
              adipiscing elit.
            </p>
          </div>
          <div className="py-3">
            <h1 className="font-bold text-lg">
              100% Handmade <br /> Products
            </h1>
            <p>
              Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing
              elit.
            </p>
          </div>
        </div>
        <div>
          <div className="mt-24">
            <h1 className="font-bold text-lg mb-0">
              Modern Fashion
              <br /> Design
            </h1>
            <p>
              Lorem ipsum dolor sit <br /> amet, consectetur <br />
              adipiscing elit.
            </p>
          </div>
          <div className="py-3">
            <h1 className="font-bold text-lg mb-0">
              Discount for Bulk <br />
              Orders
            </h1>
            <p>
              Lorem ipsum dolor sit <br />
              amet, consectetur
              <br /> adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      {/* div 2 */}
      <div>
        <h1 className="font-bold text-3xl sm:mt-0 lg:text-5xl ml-2 lg:ml-20  ">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4 mt-4 lg:mt-10">
          <Image
            src={picture}
            alt="21"
            className="justify-center h-[350px]"
          />
          <div className="mt-4 lg:mt-0">
            <p className="text-xl text-stone-600">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Naturalbr
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Button className="p-4 mt-4">See All Product</Button>
          </div>
        </div>
      </div>
      <div className="text-[70px] absolute self-start top-44 opacity-5 ml-2 left-24 font-bold shadow-2xl">
        <h1 className="">DIFFERENT</h1>
        <h1 className="">FROM</h1>
        <h1 className="">OTHERS</h1>
      </div>
    </div>
  );
};

export default Service;