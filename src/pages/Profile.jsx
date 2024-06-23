// Profile.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ProfileComp from "@/components/ProfileComp";
import { useHomeContext } from "@/pages/Home";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "@/components/LoadingItem";
import Error_500 from "./Error/500";
import CreatedMazes from "@/components/CreatedMazes";
import SolvedMazes from "@/components/SolvedMazes";

const Profile = () => {
  const [activeItem, setActiveItem] = useState("profile");
  const { username } = useParams();
  const { data: homeData } = useHomeContext();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        if (username) {
          const accessToken = localStorage.getItem("accessToken");
          const response = await customFetch.get(
            `profile/username/${username}`,
            {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );
          setProfileData(response.data);
        } else {
          setProfileData(homeData);
        }
      } catch (error) {
        if (error.response && error.response.status === 500) {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [username, homeData, navigate]);

  const data = profileData || homeData;

  if (error) {
    return <Error_500 />;
  }

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
                  Solved Mazes
                </li>
                <li
                  className={`flex items-center cursor-pointer ${
                    activeItem === "created"
                      ? "text-[#5EE848] border-b-2 border-[#5EE848]"
                      : "hover:text-[#5de84881]"
                  }`}
                  onClick={() => handleItemClick("created")}
                >
                  Created Mazes
                </li>
                {/* <li
                  className={`flex items-center cursor-pointer ${
                    activeItem === "activity"
                      ? "text-[#5EE848] border-b-2 border-[#5EE848]"
                      : "hover:text-[#5de84881]"
                  }`}
                  onClick={() => handleItemClick("activity")}
                >
                  Activity
                </li> */}
              </ul>
            </>
            {
              activeItem === "profile" ? (
                <ProfileComp data={data} />
              ) : activeItem === "solved" ? (
                <SolvedMazes />
              ) : (
                <CreatedMazes />
              )
              //       : (
              // <Activity />
              //   )
            }
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
