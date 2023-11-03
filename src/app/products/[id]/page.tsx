import AddtoCart from "@/components/AddtoCart";
import Productinfo from "@/components/Productinfo";
import Quantity from "@/components/Quantity";
import { Products } from "@/utils/mock";
import { StaticImageData } from "next/image";
import Image from "next/image";

function getProductsByDetail(id: string | number) {
  return Products.filter((product) => product.id == id);
}

const sizes = ["xs", "sm", "md", "lg", "xl"];

export default function Page({ params }: { params: { id: string } }) {
  const result = getProductsByDetail(params.id);
  return (
    <div className="px-4 sm:px-8 lg:px-16 py-8 sm:py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-4">
      {result.map((product) => (
        <div
          key={product.id}
          className="space-y-6 flex gap-x-10 flex-wrap lg:flex-nowrap"
        >
          {/* left image */}
          <div>
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
            />
          </div>
          {/* Right content */}
          <div className="space-y-3">
            <div className="">
              <h1 className="text-2xl">{product.name}</h1>
              <h2 className="text-gray-400 text-base font-bold">
                {product.tagline}
              </h2>
              <div>
                <h3 className="font-bold text-sm mt-6">SELECT SIZE</h3>
                {/* Sizes */}
                <div className="flex gap-x-3">
                  {sizes.map((item) => (
                    <div
                      key={item}
                      className="h-12 w-12 rounded-full hover:shadow-xl border mt-2 flex justify-center items-center"
                    >
                      <span className="text-xs font-semibold text-center text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Quantity */}
                <div className="flex gap-x-3 mt-6 items-center">
                  <h3 className="text-xs font-semibold">Quantity:</h3>
                  <Quantity />
                </div>
                <div className="font-bold flex items-center space-x-3 mt-5">
                  <AddtoCart />
                  <p>${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
