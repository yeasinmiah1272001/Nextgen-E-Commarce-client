import React, { useContext, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-hot-toast";

const Review = ({ product }) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [reviewText, setReviewText] = useState("");
  const id = product._id;

  const mutation = useMutation({
    mutationFn: async (reviewInfo) => {
      await axiosSecure.put(`/review/${id}`, reviewInfo);
    },
    onSuccess: () => {
      setReviewText("");
      toast.success("Review submitted successfully!");
    },
    onError: (error) => {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review.");
    },
  });

  const handleReview = (e) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      toast.error("Review cannot be empty.");
      return;
    }
    const reviewInfo = {
      review: reviewText,
      name: user?.displayName || "Anonymous",
      image: user?.photoURL || "default-image-url",
    };
    mutation.mutate(reviewInfo);
  };

  const allReview = product.reviews;

  return (
    <div className="mt-8 border-t border-gray-300 pt-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Review</h2>

      {/* Review Section */}
      {allReview && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            {allReview.map((cmt, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src={cmt?.image || "default-image-url"}
                    alt={cmt?.name || "User"}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800">
                    {cmt?.name || "Anonymous"}
                  </span>
                  <p className="text-sm text-gray-600 mt-1">{cmt?.review}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Submit Review Form */}
      <form onSubmit={handleReview} className="mt-6">
        <textarea
          className="w-full rounded-lg border border-gray-300 p-4 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          rows="4"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          name="review"
          placeholder="Write a comment..."
        ></textarea>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className={`mt-4 w-24 rounded-lg py-2 text-sm font-medium transition-all ${
            mutation.isLoading
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {mutation.isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Review;
