import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import ServicesTag from "./ServicesTag";
import Products from "./Products/Products";
import Brand from "../../components/Brand";
import NewsletterSection from "../../components/NewsletterSection";
import Promotion from "../../components/Promotion";
import WatchPromotion from "../../components/WatchPromotion";
import NewArrivals from "./NewArrivals";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <ServicesTag />
      <Products />
      <Promotion />
      <NewArrivals />
      <Brand />
      <WatchPromotion />
      <NewsletterSection />
    </div>
  );
};

export default Home;
