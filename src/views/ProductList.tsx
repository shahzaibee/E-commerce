import Image from "next/image";
import P1 from "../../public/Pic1.png";
import ProductCart from "@/components/ProductCart";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import { log } from "console";

const ProductList = () => {
  const Productchecks = Products.slice(0, 3);
  return (
    <div className=" px-16 flex sm:flex-col lg:flex-row gap-6 justify-evenly mt-16 py-16">
      {Productchecks.map((product) => (
        <ProductCart
          key={product.id}
          title={product.name}
          price={product.price}
          img={product.image as StaticImageData}
          category={product.category}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
