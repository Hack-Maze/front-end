import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import SolvedChallenges from "@/components/SolvedChallenges";
import CreatedChallenges from "@/components/CreatedChallenges";
import Activity from "@/components/Activity";
import ProfileComp from "@/components/ProfileComp";

const Profile = () => {
  const [activeItem, setActiveItem] = useState("profile");
  const handleItemClick = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="text-white w-[80%] m-auto my-10 min-h-[75vh]">
      <div className="flex flex-col justify-center items-center gap-16">
        <div className="flex flex-col gap-5 items-center text-center w-[40%]">
          <CgProfile size={100} />
          <h2 className="text-xl font-semibold">Hack Maze</h2>
          <p className="text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
            possimus et molestiae aperiam magnam itaque eligendi odit, vel
            reprehenderit error.
          </p>
          <span className="text-sm">Joined March 2024</span>
        </div>
        <ul className="flex gap-8 text-2xl">
          <li
            className={`cursor-pointer ${
              activeItem === "profile"
                ? "text-[#5EE848] border-b-2 border-[#5EE848]"
                : "hover:text-[#5de84881]"
            }`}
            onClick={() => handleItemClick("profile")}
          >
            Profile
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              activeItem === "solved"
                ? "text-[#5EE848] border-b-2 border-[#5EE848]"
                : "hover:text-[#5de84881]"
            }`}
            onClick={() => handleItemClick("solved")}
          >
            Solved Challenges
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              activeItem === "created"
                ? "text-[#5EE848] border-b-2 border-[#5EE848]"
                : "hover:text-[#5de84881]"
            }`}
            onClick={() => handleItemClick("created")}
          >
            Created Challenges
          </li>
          <li
            className={`flex items-center cursor-pointer ${
              activeItem === "activity"
                ? "text-[#5EE848] border-b-2 border-[#5EE848]"
                : "hover:text-[#5de84881]"
            }`}
            onClick={() => handleItemClick("activity")}
          >
            Activity
          </li>
        </ul>
        {activeItem === "profile" ? (
          <ProfileComp />
        ) : activeItem === "solved" ? (
          <SolvedChallenges />
        ) : activeItem === "created" ? (
          <CreatedChallenges />
        ) : (
          <Activity />
        )}
      </div>
    </div>
  );
};

export default Profile;
