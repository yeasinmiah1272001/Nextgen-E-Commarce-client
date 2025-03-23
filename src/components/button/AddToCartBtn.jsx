import { ShoppingCart } from "lucide-react";
import React from "react";

const AddToCartBtn = () => {
  return (
    <div>
      <div className="bg-[#F35279] px-2 mb-2">
        <button className="flex w-full items-center justify-center gap-1.5 rounded-md bg-primary py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/90">
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
