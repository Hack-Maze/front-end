import React, { useEffect, useState } from "react";
import empty from "/empty2.svg";
import customFetch from "../../utils/CustomFetsh";
import { Link } from "react-router-dom";
import LoadingItem from "./LoadingItem";

const CreatedMazes = () => {
  const [createdMazes, setCreatedMazes] = useState([]);
  useEffect(() => {
    const fetchCreatedMazes = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await customFetch.get("profile/created-mazes", {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        setCreatedMazes(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCreatedMazes();
  }, []);

  const difficultyColors = {
    fundamental: { color: "text-green-600", bgColor: "bg-[#336c4794]" },
    easy: { color: "text-blue-600", bgColor: "bg-[#2e4868a1]" },
    medium: { color: "text-yellow-600", bgColor: "bg-[#6c652c8c]" },
    hard: { color: "text-red-700", bgColor: "bg-[#62282875]" },
  };

  if (!createdMazes) {
    return <LoadingItem />;
  }

  return (
    <>
      {createdMazes ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {createdMazes.map((maze) => (
            <Link
              to={`/learn/${maze.id}/${maze.title
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-4 items-center rounded-md max-w-md shadow-box hover:border-[#5de84844] transition duration-300 ease-in-out"
            >
              <img
                src={maze.image}
                alt="image"
                className="h-40 w-72"
                loading="lazy"
              />

              <h2
                className="text-xl my-5 w-52 h-16 text-white font-semibold"
                title={maze.title}
                style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              >
                {maze.title.length > 30
                  ? maze.title.slice(0, 25).concat("...")
                  : maze.title}
              </h2>

              <p
                className="text-gray-400 px-3 w-72 h-16 text-sm"
                style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              >
                {maze.description.length > 70
                  ? `${maze.description.substring(0, 68)}...`
                  : maze.description}
              </p>
              <p
                className={`p-2 font-bold capitalize my-4 rounded-md tracking-wider ${
                  maze.difficulty &&
                  difficultyColors[maze.difficulty.toLowerCase()]
                    ? `${
                        difficultyColors[maze.difficulty.toLowerCase()].color
                      } ${
                        difficultyColors[maze.difficulty.toLowerCase()].bgColor
                      }`
                    : ""
                }`}
              >
                {maze.difficulty}
              </p>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-white flex flex-col justify-center">
          <img src={empty} alt="empty" className="h-80" />
          <h2 className="font-semibold">
            Haven't created any challenges yet? Start crafting your own maze!
          </h2>
        </div>
      )}
    </>
  );
};

export default CreatedMazes;
