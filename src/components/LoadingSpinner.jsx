import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <AiOutlineLoading3Quarters className="animate-spin text-blue-500 text-6xl" />
        <p className="mt-4 text-gray-700 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
