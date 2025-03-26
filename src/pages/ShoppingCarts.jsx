import React from "react";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import Title from "../components/Title";
import { AiFillDelete } from "react-icons/ai";

import AddToCartBtn from "../components/button/AddToCartBtn";
import CartSummary from "../components/CartSummary";
import { singleDelete } from "../redux/nextGenSlice";
import toast from "react-hot-toast";

const ShoppingCarts = () => {
  const cart = useSelector((state) => state.nextGen.cart);
  const dispatch = useDispatch();

  return (
    <Container>
      <Title title={"Shopping Cart"} />

      {cart.length ? (
        <>
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {cart.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center justify-between border border-gray-300 p-4 mb-4 rounded-lg shadow-sm"
                >
                  <div className="flex items-center gap-4">
                    <img
                      className="h-20 w-20 rounded-lg border border-gray-200"
                      src={product.images[0]}
                      alt={product.productName}
                    />
                    <div>
                      <h1 className="text-lg font-semibold text-gray-800">
                        {product.productName}
                      </h1>
                      <p className="text-sm text-gray-600">
                        Variant: {product.productCategory}
                      </p>
                      <p className="text-sm text-gray-600">
                        Status: {product.productStatus}
                      </p>
                      <span className="mt-2 ">
                        <AiFillDelete
                          onClick={() =>
                            dispatch(
                              singleDelete(product._id),
                              toast.success("Deleted Success")
                            )
                          }
                          size={20}
                          className="text-red-400 hover:text-red-700 duration-300 "
                        />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <AddToCartBtn product={product} />
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <CartSummary cart={cart} />
          </div>
        </>
      ) : (
        <>
          <p className="text-center text-gray-600">Your cart is empty.</p>
        </>
      )}
    </Container>
  );
};

export default ShoppingCarts;
