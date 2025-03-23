import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import ServicesTag from "./ServicesTag";
import Products from "./Products/Products";
import Brand from "../../components/Brand";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ServicesTag />
      <Products />
      <Brand />
    </div>
  );
};

export default Home;
