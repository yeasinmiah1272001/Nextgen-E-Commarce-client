import React from "react";

const ProductDetailsImg = ({
  product,
  handleThumbnailClick,
  selectedImage,
}) => {
  return (
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
  );
};

export default ProductDetailsImg;
