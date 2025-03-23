import React, { useState } from "react";
import Container from "../../components/Container";
import { FaShoppingCart, FaCheck, FaTruck, FaCreditCard } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import ProductDetailsImg from "../../components/ProductDetailsImg";
import Review from "../../components/Review";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const product = useLoaderData();
  const handleThumbnailClick = (index) => {
    setSelectedImage(index);
  };

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10 p-4 mx-auto justify-center">
        {/* Image Section */}
        <ProductDetailsImg
          product={product}
          handleThumbnailClick={handleThumbnailClick}
          selectedImage={selectedImage}
        />

        {/* Details Section */}
        <div className="lg:w-1/2">
          <h1 className="text-2xl font-bold mb-2 tracking-wide">
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
            <span className="text-sm text-black flex items-center gap-1">
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
      {/* comment or review */}
      <Review />
    </Container>
  );
};

export default ProductDetails;
