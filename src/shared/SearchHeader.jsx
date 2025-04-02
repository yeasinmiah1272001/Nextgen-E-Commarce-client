import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [products] = useProducts();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSearching(true);
      if (search.trim() === "") {
        setFilterData([]);
      } else {
        const filtered = products.filter((item) =>
          item.productName.toLowerCase().includes(search.toLowerCase())
        );
        setFilterData(filtered);
      }
      setIsSearching(false);
    }, 300); // Debounce to 300ms

    return () => clearTimeout(timeout);
  }, [search, products]);

  const handleBlur = () => {
    setTimeout(() => setFilterData([]), 200);
  };

  return (
    <div className="relative hidden md:block w-1/3">
      <input
        type="text"
        placeholder="Search product..."
        className="w-full px-4 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring focus:ring-yellow-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={handleBlur}
      />
      <FaSearch className="absolute right-3 top-3 text-gray-500" />

      {/* Search Results Dropdown */}
      {search && filterData.length > 0 && (
        <ul className="absolute left-0 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-y-auto">
          {filterData.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-yellow-100 cursor-pointer"
            >
              <Link
                to={`/details/${item._id}`}
                className="flex items-center gap-2"
                onMouseDown={(e) => e.preventDefault()} // Prevents input blur before clicking link
              >
                <img
                  className="w-10 rounded-full"
                  src={item.images[0]}
                  alt=""
                />
                <p>{item.productName}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchHeader;
