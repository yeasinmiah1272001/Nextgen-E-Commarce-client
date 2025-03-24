import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decressQuantity,
  incressQuantity,
} from "../../redux/nextGenSlice";
import { FaPlus, FaMinus } from "react-icons/fa";

const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.nextGen.cart);

  const [existingProduct, setExistingProduct] = useState(null);

  useEffect(() => {
    if (product) {
      const availableProduct = cart.find((item) => item._id === product._id);
      setExistingProduct(availableProduct);
    }
  }, [product, cart]);

  const handleAddToCart = () => {
    if (product) {
      if (existingProduct) {
        toast.error(`${product.productName} is already in the cart`);
      } else {
        dispatch(addToCart(product));
        toast.success(`${product.productName} added successfully`);
      }
    } else {
      toast.error("Product not found");
    }
  };

  const handleIncress = () => {
    if (product) {
      dispatch(incressQuantity(product._id));
      toast.success("incress success");
    }
  };
  const handleDecress = () => {
    if (product && existingProduct.quantity > 1) {
      dispatch(decressQuantity(product._id));
      toast.success("decress success");
    }
  };

  return (
    <div className="p-2 rounded-lg shadow-sm bg-white">
      {existingProduct ? (
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h1 className="font-semibold text-gray-700">Quantity</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecress}
                className="p-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                <FaMinus className="text-gray-700" />
              </button>
              <span className="font-medium text-gray-700">
                {existingProduct.quantity}
              </span>

              <button
                onClick={handleIncress}
                className="p-1 rounded bg-gray-200 hover:bg-gray-300"
              >
                <FaPlus className="text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-1.5 rounded-md bg-[#F35279] py-2 text-sm font-medium text-white transition-all hover:bg-[#e0436b]"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </button>
      )}

      <hr className="my-4 border-gray-300" />

      <div className="flex items-center justify-between">
        <p className="font-medium text-gray-600">Subtotal</p>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-gray-800">678 $</p>
          <p className="text-sm text-gray-500 line-through">890 $</p>
        </div>
      </div>
    </div>
  );
};

export default AddToCartBtn;
