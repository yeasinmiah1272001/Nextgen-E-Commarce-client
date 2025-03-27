import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = ({ cart, totalPrice }) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg space-y-4"
    >
      <div className="flex items-center mb-3 gap-2">
        <div className="border border-gray-300 p-2 rounded-lg w-full">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
            className="w-full p-2 text-gray-700"
          />
        </div>

        <button
          type="submit"
          disabled={!stripe}
          className=" bg-blue-600 px-6  text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
        >
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
