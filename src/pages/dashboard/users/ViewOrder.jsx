import React from "react";
import Container from "../../../components/Container";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import useCarts from "../../../hooks/useCarts";

const ViewOrder = () => {
  const [carts] = useCarts();

  return (
    <Container>
      <div className="p-6  rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold mb-4">Order History</h1>
        <div className="space-y-6">
          {carts.map((order) => (
            <div
              key={order._id}
              className=" rounded-lg shadow-md p-4 border border-gray-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={order.userInfo.image}
                  alt={order.userInfo.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-medium flex items-center gap-2">
                    <AiOutlineUser /> {order.userInfo.name}
                  </h2>
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <MdEmail /> {order.userInfo.email}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {order.cart.map((product) => (
                  <div
                    key={product._id}
                    className="flex items-center space-x-4 border-t pt-4"
                  >
                    <img
                      src={product.images[0]}
                      alt={product.productName}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {product.productName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Category: {product.productCategory}
                      </p>
                      <p className="text-sm text-gray-600">
                        Brand: {product.productBrand}
                      </p>
                      <p className="text-sm text-gray-600">
                        Quantity: {product.quantity}
                      </p>
                    </div>
                    <p className="text-lg font-bold text-gray-800">
                      ${product.productPrice}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-6">
                <p className="text-xl font-bold text-gray-800 flex items-center gap-2">
                  {/* <FaRegMoneyBillAlt /> Total: ${order.totalPrice} */}
                </p>
                <p className="text-sm text-gray-600">
                  Payment Intent ID: {order.paymentIntentId}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ViewOrder;
