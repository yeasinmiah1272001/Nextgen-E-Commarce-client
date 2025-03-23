import React from "react";

const Review = () => {
  return (
    <div className="mt-4 border-t border-gray-200 pt-3">
      <h2 className="text-sm font-semibold text-gray-900 mb-2">Your Review</h2>
      <div className="flex flex-col gap-2">
        <div className="flex items-start gap-2">
          <div className="h-8 w-8 rounded-full bg-gray-300">
            <img src="image" alt="image" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium text-gray-800">User Name</span>
            <p className="text-xs text-gray-600">
              This product is amazing! Highly recommend.
            </p>
          </div>
        </div>
      </div>
      <form className="mt-3">
        <textarea
          className="w-full rounded border border-gray-300 p-2 text-xs text-gray-700 focus:outline-none"
          rows="3"
          placeholder="Write a comment..."
        ></textarea>
        <button className="mt-2 rounded bg-gray-300 px-3 py-1 text-xs text-black hover:bg-primary-dark transition-all">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Review;
