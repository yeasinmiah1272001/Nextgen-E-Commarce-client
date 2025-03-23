import React, { useState } from "react";
import Container from "../../components/Container";
import { FaShoppingCart, FaCheck, FaTruck, FaCreditCard } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Handle thumbnail click
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };
  const product = useLoaderData();

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 p-4 mx-auto justify-center">
        {/* Image Section */}
        <div className="lg:w-1/4">
          <img
            src={product.images[selectedImage] || "/placeholder.svg"}
            alt={product?.productName || "Product Image"}
            className="w-[700px]   p-6 rounded-lg shadow-lg object-cover aspect-square"
          />
          <div className="flex gap-2 mt-4 flex-wrap">
            {product?.images?.map((img, index) => (
              <img
                key={index}
                src={img || "/placeholder.svg"}
                alt={`Gallery ${index}`}
                className={`w-16 h-16 object-cover rounded-md cursor-pointer hover:opacity-75 transition-all duration-200 ${
                  selectedImage === index
                    ? "border-2 border-pink-500 scale-105"
                    : "opacity-80"
                }`}
                onClick={() => handleThumbnailClick(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleThumbnailClick(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`View product image ${index + 1}`}
                aria-current={selectedImage === index}
              />
            ))}
          </div>
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2">
            {product?.productName || "Product Name"}
          </h1>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-xl font-semibold text-red-600">
              ${product?.discountedPersentage || "0.00"}
            </span>
            <span className="text-lg line-through text-gray-500">
              ${product?.productPrice || "0.00"}
            </span>
          </div>

          <p className="text-sm text-gray-700 mb-4">
            {product?.productDescription ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-green-600 flex items-center gap-1">
              <FaCheck /> In Stock
            </span>
          </div>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-green-600 flex items-center gap-1">
              Category: {product.productCategory}
            </span>
          </div>

          <button className="flex items-center gap-2 px-6 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition">
            <FaShoppingCart /> Add to Cart
          </button>

          <div className="mt-6 flex gap-4">
            <div className="flex items-center gap-2">
              <FaTruck />
              <span className="text-sm">Free Shipping</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCreditCard />
              <span className="text-sm">Flexible Payment</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
