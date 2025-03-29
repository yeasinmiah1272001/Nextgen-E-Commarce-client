import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reseetCart } from "../../redux/nextGenSlice";
import toast from "react-hot-toast";

const CheckoutForm = ({ cart, totalPrice }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the client secret when totalPrice changes
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { totalPrice })
        .then((response) => setClientSecret(response.data.clientSecret))
        .catch((error) => console.error(error));
    }
  }, [totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card,
          billing_details: {
            name: "Customer Name", // Add dynamic customer details
          },
        },
      }
    );

    if (error) {
      console.error(error.message);
    } else {
      console.log("Payment successful!", paymentIntent);

      // Save payment details to the backend
      axiosSecure
        .post("/save-payment", {
          cart,
          totalPrice,
          paymentIntentId: paymentIntent.id,
          userInfo: {
            name: user?.displayName,
            email: user?.email,
            image: user?.photoURL,
          },
        })
        .then((response) => {
          console.log("Payment saved:", response.data);
          navigate("/dashboard/paymentHistry");
          dispatch(reseetCart(cart));
          toast.success("payment success");
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto p-6 bg-white rounded-lg shadow-lg space-y-6"
    >
      <div className="flex items-center gap-4">
        <div className="border border-gray-300 p-3 rounded-lg w-full">
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
            className="w-full text-gray-700"
          />
        </div>

        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="bg-blue-600 p-2 px-4 text-sm font-medium text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition-all"
        >
          Pay <span className="ml-1">{totalPrice.toFixed(2)}$</span>
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
