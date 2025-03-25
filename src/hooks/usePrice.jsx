import React, { useEffect, useState } from "react";
import useProducts from "./useProducts";

const usePrice = () => {
  const [products] = useProducts();
  const [prices, setPrices] = useState([]); // Original product prices
  const [discounts, setDiscounts] = useState([]); // Discount percentages
  const [runningPrices, setRunningPrices] = useState([]); // Final prices after discount

  // Function to calculate the discounted price
  const calculateDiscountedPrice = (price, discount) => {
    const discountAmount = (price * discount) / 100;
    return price - discountAmount;
  };

  useEffect(() => {
    const allPrices = products.map((product) => product.productPrice);
    const allDiscounts = products.map(
      (product) => product.discountedPersentage
    );
    const allRunningPrices = products.map((product) =>
      calculateDiscountedPrice(
        product.productPrice,
        product.discountedPersentage
      )
    );

    setPrices(allPrices);
    setDiscounts(allDiscounts);
    setRunningPrices(allRunningPrices);
  }, [products]);

  return [prices, discounts, runningPrices];
};

export default usePrice;
