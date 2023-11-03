import { Products } from "@/utils/mock";
import ProductCart from "@/components/ProductCart";
import { StaticImageData } from "next/image";

function getProductsByCategory(category: string) {
  return Products.filter((product) => product.category === category);
}

export default function Page({ params }: { params: { slug: string } }) {
  const result = getProductsByCategory(params.slug);

  return (
    <div className="px-16 py-16 flex sm:flex-col lg:flex-row gap-12 justify-evenly mt-4  flex-wrap">
      {result.map((product) => (
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
}
