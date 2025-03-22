import React, { useState } from "react";
import toast from "react-hot-toast";
import { imageUpload } from "../../../utility";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target;
    const productName = form.name.value;
    const images = [
      form.image1.files[0],
      form.image2.files[0],
      form.image3.files[0],
    ];
    const productBrand = form.brand.value;
    const productPrice = form.price.value;
    const discountedPersentage = form.discountedPersentage.value;
    const productDescription = form.description.value;
    const productCategory = form.category.value;

    try {
      const imageUrls = await Promise.all(
        images.map((image) => imageUpload(image))
      );
      const formInfo = {
        productName,
        images: imageUrls,
        productBrand,
        productPrice,
        discountedPersentage,
        productDescription,
        productCategory,
      };
      const data = await axiosSecure.post("/addproduct", formInfo);

      if (data.data.insertedId > 0) {
        toast.success("Product added successfully!");
      }
      // console.log(data.data);
      navigate("/dashboard/allproduct");
    } catch (error) {
      console.error(error);
      toast.error("Failed to upload product images.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 mx-auto bg-[#AADEEE] rounded-md shadow-md">
      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Image Upload Section */}
        <div className="flex gap-4">
          {[1, 2, 3].map((num) => (
            <div key={num} className="w-1/3">
              <label className="block text-sm font-medium text-gray-700">
                Image {num}
              </label>
              <input
                className="border border-dashed h-20 w-full"
                type="file"
                name={`image${num}`}
                id={`image${num}`}
              />
            </div>
          ))}
        </div>
        {/* Text Input Fields */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="mt-1 w-full px-4 py-2 outline-none border border-black rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Product Brand
            </label>
            <input
              type="text"
              name="brand"
              placeholder="Enter product brand"
              className="mt-1 w-full px-4 py-2 outline-none border border-black rounded"
            />
          </div>
        </div>
        {/* Number Input Fields */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium border-black">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              className="mt-1 w-full px-4 py-2 border outline-none border-black rounded"
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Product Discount
            </label>
            <input
              type="number"
              name="discountedPersentage"
              placeholder="Enter product discount"
              className="mt-1 w-full px-4 py-2 border outline-none border-black rounded"
            />
          </div>
        </div>
        {/* Textarea */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            name="description"
            placeholder="Enter product description"
            className="mt-1 w-full px-4 py-2 outline-none border border-black rounded"
          />
        </div>
        {/* Dropdown */}
        <div className="flex gap-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              name="category"
              className="w-full px-4 py-2 border border-black rounded"
            >
              <option disabled>Select Category</option>
              <option>Television</option>
              <option>Refrigerators</option>
              <option>Washing Machine</option>
              <option>Tablets</option>
              <option>Laptop</option>
              <option>Cameras</option>
              <option>Mobiles</option>
              <option>Smart Watches</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white py-2 rounded bg-sky-400 flex items-center justify-center"
        >
          {isLoading ? (
            <TbFidgetSpinner className="animate-spin text-xl" />
          ) : (
            "Add Your Product"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
