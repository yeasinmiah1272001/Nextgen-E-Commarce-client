import React from "react";
import ProductCard from "./ProductCard";
import Container from "../../../components/Container";
import useProducts from "../../../hooks/useProducts";
import LoadingSpinner from "../../../components/LoadingSpinner";

const Products = () => {
  const [products, isLoading] = useProducts();
  if (isLoading) return <LoadingSpinner />;
  return (
    <Container className="">
      <h2 className="mb-6 text-2xl font-bold">Featured Products</h2>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default Products;
