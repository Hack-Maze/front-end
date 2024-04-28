import React from "react";
import empty from "/empty2.svg";

const CreatedChallenges = () => {
  return (
    <div className="text-white flex flex-col justify-center">
      <img src={empty} alt="empty" className="h-80" />
      <h2 className="font-semibold">
        Haven't created any challenges yet? Start crafting your own maze!
      </h2>
    </div>
  );
};

export default CreatedChallenges;
