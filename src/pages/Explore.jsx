import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { GiMaze } from "react-icons/gi";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "@/components/LoadingItem";

const Explore = () => {
  const { mazeId, title } = useParams();
  const [mazeData, setMazeData] = useState();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mazeData]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchMazeData = async () => {
      try {
        const response = await customFetch.get(`maze/${mazeId}`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
        if (response.status === 200) {
          setMazeData(response.data);
        } else {
          toast.error("Error fetching maze data");
        }
      } catch (error) {
        console.log("Error deleting maze:", error);
      }
    };
    fetchMazeData();
  }, [mazeId]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const fetchRooms = async () => {
      try {
        const response = await customFetch.get(`maze`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        });
        console.log(response.data);
        setRooms(response.data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  if (!mazeData) {
    return (
      <div className="text-center">
        <LoadingItem />
      </div>
    );
  }

  const levelColors = {
    fundamental: { color: "text-green-600", bgColor: "bg-[#336c4794]" },
    easy: { color: "text-blue-600", bgColor: "bg-[#2e4868a1]" },
    medium: { color: "text-yellow-600", bgColor: "bg-[#6c652c8c]" },
    hard: { color: "text-red-700", bgColor: "bg-[#62282875]" },
  };

  const formattedSummary = mazeData.summary
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  const sectionsList = mazeData.pages.map((page, index) => (
    <li key={index} className="list-disc leading-7">
      {page.title}
    </li>
  ));

  const recommendedMazes = rooms.filter((room) => {
    return (
      room.difficulty.toLowerCase() === mazeData.difficulty.toLowerCase() &&
      room.title.toLowerCase() !== mazeData.title.toLowerCase()
    );
  });

  return (
    <div className="w-[75vw] min-h-[85vh] m-auto my-10 text-white">
      <div key={mazeData.id}>
        <div className="border-2 border-[#81a77c94] p-4 pb-6 flex rounded-md justify-between items-center mb-10 shadow-box bg-[#0f20183f]">
          <div className="flex gap-5 items-center">
            <img src={mazeData.image} alt={mazeData.title} className="w-48" />
            <div className="w-[50%]">
              <h1 className="text-2xl font-semibold mb-2 capitalize">
                {mazeData.title}
              </h1>
              <p className="text-gray-300 capitalize">{mazeData.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <p
              className={`p-2 font-medium capitalize my-4 rounded-md tracking-wider ${
                levelColors[mazeData.difficulty.toLowerCase()].color
              } ${levelColors[mazeData.difficulty.toLowerCase()].bgColor}`}
            >
              {mazeData.difficulty}
            </p>
            <Link
              to={`/learn/${mazeId}/${title}/${
                mazeData.pages[0].title.replace(/\s/g, "-") || ""
              }`}
              className="border py-1 px-10 text-lg font-semibold rounded-md hover:bg-slate-800"
            >
              Enroll
            </Link>
          </div>
        </div>
        <div className="flex justify-between my-10 h-[50vh]">
          <div className="w-[70%]">
            <h2 className="text-3xl font-semibold mb-2">Maze Summary</h2>
            <div className="text-gray-300 leading-9 w-full">
              {formattedSummary}
            </div>
          </div>
          <div className="h-fit border-2 border-[#81a77c94] p-5 w-[23%] rounded-md shadow-box bg-[#0f20183f]">
            <div className="flex">
              <GiMaze size={30} />

              <h2 className="capitalize mb-2 ml-2 text-2xl font-bold">
                maze sections
              </h2>
            </div>
            <ul className="ml-8 text-gray-200">{sectionsList}</ul>
          </div>
        </div>
        {recommendedMazes.length > 0 && (
          <div className="flex flex-col">
            <div className="flex flex-col mb-5">
              <h2 className="capitalize text-2xl font-bold">
                recommended mazes
              </h2>
              <p className="text-gray-400">
                This module progresses you towards the following{" "}
                <span className="text-[#5EE848]">Mazes</span>
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {recommendedMazes.map((maze, index) => (
                <Link
                  key={index}
                  to={`/learn/${maze.id}/${maze.title
                    .toLowerCase()
                    .replace(/\s/g, "-")}`}
                  className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-8 items-center rounded-md max-w-md shadow-box hover:border-[#5de84844] transition duration-300 ease-in-out"
                >
                  <img src={maze.image} alt="image" className="w-30" />
                  <h2 className="text-xl my-3 text-white font-semibold">
                    {maze.title}
                  </h2>
                  <p className="text-gray-400 px-3 text-sm leading-7">
                    {maze.description.length > 130
                      ? `${maze.description.substring(0, 130)}...`
                      : maze.description}
                  </p>
                  <p
                    className={`p-2 font-bold capitalize my-4 rounded-md tracking-wider ${
                      maze.difficulty &&
                      levelColors[maze.difficulty.toLowerCase()]
                        ? `${
                            levelColors[maze.difficulty.toLowerCase()].color
                          } ${
                            levelColors[maze.difficulty.toLowerCase()].bgColor
                          }`
                        : ""
                    }`}
                  >
                    {maze.difficulty}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
