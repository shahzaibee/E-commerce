import Image from "next/image";
import ProductCart2 from "./Productcart2";
import Link from "next/link";
import pic1 from "../../public/p1.png";
import pic3 from "../../public/p3.png";
import pic4 from "../../public/Pic2.png";

const ProductsDetail = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-1 gap-10">
        <h1 className="text-center text-sm text-blue-700 font-bold">
          PRODUCTS
        </h1>
        <p className="text-black text-center text-4xl font-bold">
          Check What We Have
        </p>
      </div>
        <div className="flex items-center px-16 mx-auto pt-2 gap-10 flex-col lg:flex-row ">
          <div className="hover:scale-105 gap-3">
            <ProductCart2
              title="Brushed Raglan Sweatshir"
              price={195}
              img={pic1}
              category={""}
            />
          </div>
          <div className="hover:scale-105">
            <ProductCart2
              title="Cameryn Sash Tie Dress"
              price={545}
              img={pic4}
              category={""}
            />
          </div>
          <div className="hover:scale-105">
            <ProductCart2
              title="Flex Sweatshirt"
              price={175}
              img={pic3}
              category={""}
            />
          </div>
        </div>
    
    </div>
  );
};

export default ProductsDetail;
