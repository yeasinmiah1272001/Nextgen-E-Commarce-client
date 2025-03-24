import { ShoppingCart } from "lucide-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/nextGenSlice";

const AddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();

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

  const selector = useSelector((state) => state.nextGen.cart);
  const [existingProduct, setExistingProduct] = useState(null);
  useEffect(() => {
    if (product) {
      const availableProduct = selector.find(
        (item) => item._id === product._id
      );
      setExistingProduct(availableProduct);
    }
  }, [product, selector]);

  return (
    <div>
      <div className="bg-[#F35279] px-2 mb-2 mx-2 rounded-full">
        <button
          onClick={handleAddToCart}
          className="flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/90"
        >
          <ShoppingCart className="h-3.5 w-3.5" />
          Add to Cart
        </button>
      </div>
      <hr />
      <div className="flex items-center justify-between p-2">
        <p>Subtotal</p>
        <div className="flex items-center gap-2">
          <p>678 $</p>
          <p>890 $</p>
        </div>
      </div>
    </div>
  );
};

export default AddToCartBtn;
