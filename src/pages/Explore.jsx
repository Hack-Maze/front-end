import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { GiMaze } from "react-icons/gi";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "@/components/LoadingItem";
import { toast } from "sonner";
import "../assets/style.css";
const Explore = () => {
  const { mazeId, title } = useParams();
  const [mazeData, setMazeData] = useState();
  const [mazeEnrolled, setMazeEnrolled] = useState();
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  localStorage.setItem("file", mazeData?.file);
  localStorage.setItem("type", mazeData?.type);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [mazeData]);

  useEffect(() => {
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
        console.log("Error fetching maze:", error);
      }
    };
    fetchMazeData();
  }, [mazeId]);

  useEffect(() => {
    const fetchEnrollmentStatus = async () => {
      try {
        const response = await customFetch.get(
          `maze/is-current-user-enrolled/${mazeId}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setMazeEnrolled(response.data);
      } catch (error) {
        console.log("Error fetching maze enrollment status:", error);
      }
    };
    fetchEnrollmentStatus();
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

  const handleEnrollMaze = async () => {
    try {
      const response = await customFetch.post(
        `progress/enroll-user-to-maze/${mazeId}`,
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      if (response.status === 200) {
        navigate(
          `/learn/${mazeId}/${title}/${mazeData?.pages[0]?.title.replace(
            /\s/g,
            "-"
          )}`
        );
        toast.success("Enrolled successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[75vw] min-h-[85vh] m-auto my-10 text-white">
      <div key={mazeData.id}>
        <div className="border-2 border-[#81a77c94] p-4 pb-6 flex rounded-md justify-between items-center mb-10 shadow-box bg-[#0f20183f]">
          <div className="flex gap-5 items-center w-[80%]">
            <img
              src={mazeData.image}
              alt={mazeData.title}
              className="h-32 w-64"
              loading="lazy"
            />
            <div
              className="w-[80%]"
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
            >
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
            {!mazeEnrolled ? (
              <button
                className="border py-1 px-10 text-lg font-semibold rounded-md hover:bg-slate-800"
                onClick={handleEnrollMaze}
              >
                Enroll
              </button>
            ) : (
              <Link
                to={`/learn/${mazeId}/${title}/${mazeData?.pages[0]?.title.replace(
                  /\s/g,
                  "-"
                )}`}
                className="border py-1 px-10 text-lg font-semibold rounded-md hover:bg-slate-800"
              >
                Enter Maze
              </Link>
            )}
          </div>
        </div>
        <div className="flex justify-between my-10 min-h-[50vh]">
          <div className="w-[70%] ">
            <h2 className="text-3xl font-semibold mb-4">Maze Summary</h2>
            <div
              className="custom-html-content h-[80vh] overflow-y-scroll overflow-x-hidden pr-2"
              dangerouslySetInnerHTML={{ __html: mazeData.summary }}
            />
          </div>
          <div className="h-fit border-2 border-[#81a77c94] p-5 w-[23%] rounded-md shadow-box bg-[#0f20183f]">
            <div className="flex">
              <GiMaze size={30} />

              <h2 className="capitalize mb-2 ml-2 text-2xl font-bold">
                maze sections
              </h2>
            </div>
            <ul
              className="ml-8 text-gray-200"
              style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
            >
              {sectionsList}
            </ul>
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-center w-[80%] mx-auto">
              {recommendedMazes.map((maze, index) => (
                <Link
                  key={index}
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
                    title={maze.description}
                    style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
                  >
                    {maze.description.length > 70
                      ? `${maze.description.substring(0, 68)}...`
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
                  <p className="text-white">
                    By:{" "}
                    <Link
                      to={`/profile/${maze.author.username}`}
                      className="text-green-600 hover:underline"
                    >
                      {maze.author.username}
                    </Link>
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
