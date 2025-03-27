import React, { useState } from "react";
import toast from "react-hot-toast";
import PaymentModal from "./Modal/PaymentModal";

const CartSummary = ({ cart }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.productPrice * item.quantity,
    0
  );

  const totalDiscount = cart.reduce(
    (sum, item) =>
      sum +
      (item.productPrice * item.quantity * item.discountedPersentage) / 100,
    0
  );

  const totalPrice = subtotal - totalDiscount;

  const handleCheckoutClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 border lg:h-72 border-gray-300 rounded-lg shadow-md bg-gray-50">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Order Summary
      </h2>

      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Subtotal</p>
        <p className="text-gray-800 font-medium">${subtotal.toFixed(2)}</p>
      </div>

      <div className="flex justify-between mb-4">
        <p className="text-gray-600">Discount</p>
        <p className="text-gray-800 font-medium">
          -${totalDiscount.toFixed(2)}
        </p>
      </div>

      <div className="flex justify-between text-lg font-semibold text-gray-800 mt-6">
        <p>Total</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>

      <div
        className="w-full mt-6 py-3 bg-black text-center text-white rounded-lg hover:bg-gray-800 transition-all cursor-pointer"
        onClick={handleCheckoutClick}
      >
        Proceed to Checkout
      </div>

      {isModalOpen && (
        <PaymentModal
          closeModal={closeModal}
          totalPrice={totalPrice}
          cart={cart}
        />
      )}
    </div>
  );
};

export default CartSummary;
