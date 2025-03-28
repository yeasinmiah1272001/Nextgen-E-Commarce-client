import React from "react";
import Container from "../../../components/Container";
import useCarts from "../../../hooks/useCarts";
import { Link } from "react-router-dom";

const PaymentHistry = () => {
  const [carts] = useCarts();
  console.log("carts", carts);

  const price = carts.reduce((sum, item) => sum + item.totalPrice, 0);

  return (
    <Container>
      {carts.length ? (
        <>
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Payment History</h1>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-300">
                <thead>
                  <tr className=" text-left">
                    <th className="border border-gray-300 px-4 py-2">Name</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Transaction ID
                    </th>
                    <th className="border border-gray-300 px-4 py-2">
                      Total Amount
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {carts?.map((cart, index) => (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0 ? "" : ""
                      } hover:bg-gray-300`}
                    >
                      <td className="border border-gray-300 px-4 py-2">
                        {cart.userInfo.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {cart.paymentIntentId}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        ${cart.totalPrice}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button className="px-4 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center min-h-screen  text-gray-800">
            <p className="text-lg font-semibold mb-4">
              No products in your cart
            </p>
            <Link
              to={"/shop"}
              className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-200 shadow-md"
            >
              Continue your shopping
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default PaymentHistry;
