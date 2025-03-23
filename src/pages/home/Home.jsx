import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import ServicesTag from "./ServicesTag";
import Products from "./Products/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ServicesTag />
      <Products />
    </div>
  );
};

export default Home;
