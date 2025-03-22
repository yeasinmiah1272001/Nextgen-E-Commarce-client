import React from "react";
import useProducts from "../../../hooks/useProducts";

const AllProduct = () => {
  const [products] = useProducts();
  console.log("products", products);

  return <div>AllProduct</div>;
};

export default AllProduct;
