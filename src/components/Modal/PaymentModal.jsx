import React from "react";
import Payment from "../Payment";

const PaymentModal = ({ closeModal, totalPrice, cart }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50  bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white w-11/12 max-w-md rounded-lg p-6 shadow-lg shadow-amber-500">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Checkout Confirmation
        </h3>
        <Payment totalPrice={totalPrice} cart={cart} />
        <div className="flex justify-end space-x-4 mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
