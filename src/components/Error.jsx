import React from "react";
import { Link } from "react-router-dom";
import { FiAlertTriangle } from "react-icons/fi";

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="flex flex-col items-center text-center bg-white shadow-lg rounded-lg p-8 border-t-4 border-red-500">
        <FiAlertTriangle className="text-red-500 text-6xl mb-4" />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The page you are looking for does not exist or an error occurred.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-600 transition"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
