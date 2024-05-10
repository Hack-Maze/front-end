import React from "react";
import success from "/success.png";
import { Link } from "react-router-dom";

const MazeSuccess = () => {
  return (
    <div className="w-[70%] m-auto my-10 min-h-[75vh] text-white">
      <div className="flex justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-4">Congratulations!</h1>
          <p className="text-2xl text-gray-400">
            Your maze has been successfully created.
          </p>
        </div>
        <Link
          to="/learn"
          className="py-2 px-5 border border-[#5EE848] rounded-md mt-10 text-lg text-[#5EE848] hover:bg-[#5de8481c] w-fit"
        >
          View Mazes
        </Link>
      </div>
      <div className="h-[60vh] flex items-center justify-center">
        <img src={success} alt="image" />
      </div>
    </div>
  );
};

export default MazeSuccess;
