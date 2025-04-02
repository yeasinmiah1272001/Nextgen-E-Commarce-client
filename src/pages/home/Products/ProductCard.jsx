import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Heart, ShoppingBag, Edit, Star } from "lucide-react";
import AddToCartBtn from "../../../components/button/AddToCartBtn";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-emerald-950 p-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md">
        <Link to={`/details/${product._id}`}>
          <img
            src={product.images[0]}
            alt={product.productName}
            className="w-full h-52 object-cover rounded-md transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Badges */}
        <div className="absolute left-2 top-2 flex flex-col gap-1.5">
          <span className="inline-flex items-center rounded-full bg-primary px-2 py-0.5 text-xs font-medium text-white">
            New
          </span>
          {product.discountedPersentage && (
            <span className="inline-flex items-center rounded-full bg-red-500 px-2 py-0.5 text-xs font-medium text-white">
              {product.discountedPersentage}% Off
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="absolute right-2 top-1/2 flex flex-col gap-2 transition-all duration-300 overflow-hidden">
          {[Heart, ShoppingBag, Edit].map((Icon, index) => (
            <button
              key={index}
              className={`flex h-8 w-8 items-center justify-center rounded-full bg-white/90 shadow-sm transition-all duration-300 hover:bg-white transform ${
                isHovered ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Icon className="h-4 w-4 text-gray-700" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Details */}
      <div className="mt-3">
        <div className="text-xs text-gray-500">{product.productCategory}</div>
        <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[2rem]">
          {product.productName.slice(0, 25)}
        </h3>
        <div className="text-xs text-gray-600 line-clamp-2">
          {product.productDescription.slice(0, 80)}
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, index) => (
            <Star
              key={index}
              className="h-4 w-4"
              fill={index < product.rating ? "currentColor" : "none"}
            />
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <div className="mt-3">
        <AddToCartBtn product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
