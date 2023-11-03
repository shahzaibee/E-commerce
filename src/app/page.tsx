import Image from "next/image";
import Logo from "../../public/Logo.webp";
import Hero from "@/views/Hero";
import ProductList from "@/views/ProductList";
import AddtoCart from "@/components/AddtoCart";
import Promotion from "@/components/Promotion";
import ProductsDetail from "@/components/ProductsDetail";
import Service from "@/components/Service";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
      <div>
        {/* Hero section */}
        <Hero />
        {/* Promotion */}
        <Promotion />
        {/* ProductDetails */}
        <ProductsDetail />
        {/* service */}
        <Service />
        {/* Newsletter */}
        <Newsletter />
      </div>
  );
}
