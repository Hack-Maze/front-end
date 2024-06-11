import React, { useEffect, useState } from "react";
import SolvedChallenges from "@/components/SolvedChallenges";
import CreatedChallenges from "@/components/CreatedChallenges";
import Activity from "@/components/Activity";
import ProfileComp from "@/components/ProfileComp";

import { useHomeContext } from "@/pages/Home";
import { useParams } from "react-router-dom";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "@/components/LoadingItem"; // Assuming you have a LoadingItem component

const Profile = () => {
  const [activeItem, setActiveItem] = useState("profile");
  const { username } = useParams();
  const { data: homeData } = useHomeContext();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        if (username) {
          const response = await customFetch.get(`profile/${username}`);
          setProfileData(response.data);
        } else {
          setProfileData(homeData);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [username, homeData]);

  const data = profileData || homeData;

  return (
    <div className="text-white w-[80%] m-auto my-10 min-h-[75vh]">
      <div className="flex flex-col justify-center items-center gap-16">
        {loading ? (
          <div className="text-center">
            <LoadingItem />
          </div>
        ) : (
          <div className="flex flex-col gap-5 items-center text-center w-full">
            <>
              <img
                className="w-48 h-48"
                src={
                  data.image ||
                  `https://api.dicebear.com/7.x/initials/svg?size=25&seed=${data.username}&backgroundColor=11221a&textColor=ffffff&radius=50&fontSize=50&fontWeight=100`
                }
                alt="profile"
                loading="lazy"
              />
              <h2 className="text-2xl font-semibold capitalize">
                {data.username}
              </h2>
              {/* <p className="text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                possimus et molestiae aperiam magnam itaque eligendi odit, vel
                reprehenderit error.
              </p>
              <span className="text-sm">Joined March 2024</span> */}
            </>
            <>
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
            </>
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
        )}
      </div>
    </div>
  );
};

export default Profile;
