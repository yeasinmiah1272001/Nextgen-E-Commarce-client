import React from "react";
import Container from "../components/Container";
import { useSelector } from "react-redux";
import Title from "../components/Title";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { AiOutlineTag } from "react-icons/ai";
import { BsCurrencyDollar } from "react-icons/bs";
import AddToCartBtn from "../components/button/AddToCartBtn";
import CartSummary from "../components/CartSummary";

const ShoppingCarts = () => {
  const cart = useSelector((state) => state.nextGen.cart);

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
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <AddToCartBtn product={product} />
                    {/* <button className="mt-3 text-red-500 hover:text-red-600 flex items-center gap-1">
                  <FaTrashAlt /> Remove
                </button> */}
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
