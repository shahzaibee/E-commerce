import Image, { StaticImageData } from "next/image";

function ProductCart(props: {
  title: string;
  price: number;
  img: StaticImageData;
  category: string;
}) {
  return (
    <div>
      <Image src={props.img} alt="Picture" className="h-[400px] w-auto" />
      <h3 className="font-bold text-lg mt-3 ">{props.title}</h3>
      <p className="font-bold text-lg">${props.price}</p>
      <p className="font-bold text-lg">
        Category{" "}
        <span className="text-base font-normal ">{props.category}</span>{" "}
      </p>
    </div>
  );
}

export default ProductCart;
