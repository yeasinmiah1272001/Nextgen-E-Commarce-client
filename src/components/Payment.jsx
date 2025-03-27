import React from "react";

import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./form/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISABLE_KEY);
const Payment = ({ cart, totalPrice }) => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} totalPrice={totalPrice} />
      </Elements>
    </div>
  );
};

export default Payment;
