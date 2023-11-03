import Image, { StaticImageData } from "next/image";
import AddtoCart from "./AddtoCart";
import Link from "next/link";

function ProductCart(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
  id: number;
}) {
  return (
    <Link href={`/products/${props.id}`}>
      <div className="hover:scale-105 ">
        <div className="h-[350px] w-full">
          <Image
            src={props.img}
            alt="Picture"
            width={250}
            height={80}
            className="h-full object-cover"
          />
        </div>
        <h3 className="font-bold text-lg mt-3 ">{props.title}</h3>
        <p className="font-bold text-lg">${props.price}</p>
        <p className="font-bold text-lg">
          Category{" "}
          <span className="text-base font-normal ">{props.category}</span>{" "}
        </p>
        <AddtoCart />
      </div>
    </Link>
  );
}

export default ProductCart;
