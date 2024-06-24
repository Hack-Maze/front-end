import React, { useEffect, useState } from "react";
import empty from "/empty.svg";
import customFetch from "../../utils/CustomFetsh";
import LoadingItem from "./LoadingItem";
import { Link } from "react-router-dom";

const SolvedMazes = ({ username }) => {
  const [solvedMazes, setSolvedMazes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSolvedMazes = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await customFetch.get(
          `maze/solved-mazes/${username}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        );
        setSolvedMazes(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSolvedMazes();
  }, [username]);

  if (loading) {
    return <LoadingItem />;
  }

  return (
    <>
      {solvedMazes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {solvedMazes.map((maze) => (
            <Link
              to={`/learn/${maze.id}/${maze.title
                .toLowerCase()
                .replace(/\s/g, "-")}`}
              className="flex flex-col text-center justify-evenly border border-[#5874593a] bg-[#0f20183f] p-4 items-center rounded-md max-w-md shadow-box hover:border-[#5de84844] transition duration-300 ease-in-out"
              key={maze.id}
            >
              <img
                src={maze.image}
                alt="image"
                className="h-40 w-72"
                loading="lazy"
              />

              <h2
                className="text-xl mt-5 w-52 h-16 text-white font-semibold capitalize"
                title={maze.title}
                style={{ whiteSpace: "normal", overflowWrap: "break-word" }}
              >
                {maze.title.length > 30
                  ? maze.title.slice(0, 25).concat("...")
                  : maze.title}
              </h2>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-white flex flex-col justify-center">
          <img src={empty} alt="empty" className="h-80" />
          <h2 className="font-semibold">
            No challenges solved yet? Explore more and conquer the maze!
          </h2>
        </div>
      )}
    </>
  );
};

export default SolvedMazes;
