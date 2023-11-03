"use client";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { cartActions } from "@/store/slice/cartSlice";
import toast from "react-hot-toast";

const AddtoCart = () => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(cartActions.addtoCart({ quantity: 1 }));
    toast.success("Product added");
  };

  return (
    <div>
      <Button onClick={addItem} className="mt-6 h-12 px-6 text-xs">
        Add to cart
      </Button>
    </div>
  );
};

export default AddtoCart;
