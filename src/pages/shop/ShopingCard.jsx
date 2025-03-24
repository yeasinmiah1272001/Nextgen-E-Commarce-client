import React from "react";

import { useState } from "react";
import { Heart, ShoppingBag, Edit } from "lucide-react";

import { Link } from "react-router-dom";
import AddToCartBtn from "../../components/button/AddToCartBtn";

const ShopingCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.productPrice
    ? Math.round(
        ((product.productPrice - product.discountedPersentage) /
          product.productPrice) *
          100
      )
    : 0;
  return (
    <div
      className="group relative  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-emerald-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden pt-[85%]">
        {/* Product Image */}
        <Link to={`/details/${product._id}`}>
          <img
            src={product.images[0]}
            alt={"image"}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1.5">
          <span className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
            New
          </span>

          {discount > 0 && (
            <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
              -{discount}%
            </span>
          )}
        </div>

        {/* Action Buttons - Slide in from right */}
        <div className="absolute right-0 top-1/2 flex flex-col gap-2 transition-all duration-300 overflow-hidden">
          <button
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-sm transition-all duration-300 hover:bg-white transform ${
              isHovered ? "translate-x-0 mr-2" : "translate-x-full"
            }`}
          >
            <Heart className="h-3.5 w-3.5 text-gray-700" />
          </button>
          <button
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-sm transition-all duration-300 hover:bg-white transform ${
              isHovered ? "translate-x-0 mr-2 delay-75" : "translate-x-full"
            }`}
          >
            <ShoppingBag className="h-3.5 w-3.5 text-gray-700" />
          </button>
          <button
            className={`flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-sm transition-all duration-300 hover:bg-white transform ${
              isHovered ? "translate-x-0 mr-2 delay-150" : "translate-x-full"
            }`}
          >
            <Edit className="h-3.5 w-3.5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-0.5 text-xs text-gray-500">
          {product.productCategory}
        </div>
        <h3 className=" line-clamp-2 text-xs font-medium text-gray-900 min-h-[2rem]">
          {product.productName.slice(0, 20)}
        </h3>
        <div className=" text-xs text-gray-500">
          {product.productDescription.slice(0, 70)}
        </div>
      </div>

      {/* Add to Cart Button */}
      <AddToCartBtn product={product} />
    </div>
  );
};

export default ShopingCard;
