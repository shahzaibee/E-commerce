import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import poster from "../../public/poster.webp";
import F11 from "../../public/F12.avif";
import herologo1 from "../../public/herologo1.webp";
import herologo2 from "../../public/herologo2.webp";
import herologo3 from "../../public/herologo3.webp";
import herologo4 from "../../public/herologo4.webp";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-y-8 px-16 py-6">
      {/* left div */}
      <div className="flex-1">
        <Badge className="py-3 px-6 rounded-lg bg-sky-200 text-blue-600 text-2xl shadow-lg shadow-indigo-500/60 hover:shadow-indigo-500/80">
          Sale 50%
        </Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Link href={"/products"}>
          <Button className="mt-6 h-12 px-6 text-base rounded-xl hover:scale-110 bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... font-bold duration-300 transition ease-in-out delay-150">
            Start Shopping
          </Button>
        </Link>
        <div className="items-center mt-10 grid grid-cols-4 sm:grid-cols-4 gap-x-3">
          <Image
            src={herologo1}
            alt="herologo1"
            className="w-24 hover:scale-105 duration-100"
          />
          <Image
            src={herologo2}
            alt="herologo2"
            className="w-24 hover:scale-105 duration-100 "
          />
          <Image
            src={herologo3}
            alt="herologo3"
            className="w-24 hover:scale-105 duration-100 "
          />
          <Image
            src={herologo4}
            alt="herologo4"
            className="w-24 hover:scale-105 duration-100"
          />
        </div>
      </div>
      {/* Right div */}

      <div className="flex-1">
        {/* <div className="lg:self-start lg:left-[900px] lg:w-[22%] lg:rounded-full shadow-sm lg:z-[-1] lg:h-[60%] bg-neutral-300 lg:absolute top-[100px]"></div> */}
        <Image
          src={F11}
          alt="posters"
          className="w-64 mx-auto shadow-emerald-800 shadow-2xl"
        />
      </div>
    </section>
  );
};

export default Hero;
