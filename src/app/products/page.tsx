import { Products } from "@/utils/mock";
import ProductList from "@/views/ProductList";
import ProductCart from "@/components/ProductCart";
import { StaticImageData } from "next/image";

const AllProducts = () => {
  return (
    <div className="px-16 py-16 flex sm:flex-col lg:flex-row gap-12 justify-evenly mt-4 flex-wrap">
      {Products.map((product) => (
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

export default AllProducts;
