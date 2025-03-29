import React from "react";
import useAllPayment from "../../../hooks/useAllPayment";
import Container from "../../../components/Container";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const ManageOrder = () => {
  const [allPayment, refetch] = useAllPayment();
  const axiosSecure = useAxiosSecure();
  const handleDelete = async (id) => {
    const res = await axiosSecure.delete(`/order/cancel/${id}`);
    if (res.data.deletedCount > 0) {
      console.log(res.data);
      toast.success("Order Cancel success");
      refetch();
    }
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-4">Manage Orders</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200  shadow-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Payment ID</th>
              <th className="px-4 py-2 border">Total Price</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {allPayment.map((item) => (
              <tr key={item._id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border">{item?.userInfo?.name}</td>
                <td className="px-4 py-2 border">{item?.userInfo?.email}</td>
                <td className="px-4 py-2 border">{item?.paymentIntentId}</td>
                <td className="px-4 py-2 border">
                  ${item.totalPrice.toFixed(2)}
                </td>
                <td className="px-4 py-2 border text-center items-center">
                  <span>
                    <MdDelete
                      onClick={() => handleDelete(item._id)}
                      className="text-red-400 hover:text-red-500 duration-300"
                      size={27}
                    />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
};

export default ManageOrder;
