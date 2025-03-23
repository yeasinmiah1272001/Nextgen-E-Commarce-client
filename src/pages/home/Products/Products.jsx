import React from "react";
import ProductCard from "./ProductCard";
import Container from "../../../components/Container";
import useProducts from "../../../hooks/useProducts";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Products = () => {
  const [products, isLoading] = useProducts();
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="bg-[#F1F3F8] mt-10">
      <Container className="">
        <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
