import React from "react";
import empty from "/empty.svg";

const SolvedChallenges = () => {
  return (
    <div className="text-white flex flex-col justify-center">
      <img src={empty} alt="empty" className="h-80" />
      <h2 className="font-semibold">
        No challenges solved yet? Explore more and conquer the maze!
      </h2>
    </div>
  );
};

export default SolvedChallenges;
