import React from "react";
import useProducts from "../../../hooks/useProducts";

const AllProduct = () => {
  const [products] = useProducts();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left text-sm sm:text-base">
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">Title</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Brand Name</th>
            <th className="py-2 px-4 border-b">Category</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">
                <img
                  className="h-16 w-16 object-cover rounded"
                  src={product.images[0]}
                  alt={product.productName}
                />
              </td>
              <td className="py-2 px-4 border-b">
                {product.productName.slice(0, 20)}
              </td>
              <td className="py-2 px-4 border-b text-sm sm:text-base">
                ${product.productPrice}
              </td>
              <td className="py-2 px-4 border-b text-sm sm:text-base">
                {product.productBrand}
              </td>
              <td className="py-2 px-4 border-b text-sm sm:text-base">
                {product.productCategory}
              </td>
              <td className="py-2 px-4 border-b">
                <button className="text-white bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm sm:text-base">
                  Edit
                </button>
                <button className="ml-2 text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm sm:text-base">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProduct;
