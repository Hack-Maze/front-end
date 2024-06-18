import React from "react";
import "../../assets/style.css";
import { Link } from "react-router-dom";
const Error_500 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent text-center">
      <div className="p-16">
        <h1 className="text-[150px] text-[#013c3350] shadow-text">500</h1>
        <div className="my-8 text-xl font-semibold text-gray-500">
          Ooops!!! User is not found
        </div>
        <Link
          className="inline-block border-2 border-gray-900 text-white uppercase font-semibold px-4 py-3 rounded-md bg-gray-900 transition-all duration-200 shadow-md hover:bg-gray-900 hover:text-gray-300"
          to={"/dashboard"}
        >
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error_500;
