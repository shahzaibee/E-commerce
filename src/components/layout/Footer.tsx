import Logo from "../../../public/Logo.webp";
import Image from "next/image";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1">
      <div className="flex justify-around px-16 py-8 flex-col sm:flex-col lg:flex-row">
        {/* div1 */}
        <div className="flex flex-col items-center sm:items-start lg:items-center gap-y-1">
          <Image src={Logo} alt="logo" />
          <p className="text-gray-500 text-center sm:text-left lg:text-center text-base">
            Small, artisan label that offers a <br />
            thoughtfully curated collection of high <br /> quality everyday
            essentials made.
          </p>
          {/* Logo */}
          <div className="flex gap-x-5 mt-4 w-[300px] h-[200px] justify-center ">
            <AiOutlineTwitter />
            <GrFacebookOption />
            <FaLinkedinIn />
          </div>
        </div>
        {/* div2 */}
        <div className="flex flex-col items-center sm:items-start lg:items-start">
          <h1 className="text-slate-700 font-bold">Company</h1>
          <p className="py-2">About</p>
          <p className="py-2">Terms of Use</p>
          <p className="py-2">Privacy Policy</p>
          <p className="py-2">How it Works</p>
          <p className="py-2">Contact Us</p>
        </div>
        {/* div3 */}
        <div className="flex flex-col items-center sm:items-start lg:items-start">
          <h1 className="text-slate-700 font-bold py-2">Support</h1>
          <p>Support Carrer</p>
          <p className="py-2">24h Service</p>
          <p className="py-2">Quick Chat</p>
        </div>
        {/* div4 */}
        <div className="flex flex-col items-center sm:items-start lg:items-start">
          <h1 className="text-slate-700 font-bold py-2">Contact</h1>
          <p className="py-2">Whatsapp</p>
          <p className="py-2">Support 24h</p>
        </div>
      </div>
      <div className="border-t border-gray-700 flex justify-center sm:justify-between lg:justify-between py-8 px-4 sm:px-8 lg:px-16 text-gray-500 gap-6 flex-col sm:flex-col lg:flex-row">
        <p className="text-center sm:text-left lg:text-left">
          Copyright © 2022 Dine <br /> Market
        </p>
        <p className="text-center sm:text-left lg:text-left">
          Design by. <span className="font-bold text-black">Weird</span> <br />{" "}
          <span className="font-bold text-black"> Design Studio</span>
        </p>
        <p className="text-center sm:text-left lg:text-left">
          Code by. <span className="font-bold text-black"> shabrina12 on</span>{" "}
          <br /> <span className="font-bold text-black">github </span>
        </p>
      </div>
    </section>
  );
};

export default Footer;
