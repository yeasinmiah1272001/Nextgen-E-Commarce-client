import React, { useState } from "react";
import Container from "../../components/Container";
import useProducts from "../../hooks/useProducts";
import ShopingCard from "./ShopingCard";

const Shop = () => {
  const [products] = useProducts();

  // State for selected filters
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]); // Default range

  // Extract unique categories, brands, and prices
  const categories = [...new Set(products.map((item) => item.productCategory))];
  const brands = [...new Set(products.map((item) => item.productBrand))];

  // Get min and max price for the range slider
  const minPrice = Math.min(...products.map((product) => product.productPrice));
  const maxPrice = Math.max(...products.map((product) => product.productPrice));

  // Handle filter selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand)
        ? prev.filter((item) => item !== brand)
        : [...prev, brand]
    );
  };

  const handlePriceChange = (event) => {
    const { name, value } = event.target;
    setPriceRange((prevRange) => {
      if (name === "minPrice") {
        return [value, prevRange[1]];
      } else {
        return [prevRange[0], value];
      }
    });
  };

  // Filtered products
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.productCategory);
    const brandMatch =
      selectedBrands.length === 0 ||
      selectedBrands.includes(product.productBrand);
    const priceMatch =
      product.productPrice >= priceRange[0] &&
      product.productPrice <= priceRange[1];

    return categoryMatch && brandMatch && priceMatch;
  });

  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-8 gap-6">
        {/* Filtering Section */}
        <div className="hidden md:block md:col-span-2 md:row-span-8 bg-gray-50 p-4 md:p-6 rounded-lg shadow-md">
          <div className="space-y-6">
            {/* Filter by Category */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Category
              </h2>
              <div className="space-y-1">
                {categories.map((category, index) => (
                  <div
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded transition"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      className="w-4 h-4 text-blue-500 focus:ring-blue-400 rounded border-gray-300"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <label
                      htmlFor={`category-${index}`}
                      className="text-gray-600 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter by Brand */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Brand
              </h2>
              <div className="space-y-1">
                {brands.map((brand, index) => (
                  <div
                    className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded transition"
                    key={index}
                  >
                    <input
                      type="checkbox"
                      id={`brand-${index}`}
                      className="w-4 h-4 text-blue-500 focus:ring-blue-400 rounded border-gray-300"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <label
                      htmlFor={`brand-${index}`}
                      className="text-gray-600 cursor-pointer"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Filter by Price */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Filter by Price
              </h2>
              <div className="flex flex-col gap-2">
                <input
                  type="range"
                  name="minPrice"
                  min={minPrice}
                  max={maxPrice}
                  step="1"
                  value={priceRange[0]}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <input
                  type="range"
                  name="maxPrice"
                  min={minPrice}
                  max={maxPrice}
                  step="1"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  className="w-full"
                />
                <div className="flex justify-between text-gray-600">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="md:col-span-4 md:row-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ShopingCard key={product._id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Shop;
