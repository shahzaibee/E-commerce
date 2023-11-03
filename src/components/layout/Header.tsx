import Logo from "../../../public/Logo.webp";
import Image from "next/image";
import Link from "next/link";
import { HammerIcon, MenuIcon, SearchIcon, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center py-8 px-16">
      <Link href={"/"}>
        <Image className="w-40  " src={Logo} alt="logo" />
      </Link>
      <ul className="hidden lg:flex sm:flex-row md:flex-row lg:flex-row justify-between gap-x-6 ">
        <Link href="category/female">
          <li className="text-lg">Female</li>
        </Link>
        <Link href="category/male">
          <li className="text-lg">Male</li>
        </Link>
        <Link href="category/kids">
          <li className="text-lg">Kids</li>
        </Link>
        <Link href="/products">
          <li className="text-lg">All Products</li>
        </Link>
      </ul>
      <div className="hidden lg:flex justify-between items-center ">
        <SearchIcon className="mr-3" />
        <Input
          className="px-3 border outline-none"
          type="text"
          placeholder="Write Product name"
        />
        <Button
          className="rounded-lg px-5 text-lg ml-3 animate-pulse border"
          type="submit"
        >
          Go
        </Button>
      </div>
      <div>
        <div className="block lg:hidden">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent>
              <ul>
                <Link href="category/female">
                  <li className="text-lg">Female</li>
                </Link>
                <Link href="category/male">
                  <li className="text-lg">Male</li>
                </Link>
                <Link href="category/kids">
                  <li className="text-lg">Kids</li>
                </Link>
                <Link href="/products">
                  <li className="text-lg">All Products</li>
                </Link>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden h-10 w-10 rounded-full hover:scale-105 duration-300 ease-in bg-gray-200 lg:flex justify-center items-center relative animate-bounce">
          {" "}
          <ShoppingCart />
          <span className="bg-red-500 rounded-full w-5 flex justify-center items-center absolute bottom-7 left-7 text-white text-sm hover:scale-105 duration-300 ease-in ">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
