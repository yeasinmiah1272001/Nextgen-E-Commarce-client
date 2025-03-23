import React from "react";
import ProductCard from "./ProductCard";
import Container from "../../../components/Container";
import useProducts from "../../../hooks/useProducts";
import LoadingSpinner from "../../../components/LoadingSpinner";
import Title from "../../../components/Title";

const Products = () => {
  const [products, isLoading] = useProducts();
  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="bg-[#F1F3F8] mt-10">
      <Container className="">
        <Title title={"Featured Products"} />
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
